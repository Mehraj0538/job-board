import { useState } from "react";

const initialFormState = {
  title: "",
  company: "",
  location: "",
  description: "",
  jobType: "FULL_TIME",
  minSalary: "",
  maxSalary: "",
  applyUrl: "",
};

export default function JobForm({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }

  if (!isOpen) return null;

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const payload = {
        ...form,
        minSalary: form.minSalary ? Number(form.minSalary) : null,
        maxSalary: form.maxSalary ? Number(form.maxSalary) : null,
      };
      await onCreate(payload);
      setForm(initialFormState);
      setStatus({ type: "success", text: "🎉 Job posted successfully! It is now live." });
      setTimeout(() => {
        setStatus(null);
        onClose();
      }, 1500);
    } catch {
      setStatus({ type: "error", text: "Failed to post job. Please ensure all required fields are filled." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Post a New Role</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
              Reach thousands of developers and tech candidates instantly.
            </p>
          </div>
          <button className="btn-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label className="form-label">Job Title *</label>
            <input
              className="form-input"
              placeholder="e.g. Senior Java Engineer"
              required
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company Name *</label>
            <input
              className="form-input"
              placeholder="e.g. TechNova Solutions"
              required
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Location *</label>
            <input
              className="form-input"
              placeholder="e.g. Hyderabad, India or Remote"
              required
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Job Type</label>
            <select
              className="form-select"
              value={form.jobType}
              onChange={(e) => update("jobType", e.target.value)}
            >
              <option value="FULL_TIME">Full Time</option>
              <option value="INTERNSHIP">Internship</option>
              <option value="CONTRACT">Contract</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Min Salary (INR / Annual)</label>
            <input
              type="number"
              className="form-input"
              placeholder="e.g. 500000"
              value={form.minSalary}
              onChange={(e) => update("minSalary", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Max Salary (INR / Annual)</label>
            <input
              type="number"
              className="form-input"
              placeholder="e.g. 800000"
              value={form.maxSalary}
              onChange={(e) => update("maxSalary", e.target.value)}
            />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">Application URL</label>
            <input
              className="form-input"
              placeholder="https://company.com/careers/apply-id"
              value={form.applyUrl}
              onChange={(e) => update("applyUrl", e.target.value)}
            />
          </div>

          <div className="form-group form-group-full">
            <label className="form-label">Role Description</label>
            <textarea
              className="form-textarea"
              placeholder="Brief summary of responsibilities, requirements, and tech stack..."
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
            />
          </div>

          {status && (
            <div className={`form-group-full toast ${status.type === "success" ? "toast-success" : "toast-error"}`}>
              {status.text}
            </div>
          )}

          <div className="form-group-full" style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "12px" }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Publishing..." : "Publish Job Role"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
