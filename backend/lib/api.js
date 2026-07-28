export const API = "/api";

async function request(url, options = {}) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  if (config.body && typeof config.body === "object" && !(config.body instanceof FormData)) {
    config.body = JSON.stringify(config.body);
  }

  const fullUrl = url.startsWith("http") ? url : `${API}${url.startsWith("/") ? "" : "/"}${url}`;
  const res = await fetch(fullUrl, config);
  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const error = new Error(res.statusText || "API Error");
    error.status = res.status;
    error.response = { status: res.status, data };
    throw error;
  }

  return { status: res.status, data };
}

export const api = {
  get: (url, config = {}) => request(url, { method: "GET", ...config }),
  post: (url, body, config = {}) => request(url, { method: "POST", body, ...config }),
  patch: (url, body, config = {}) => request(url, { method: "PATCH", body, ...config }),
  delete: (url, config = {}) => request(url, { method: "DELETE", ...config }),
};

export function formatApiError(err) {
  if (!err) return "Unable to process request. Please try again.";
  if (typeof err === "string") return err;
  const detail = err.response?.data?.detail || err.response?.data || err.detail || err.message;
  if (!detail) return "An unexpected error occurred. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail))
    return detail
      .map((e) => (e && typeof e.msg === "string" ? e.msg : typeof e === "string" ? e : JSON.stringify(e)))
      .filter(Boolean)
      .join(" ");
  if (detail && typeof detail.msg === "string") return detail.msg;
  return String(detail);
}
