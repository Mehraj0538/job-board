import JobCard from "./JobCard";

export default function JobList({ jobs, onDelete }) {
  if (!jobs) return <p>Loading jobs...</p>;
  if (jobs.length === 0) return <p>No jobs found.</p>;

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDelete={onDelete} />
      ))}
    </div>
  );
}
