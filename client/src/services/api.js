import axios from "axios";

// ============================================================
// API Configuration
// ------------------------------------------------------------
// - In development: uses the Vite proxy (/api)
// - In production: uses the environment variable VITE_API_URL
// ============================================================

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
