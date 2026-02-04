# Imperium Software — Dark SPA Landing + Admin Dashboard (Full-Stack)

A full-stack, production-minded MVP for **Imperium Software** consisting of:

1) **Public marketing SPA** (single static scrolling page) in a modern **dark neon/glow** style with smooth motion/animations.  
2) **Admin dashboard** (protected) featuring a single **MUI X DataGrid** listing all **Contact Messages** stored in PostgreSQL.  
3) **Backend API** built with **ASP.NET Core Web API (.NET 10)** following **DDD + Clean Architecture**, including JWT auth and secure password hashing.

> No Docker content here (handled by DevOps). This README describes how to build the application (frontend + backend) with clean structure, conventions, and implementation contracts.

---

## Stack (Final)

### Frontend
- React 18 + Vite + TypeScript
- Material UI (MUI v5) + **MUI X DataGrid**
- `react-router-dom` (public + admin routes)
- `i18next` + `react-i18next` (EN/BG)
- `framer-motion` (public page motion/animations)
- `axios` (optional; fetch is acceptable)

### Backend
- ASP.NET Core Web API (.NET 10)
- EF Core + PostgreSQL
- FluentValidation
- Swagger/OpenAPI
- JWT Auth (Bearer) + password hashing
- CORS + rate limiting + honeypot (+ optional captcha)

---

## Product Requirements

### Public Website (SPA, one static page)
The public page is a **single scrollable landing** with sections:

- **Navbar**
  - Brand: **Imperium Software**
  - Links: **Home, Services, About, Contact**
  - **Language Switcher**: EN / BG (replaces login/sign-up)
- **Hero**
  - Dark background with **blurred neon gradient glow** behind headline
  - Headline + subtitle + CTA button (“Get in Touch”)
  - Premium, modern spacing and typography
- **Services**
  - “What We Do” title
  - Dark/glass-like cards in a responsive grid
- **About**
  - Short company pitch (static content)
- **Contact**
  - Working contact form (writes to DB through backend API)
  - Honeypot anti-spam field
- **Footer** (optional minimal)
  - Brand + small copyright
  - (Optional) social icons

### Admin
- `/admin/login`
  - Username + password (stored in DB as hash)
  - Receives JWT
- `/admin/messages`
  - Protected route
  - Shows table of messages with **MUI X DataGrid**
  - Read-only for MVP (list records only)

---

## UI / Design System (Public Landing)

### Visual Style
- Premium dark UI
- Blurred neon gradient “aurora” glow in hero area
- Glass-ish cards (dark surface + subtle border + soft shadow)
- Strong typography and generous whitespace

### Theme Tokens (MUI-driven)
All styling must go through the MUI theme. Avoid hard-coded hex values in components.

Suggested palette:

- `background.default`: `#07070A`
- `background.paper`: `#0E0F14`
- `text.primary`: `#F5F7FF`
- `text.secondary`: `rgba(245, 247, 255, 0.72)`
- `primary.main`: `#6C63FF` (indigo)
- `secondary.main`: `#FF4FD8` (magenta)
- `divider`: `rgba(255,255,255,0.10)`

### Typography
Recommended font: **Inter** (or Plus Jakarta Sans).  
Sizing guidelines:
- Hero title: 48–72px desktop (responsive down to ~32–40px mobile)
- Section titles: 32–40px
- Card titles: 16–18px semibold
- Body: 14–16px, line-height 1.6–1.8

### Hero Glow Layer
Implement via `GlobalStyles` or a section-level `Box` with a pseudo-element:
- multiple radial gradients
- blurred and partially transparent
- must not affect layout (`position: absolute`, `pointer-events: none`)

---

## Motion / Animations (Must-Have)

Use **framer-motion** to create subtle, premium interactions:

### Required Patterns
- **Navbar**: fade/slide in on mount; optional blur/intensity change on scroll
- **Hero**: stagger text entrance (line or word); CTA hover/tap scale
- **Section reveal on scroll**: fade-up for each section
- **Services cards**:
  - stagger in as they enter view
  - hover: slight lift + border/glow brighten

### Implementation Conventions
- Centralize variants in `src/components/motion/variants.ts`
- Use `whileInView` + `viewport={{ once: true, amount: 0.2 }}`
- Duration: 0.4–0.7s, easing: `easeOut`
- Avoid aggressive bounces; keep motion minimal

---

## Internationalization (i18n) Requirements

Languages:
- English (`en`)
- Bulgarian (`bg`)

Rules:
- All strings in UI must be pulled from translations
- Language toggle updates instantly
- Persist language in `localStorage`

Translation files:
- `src/i18n/locales/en/common.json`
- `src/i18n/locales/bg/common.json`

---

## Monorepo Structure

```txt
.
├─ frontend/
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.ts
│  └─ src/
│     ├─ main.tsx
│     ├─ app/
│     │  ├─ App.tsx
│     │  └─ providers/
│     │     ├─ AppThemeProvider.tsx
│     │     └─ AppI18nProvider.tsx
│     ├─ theme/
│     │  ├─ index.ts
│     │  ├─ palette.ts
│     │  ├─ typography.ts
│     │  ├─ components.ts
│     │  └─ globals.ts
│     ├─ i18n/
│     │  ├─ index.ts
│     │  └─ locales/
│     │     ├─ en/common.json
│     │     └─ bg/common.json
│     ├─ routes/
│     │  ├─ PublicRoutes.tsx
│     │  └─ AdminRoutes.tsx
│     ├─ features/
│     │  ├─ landing/
│     │  │  ├─ LandingPage.tsx
│     │  │  ├─ data/landing.data.ts
│     │  │  ├─ types/landing.types.ts
│     │  │  └─ sections/
│     │  │     ├─ Navbar.tsx
│     │  │     ├─ Hero.tsx
│     │  │     ├─ Services.tsx
│     │  │     ├─ About.tsx
│     │  │     ├─ Contact.tsx
│     │  │     └─ Footer.tsx
│     │  └─ admin/
│     │     ├─ pages/
│     │     │  ├─ LoginPage.tsx
│     │     │  └─ MessagesPage.tsx
│     │     ├─ components/
│     │     │  └─ MessagesTable.tsx
│     │     └─ auth/
│     │        ├─ auth.guard.tsx
│     │        ├─ auth.store.ts
│     │        └─ token.storage.ts
│     ├─ components/
│     │  ├─ ui/
│     │  │  ├─ Section.tsx
│     │  │  ├─ ContainerMax.tsx
│     │  │  ├─ GlassCard.tsx
│     │  │  └─ LanguageToggle.tsx
│     │  └─ motion/
│     │     ├─ variants.ts
│     │     └─ MotionBox.tsx
│     └─ lib/
│        └─ api/
│           ├─ http.ts
│           ├─ auth.api.ts
│           └─ messages.api.ts
│
└─ backend/
   ├─ ImperiumSoftware.sln
   └─ src/
      ├─ ImperiumSoftware.Domain/
      ├─ ImperiumSoftware.Application/
      ├─ ImperiumSoftware.Infrastructure/
      └─ ImperiumSoftware.WebApi/
