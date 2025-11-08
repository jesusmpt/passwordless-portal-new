import axios from "axios";

const client = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

export async function getStatus() {
  const r = await client.get("/status");
  return r.data;
}

export async function requestTap({ durationHours = 1, usableOnce = true, reason = "" }) {
  const r = await client.post("/createTap", { durationHours, usableOnce, reason });
  return r.data;
}
