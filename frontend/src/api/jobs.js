import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function getJobs(params) {
  const res = await axios.get(`${API_BASE}/api/jobs`, { params });
  return res.data;
}

export async function getJob(id) {
  const res = await axios.get(`${API_BASE}/api/jobs/${id}`);
  return res.data;
}

export async function createJob(job) {
  const res = await axios.post(`${API_BASE}/api/jobs`, job);
  return res.data;
}

export async function updateJob(id, job) {
  const res = await axios.put(`${API_BASE}/api/jobs/${id}`, job);
  return res.data;
}

export async function deleteJob(id) {
  await axios.delete(`${API_BASE}/api/jobs/${id}`);
}