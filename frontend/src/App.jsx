import { useEffect, useState } from "react";
import { getJobs, createJob, deleteJob } from "./api/jobs";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import JobCard from "./components/JobCard";
import JobForm from "./components/JobForm";
import "./App.css";

export default function App() {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'jobs'

  async function load(params) {
    try {
      setError("");
      const data = await getJobs(params);
      setJobs(data);
    } catch {
      setError("Unable to connect to the backend API. Please verify the backend is running.");
      setJobs([]);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(job) {
    await createJob(job);
    load();
  }

  async function handleDelete(id) {
    await deleteJob(id);
    load();
  }

  function goToJobsPage() {
    setCurrentPage("jobs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToHomePage() {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Live stats calculation
  const totalJobs = jobs ? jobs.length : 0;
  const fulltimeJobs = jobs ? jobs.filter((j) => j.jobType === "FULL_TIME").length : 0;
  const internshipJobs = jobs ? jobs.filter((j) => j.jobType === "INTERNSHIP").length : 0;

  return (
    <div className="app">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="brand" onClick={goToHomePage}>
          <div className="brand-icon">JB</div>
          <span className="brand-name">JobBoard Direct</span>
        </div>

        {/* Center Nav Navigation */}
        <div className="nav-center">
          <button
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
            onClick={goToHomePage}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === "jobs" ? "active" : ""}`}
            onClick={goToJobsPage}
          >
            Browse Jobs ({totalJobs})
          </button>
        </div>

        <div className="nav-actions">
          <div className="status-indicator">
            <span className="status-dot"></span>
            Live API Connected
          </div>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
            Post a Job
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <main className="main-container">

        {/* ==================================================================
            PAGE 1: HOME LANDING PAGE
           ================================================================== */}
        {currentPage === "home" && (
          <>
            {/* HERO BANNER SECTION */}
            <section className="hero-banner">
              <div className="hero-pill">
                🚀 100% Verified Tech Opportunities & Free Job Postings
              </div>

              <h1 className="hero-title">
                Discover Your Next Tech Role <br />
                or Hire Top Engineering Talent
              </h1>

              <p className="hero-subtitle">
                A full-stack career platform connecting software engineers with innovative tech teams.
                Search verified opportunities, explore salary ranges, or post open roles in seconds.
              </p>

              {/* Dual CTAs */}
              <div className="hero-cta-group">
                <button className="btn-primary" onClick={goToJobsPage}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Browse All Jobs ({totalJobs})
                </button>
                <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Post a Role
                </button>
              </div>

              {/* Quick Stats Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">{totalJobs}</div>
                  <div className="stat-label">Active Job Openings</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{fulltimeJobs}</div>
                  <div className="stat-label">Full-Time Positions</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{internshipJobs}</div>
                  <div className="stat-label">Internships</div>
                </div>
              </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="how-it-works-section">
              <div className="section-header-center">
                <span className="section-tag">SIMPLE PROCESS</span>
                <h2 className="section-title-large">How It Works</h2>
                <p className="section-subtitle">
                  Whether you are looking to advance your career or hire tech talent, we make it effortless.
                </p>
              </div>

              <div className="steps-grid">
                <div className="step-card">
                  <span className="step-number">STEP 01</span>
                  <h3 className="step-title">Search & Filter</h3>
                  <p className="step-desc">
                    Filter by keyword (e.g., Java, React), location (Remote, Hybrid), or commitment type (Full-time, Internship).
                  </p>
                </div>

                <div className="step-card">
                  <span className="step-number">STEP 02</span>
                  <h3 className="step-title">Review Salary & Stack</h3>
                  <p className="step-desc">
                    Get full visibility on compensation ranges, tech stack requirements, and company profiles before applying.
                  </p>
                </div>

                <div className="step-card">
                  <span className="step-number">STEP 03</span>
                  <h3 className="step-title">Apply or Post Roles</h3>
                  <p className="step-desc">
                    Apply directly to positions with one click, or submit your own team's open engineering positions in seconds.
                  </p>
                </div>
              </div>
            </section>

            {/* FEATURED ROLES PREVIEW + CTA TO DEDICATED JOBS PAGE */}
            <section className="featured-jobs-teaser">
              <div className="section-header-center" style={{ marginBottom: "20px" }}>
                <span className="section-tag">FEATURED OPPORTUNITIES</span>
                <h2 className="section-title-large">Latest Featured Roles</h2>
              </div>

              {jobs && jobs.length > 0 && (
                <div className="job-list">
                  {jobs.slice(0, 3).map((job) => (
                    <JobCard key={job.id} job={job} onDelete={handleDelete} />
                  ))}
                </div>
              )}

              {/* View All Jobs Banner Card */}
              <div className="view-all-cta-card">
                <h3 className="cta-card-title">Explore All {totalJobs} Open Engineering Roles</h3>
                <p className="cta-card-subtitle">
                  Filter by location, job type, or key technical skills on our dedicated career portal page.
                </p>
                <button className="btn-primary" onClick={goToJobsPage}>
                  View All Open Roles ({totalJobs}) ➔
                </button>
              </div>
            </section>
          </>
        )}


        {/* ==================================================================
            PAGE 2: DEDICATED JOBS SEARCH & LISTINGS PAGE
           ================================================================== */}
        {currentPage === "jobs" && (
          <section className="jobs-page-container">
            <div className="jobs-page-header">
              <span className="section-tag">EXPLORE CAREERS</span>
              <h1 className="jobs-page-title">All Active Tech Jobs</h1>
              <p className="jobs-page-subtitle">
                Search, filter, and apply directly to verified software engineering opportunities.
              </p>
            </div>

            {/* Search & Filter Bar */}
            <SearchBar onSearch={load} onReset={() => load()} />

            {/* Error Alert */}
            {error && (
              <div className="toast toast-error" style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
                <span>⚠️ {error}</span>
                <button className="btn-secondary" style={{ padding: "4px 10px", fontSize: "12px" }} onClick={() => load()}>
                  Retry
                </button>
              </div>
            )}

            {/* Job Listings Header */}
            <div className="job-section-header">
              <h3 className="section-title">Live Job Opportunities</h3>
              <span className="job-count">
                Showing {jobs ? jobs.length : 0} {jobs?.length === 1 ? "role" : "roles"}
              </span>
            </div>

            {/* Job List Component */}
            <JobList
              jobs={jobs}
              onDelete={handleDelete}
              onPostClick={() => setIsModalOpen(true)}
            />
          </section>
        )}

        {/* Post Job Modal (accessible from anywhere) */}
        <JobForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreate}
        />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          JobBoard Direct &copy; {new Date().getFullYear()} — Powered by Java 17, Spring Boot, PostgreSQL & React (Vite).
        </p>
      </footer>
    </div>
  );
}
