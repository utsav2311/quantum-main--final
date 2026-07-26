import { describe, it, expect } from "vitest";

const BASE_URL = (process.env.REACT_APP_BACKEND_URL || "http://localhost:8000").replace(/\/$/, "");
const API = `${BASE_URL}/api`;

describe("Public Lead Creation", () => {
  const leadTypes = [
    { type: "partner", extra: { organization: "TEST_Partner Co" } },
    { type: "general", extra: {} },
    { type: "franchise", extra: { city: "TEST_City", investment_capacity: "50L-1Cr" } },
    { type: "consultation", extra: {} },
  ];

  for (const { type, extra } of leadTypes) {
    it(`should create lead for type '${type}'`, async () => {
      const payload = {
        name: `TEST_${type}`,
        email: `test_${type}_${Date.now()}@example.com`,
        phone: "+911234567890",
        lead_type: type,
        message: "test message",
        ...extra,
      };
      const res = await fetch(`${API}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      expect(res.status).toBe(201);
      const data = await res.json();
      expect(data.id).toBeDefined();
      expect(data.status).toBe("new");
      expect(data.lead_type).toBe(type);
      expect(data.email).toBe(payload.email);
    });
  }

  it("should return 422 for missing required fields", async () => {
    const res = await fetch(`${API}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "x" }),
    });
    expect(res.status).toBe(422);
  });

  it("should return 422 for invalid email address", async () => {
    const res = await fetch(`${API}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "TEST_bademail", email: "notanemail", phone: "12345" }),
    });
    expect(res.status).toBe(422);
  });

  it("should enforce rate limiting after rapid requests", async () => {
    const codes = [];
    for (let i = 0; i < 8; i++) {
      const res = await fetch(`${API}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "TEST_rl",
          email: `rl_${i}_${Date.now()}@example.com`,
          phone: "12345",
          lead_type: "general",
        }),
      });
      codes.push(res.status);
    }
    expect(codes).toContain(429);
  });
});
