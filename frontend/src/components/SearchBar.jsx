import { useState } from "react";

export default function SearchBar({ onSearch, onReset }) {
  const [kw, setKw] = useState("");
  const [loc, setLoc] = useState("");
  const [type, setType] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch({ keyword: kw, location: loc, jobType: type });
  }

  function handleFilterPill(selectedType) {
    setType(selectedType);
    onSearch({ keyword: kw, location: loc, jobType: selectedType });
  }

  function reset() {
    setKw("");
    setLoc("");
    setType("");
    onReset();
  }

  return (
    <div className="search-card">
      <form className="search-form" onSubmit={submit}>
        <div className="input-wrapper">
          <svg className="input-icon" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search by job title or keyword..."
            value={kw}
            onChange={(e) => setKw(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <svg className="input-icon" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Location (e.g. Remote, India)"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <svg className="input-icon" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <select className="search-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All Job Types</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="INTERNSHIP">Internship</option>
            <option value="CONTRACT">Contract</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>

        <button type="button" className="btn-secondary" onClick={reset}>
          Clear
        </button>
      </form>

      <div className="filter-pills">
        <span className="filter-label">Popular Filters:</span>
        <button
          className={`pill-btn ${type === "" ? "active" : ""}`}
          onClick={() => handleFilterPill("")}
        >
          All Roles
        </button>
        <button
          className={`pill-btn ${type === "FULL_TIME" ? "active" : ""}`}
          onClick={() => handleFilterPill("FULL_TIME")}
        >
          💼 Full Time
        </button>
        <button
          className={`pill-btn ${type === "INTERNSHIP" ? "active" : ""}`}
          onClick={() => handleFilterPill("INTERNSHIP")}
        >
          🎓 Internship
        </button>
        <button
          className={`pill-btn ${type === "CONTRACT" ? "active" : ""}`}
          onClick={() => handleFilterPill("CONTRACT")}
        >
          ⚡ Contract
        </button>
      </div>
    </div>
  );
}
