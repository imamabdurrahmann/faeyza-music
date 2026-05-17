# Faeyza Music Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Landing page + 4 course detail pages + about/testimonial/contact pages untuk Faeyza Music Manna.

**Architecture:** Next.js 15 + React 19 + TypeScript + Tailwind CSS. App Router. Hero split layout 60/40.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, lucide-react

---

## Task 1: Setup Project

**Files to create:**
- `D:/faeyza-music/package.json`
- `D:/faeyza-music/tsconfig.json`
- `D:/faeyza-music/next.config.ts`
- `D:/faeyza-music/tailwind.config.ts`
- `D:/faeyza-music/postcss.config.js`
- `D:/faeyza-music/app/globals.css`

- [ ] **Step 1: Create all config files**

Run: Create these files with npm init structure, then `cd D:/faeyza-music && npm install`

---

## Task 2: Setup Layout + Navbar + Footer + WhatsAppFloat

**Files:**
- `D:/faeyza-music/app/layout.tsx`
- `D:/faeyza-music/components/Navbar.tsx`
- `D:/faeyza-music/components/Footer.tsx`
- `D:/faeyza-music/components/WhatsAppFloat.tsx`

- [ ] Create components and layout

---

## Task 3: Homepage

**Files:**
- `D:/faeyza-music/lib/data.ts` - Course and testimonial data
- `D:/faeyza-music/components/HeroSplit.tsx`
- `D:/faeyza-music/components/CourseCard.tsx`
- `D:/faeyza-music/components/TestimonialCard.tsx`
- `D:/faeyza-music/app/page.tsx`

- [ ] Create homepage with Hero split layout, course highlights, testimonials, CTA section

---

## Task 4: Kursus Listing + Detail Pages

**Files:**
- `D:/faeyza-music/app/kursus/page.tsx` - Grid listing
- `D:/faeyza-music/app/kursus/piano/page.tsx`
- `D:/faeyza-music/app/kursus/gitar/page.tsx`
- `D:/faeyza-music/app/kursus/biola/page.tsx`
- `D:/faeyza-music/app/kursus/vocal/page.tsx`

- [ ] Create listing page and 4 detail pages with same structure

---

## Task 5: Tentang Kami + Testimonial + Kontak

**Files:**
- `D:/faeyza-music/app/tentang/page.tsx`
- `D:/faeyza-music/app/testimonial/page.tsx`
- `D:/faeyza-music/app/kontak/page.tsx`

- [ ] Create these 3 pages

---

## Execution Options

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans skill
