import axios from "axios";

// Create a single axios instance with sensible defaults.
// This makes it easier to control timeouts, headers, and interceptors in one place.
const baseURL = import.meta.env.VITE_API_URL || "";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: basic request/response logging in development
if (import.meta.env.DEV) {
  api.interceptors.request.use((config) => {
    // eslint-disable-next-line no-console
    console.debug("API request:", config.method, config.url);
    return config;
  });

  api.interceptors.response.use(
    (res) => {
      // eslint-disable-next-line no-console
      console.debug("API response:", res.status, res.config.url);
      return res;
    },
    (err) => {
      // eslint-disable-next-line no-console
      console.warn("API error:", err?.message ?? err);
      return Promise.reject(err);
    }
  );
}

export default api;
