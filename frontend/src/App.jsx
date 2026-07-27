import { useEffect, useState } from "react";
import { getJobs, createJob, deleteJob } from "./api/jobs";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import "./App.css";

export default function App() {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState("");

  async function load(params) {
    try {
      setError("");
      const data = await getJobs(params);
      setJobs(data);
    } catch {
      setError("Could not reach the API. Is the backend running?");
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

  return (
    <div className="app">
      <header>
        <h1>Job Board</h1>
        <p>Find or post a job</p>
      </header>

      <main>
        <SearchBar onSearch={load} onReset={() => load()} />
        {error && <p className="error">{error}</p>}
        <JobList jobs={jobs} onDelete={handleDelete} />
        <JobForm onCreate={handleCreate} />
      </main>
    </div>
  );
}
