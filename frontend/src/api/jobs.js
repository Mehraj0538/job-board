import axios from "axios";

// Points at the Spring Boot backend. Override with VITE_API_URL at build time
// for deployed environments (e.g. VITE_API_URL=https://your-backend.onrender.com/api/jobs)
const API = import.meta.env.VITE_API_URL || "http://localhost:8080/api/jobs";

export async function getJobs(params) {
  const res = await axios.get(API, { params });
  return res.data;
}

export async function getJob(id) {
  const res = await axios.get(API + "/" + id);
  return res.data;
}

export async function createJob(job) {
  const res = await axios.post(API, job);
  return res.data;
}

export async function updateJob(id, job) {
  const res = await axios.put(API + "/" + id, job);
  return res.data;
}

export async function deleteJob(id) {
  await axios.delete(API + "/" + id);
}
