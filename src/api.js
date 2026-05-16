// In production (Vercel): reads VITE_API_BASE_URL environment variable
// In local dev: uses /api which is proxied by vite.config.js to ngrok

const BASE = import.meta.env.VITE_API_BASE_URL || '';

export function apiUrl(path) {
  if (BASE) {
    return `${BASE}${path}`;
  }
  return path;
}

export const ngrokHeaders = {
  "ngrok-skip-browser-warning": "true",
  "Content-Type": "application/json"
};