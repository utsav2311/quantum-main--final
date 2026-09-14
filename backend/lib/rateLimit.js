const rateStore = new Map();
const RATE_LIMIT = Number(process.env.RATE_LIMIT) || 60;
const RATE_WINDOW = 60 * 1000; // 60 seconds in ms

export function checkRateLimit(ip) {
  const now = Date.now();
  const limit = (ip === "127.0.0.1" || ip === "::1" || ip === "localhost" || ip === "unknown") ? 300 : RATE_LIMIT;
  const hits = (rateStore.get(ip) || []).filter((t) => now - t < RATE_WINDOW);
  if (hits.length >= limit) {
    return false;
  }
  hits.push(now);
  rateStore.set(ip, hits);
  return true;
}
