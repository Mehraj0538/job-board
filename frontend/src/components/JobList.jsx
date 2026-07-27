import JobCard from "./JobCard";

export default function JobList({ jobs, onDelete, onPostClick }) {
  if (!jobs) {
    return (
      <div className="job-list">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="skeleton-card">
            <div className="skeleton-avatar"></div>
            <div style={{ flex: 1 }}>
              <div className="skeleton-text" style={{ width: "40%" }}></div>
              <div className="skeleton-text" style={{ width: "65%" }}></div>
              <div className="skeleton-text" style={{ width: "90%" }}></div>
              <div className="skeleton-text" style={{ width: "55%" }}></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3 className="empty-title">No matching jobs found</h3>
        <p className="empty-desc">
          Try broadening your search keywords, location, or filter criteria — or post a new job opportunity for jobseekers.
        </p>
        {onPostClick && (
          <button className="btn-primary" onClick={onPostClick}>
            + Post a New Job
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDelete={onDelete} />
      ))}
    </div>
  );
}
