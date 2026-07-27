package com.globalco.jobboard.repository;

import com.globalco.jobboard.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface JobRepository extends JpaRepository<Job, Long>, JpaSpecificationExecutor<Job> {
    boolean existsByTitleAndCompanyAndLocation(String title, String company, String location);
}
