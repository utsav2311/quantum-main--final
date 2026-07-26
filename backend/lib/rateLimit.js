const rateStore = new Map();
const RATE_LIMIT = 6;
const RATE_WINDOW = 60 * 1000; // 60 seconds in ms

export function checkRateLimit(ip) {
  const now = Date.now();
  const hits = (rateStore.get(ip) || []).filter((t) => now - t < RATE_WINDOW);
  if (hits.length >= RATE_LIMIT) {
    return false;
  }
  hits.push(now);
  rateStore.set(ip, hits);
  return true;
}
