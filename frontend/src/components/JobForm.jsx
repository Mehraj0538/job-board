import { useState } from "react";

const empty = {
  title: "",
  company: "",
  location: "",
  description: "",
  jobType: "FULL_TIME",
  minSalary: "",
  maxSalary: "",
  applyUrl: "",
};

export default function JobForm({ onCreate }) {
  const [form, setForm] = useState(empty);
  const [msg, setMsg] = useState("");

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        minSalary: form.minSalary ? Number(form.minSalary) : null,
        maxSalary: form.maxSalary ? Number(form.maxSalary) : null,
      };
      await onCreate(payload);
      setForm(empty);
      setMsg("Job posted successfully!");
    } catch {
      setMsg("Error posting job. Check required fields.");
    }
  }

  return (
    <div className="post-box">
      <h2>Post a Job</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Title"
          required
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
        />
        <input
          placeholder="Company"
          required
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
        <input
          placeholder="Location"
          required
          value={form.location}
          onChange={(e) => update("location", e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />
        <select
          value={form.jobType}
          onChange={(e) => update("jobType", e.target.value)}
        >
          <option value="FULL_TIME">Full Time</option>
          <option value="INTERNSHIP">Internship</option>
          <option value="CONTRACT">Contract</option>
        </select>
        <input
          type="number"
          placeholder="Min salary"
          value={form.minSalary}
          onChange={(e) => update("minSalary", e.target.value)}
        />
        <input
          type="number"
          placeholder="Max salary"
          value={form.maxSalary}
          onChange={(e) => update("maxSalary", e.target.value)}
        />
        <input
          placeholder="Apply URL"
          value={form.applyUrl}
          onChange={(e) => update("applyUrl", e.target.value)}
        />
        <button type="submit">Post Job</button>
      </form>
      {msg && <p className="post-msg">{msg}</p>}
    </div>
  );
}
