export default function JobCard({ job, onDelete }) {
  const initial = job.company ? job.company.charAt(0).toUpperCase() : "J";

  function formatSalary(min, max, type) {
    if (!min && !max) return "Salary Undisclosed";
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });
    
    const minFormatted = min ? formatter.format(min) : "";
    const maxFormatted = max ? formatter.format(max) : "";
    const period = type === "INTERNSHIP" ? "/ mo" : "/ yr";

    if (minFormatted && maxFormatted) return `${minFormatted} - ${maxFormatted} ${period}`;
    if (minFormatted) return `From ${minFormatted} ${period}`;
    return `Up to ${maxFormatted} ${period}`;
  }

  function getBadgeClass(type) {
    switch (type) {
      case "FULL_TIME":
        return "badge badge-fulltime";
      case "INTERNSHIP":
        return "badge badge-intern";
      case "CONTRACT":
        return "badge badge-contract";
      default:
        return "badge";
    }
  }

  function formatJobType(type) {
    switch (type) {
      case "FULL_TIME":
        return "Full Time";
      case "INTERNSHIP":
        return "Internship";
      case "CONTRACT":
        return "Contract";
      default:
        return type || "Direct Hire";
    }
  }

  return (
    <div className="job-card">
      <div className="job-card-main">
        <div className="company-avatar">{initial}</div>
        <div className="job-details">
          <div className="job-header-row">
            <h3 className="job-title">{job.title}</h3>
            <span className={getBadgeClass(job.jobType)}>
              {formatJobType(job.jobType)}
            </span>
          </div>

          <div className="job-meta">
            <span className="meta-item">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <strong>{job.company}</strong>
            </span>

            <span className="meta-item">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </span>

            <span className="meta-item">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatSalary(job.minSalary, job.maxSalary, job.jobType)}
            </span>
          </div>

          {job.description && (
            <p className="job-description">{job.description}</p>
          )}
        </div>
      </div>

      <div className="job-card-actions">
        {job.applyUrl ? (
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-apply"
          >
            Apply Now
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <span className="btn-apply" style={{ opacity: 0.5, cursor: "not-allowed" }}>
            Direct Contact
          </span>
        )}

        <button
          className="btn-delete"
          onClick={() => {
            if (window.confirm(`Delete "${job.title}" posting?`)) {
              onDelete(job.id);
            }
          }}
          title="Delete role"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
