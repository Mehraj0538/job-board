export default function JobCard({ job, onDelete }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <div className="meta">
        {job.company} &middot; {job.location} &middot; {job.jobType || ""}
      </div>
      {job.description && <div className="desc">{job.description}</div>}
      <div className="meta">
        Salary: {job.minSalary ?? "-"} - {job.maxSalary ?? "-"}
      </div>
      {job.applyUrl && (
        <a href={job.applyUrl} target="_blank" rel="noreferrer">
          Apply here
        </a>
      )}
      <button className="del" onClick={() => onDelete(job.id)}>
        Delete
      </button>
    </div>
  );
}
