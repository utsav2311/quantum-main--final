# PRD — Prosthetics & Orthotics (P&O) B2B Website

## Original Problem
Full-stack, production-ready B2B website for a Prosthetics & Orthotics company selling to hospitals,
clinics and rehab partners, while showcasing patient-facing device categories for kids and adults.
Clinical + engineering aesthetic. Lead capture + auth-protected admin dashboard.

## Stack
React (CRA) + FastAPI + MongoDB. Framer Motion + Lenis for motion. Tailwind + shadcn/ui.

## User Personas
- Hospital/clinic decision-maker (B2B partner lead)
- Prospective franchisee (franchise lead)
- Patient/caregiver browsing devices (general inquiry / consultation)
- Company admin (reviews & manages leads)

## Design
- Colors: sapphire #0B4D95 (primary), coral #FF6B4A (CTA accent), paper #F8F9FA, ink #0B121C.
- Fonts: Outfit (display), IBM Plex Sans (body), JetBrains Mono (labels).
- Kinetic hero (masked line reveal), Lenis smooth scroll, scroll-reveals, parallax on 3D Studio.

## Implemented (2026-07-25)
- Backend (server.py): JWT admin auth (Bearer), seeded admin, lead CRUD, filters, stats, CSV export,
  in-memory rate limiting on POST /api/leads, email notification stub (logged, NOT wired to provider).
- Homepage: hero + rotating callouts, editorial marquee, vision/mission, welcome+stats, adults pill grid,
  kids grid, 3D studio (parallax), how-we-work timeline, testimonials carousel, why-choose-us, FAQ accordion, footer.
- Pages: /about, /products (filterable), 13 device detail pages (slug-driven), /b2b-innovation-hub,
  /contact-us (map embed), /terms.
- Lead capture: Partner modal (navbar/hero/about), Franchise modal (city+investment), Footer general form,
  B2B Hub embedded form, Contact form, Book-a-Consultation CTAs. Floating WhatsApp button.
- Admin: /admin/login (JWT) + /admin dashboard (stat cards, filter by type/status, status update, delete, CSV export).
- Verified: backend 20/20 pytest; frontend flows incl. admin login->dashboard (ProtectedRoute race fixed).

## Placeholders to replace before launch
[COMPANY_NAME], [BRAND], [PHONE], [EMAIL], [ADDRESS_1], [ADDRESS_2], WhatsApp number, social URLs, Academy PDF,
Google Maps links (in /app/frontend/src/data/site.js). Contact map is an OpenStreetMap embed placeholder.

## Backlog / Next
- P1: Wire real transactional email (Resend/SendGrid) in send_lead_emails() (needs API key).
- P1: Replace stock imagery with real product/facility photography.
- P2: Redis-backed rate limiter for multi-worker prod; explicit CORS_ORIGINS in prod.
- P2: Admin content CRUD for devices (stretch goal); pagination/search on leads.
