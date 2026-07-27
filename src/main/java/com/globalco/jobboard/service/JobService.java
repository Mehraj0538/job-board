package com.globalco.jobboard.service;

import com.globalco.jobboard.exception.JobNotFoundException;
import com.globalco.jobboard.model.Job;
import com.globalco.jobboard.repository.JobRepository;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new JobNotFoundException(id));
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public Job updateJob(Long id, Job updated) {
        Job existing = getJobById(id);
        existing.setTitle(updated.getTitle());
        existing.setCompany(updated.getCompany());
        existing.setLocation(updated.getLocation());
        existing.setDescription(updated.getDescription());
        existing.setJobType(updated.getJobType());
        existing.setMinSalary(updated.getMinSalary());
        existing.setMaxSalary(updated.getMaxSalary());
        existing.setApplyUrl(updated.getApplyUrl());
        return jobRepository.save(existing);
    }

    public void deleteJob(Long id) {
        Job existing = getJobById(id);
        jobRepository.delete(existing);
    }

    public List<Job> search(String keyword, String location, String jobType) {
        Specification<Job> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (keyword != null && !keyword.isBlank()) {
                String like = "%" + keyword.toLowerCase() + "%";
                predicates.add(cb.or(
                        cb.like(cb.lower(root.get("title")), like),
                        cb.like(cb.lower(root.get("company")), like),
                        cb.like(cb.lower(root.get("description")), like)
                ));
            }
            if (location != null && !location.isBlank()) {
                predicates.add(cb.like(cb.lower(root.get("location")), "%" + location.toLowerCase() + "%"));
            }
            if (jobType != null && !jobType.isBlank()) {
                predicates.add(cb.equal(cb.upper(root.get("jobType")), jobType.toUpperCase()));
            }
            return cb.and(predicates.toArray(new Predicate[0]));
        };
        return jobRepository.findAll(spec);
    }
}
