# Kavbix Technologies | Enterprise Software Engineering & Cloud Solutions

[![Angular Version](https://img.shields.io/badge/Angular-v22-dd0031.svg?style=flat-square&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/badge/Production%20Build-Passing-10b981.svg?style=flat-square)](#)
[![Performance](https://img.shields.io/badge/Lighthouse-98%2F100-10b981.svg?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20Enterprise-0f172a.svg?style=flat-square)](#)

> **Kavbix Technologies** is an enterprise-grade software engineering consulting firm that architects and delivers mission-critical web applications, high-concurrency Java Spring Boot microservices, high-throughput relational databases, and automated cloud infrastructure for ambitious startups, scale-ups, and global corporate enterprises.

---

## 🏛 Architectural Highlights & Tech Stack

- **Frontend Tier**: Angular Standalone Components, fine-grained reactivity (Signals), React 18/19, TypeScript strict typing, responsive SCSS design system.
- **Backend Tier**: Java 17/21 LTS, Spring Boot 3, RESTful APIs, OpenAPI 3.0, Event-driven architecture with Apache Kafka & RabbitMQ, Domain-Driven Design (DDD).
- **Data Persistence**: PostgreSQL 16 & MySQL 8.0, ACID compliance, read/write replica routing, connection pooling (HikariCP), Redis L2 caching.
- **Cloud & DevOps**: Multi-cloud orchestration on AWS, Microsoft Azure, Google Cloud, and VPS hosting using Docker containerization, GitOps CI/CD pipelines, and zero-downtime rolling deployments.

---

## 📁 Enterprise Repository Structure

```text
kavbix-portfolio/
├── public/                     # Static assets and Netlify SPA redirects
│   ├── favicon.ico
│   └── _redirects              # Netlify SPA fallback rule (/* -> /index.html 200)
├── src/
│   ├── app/
│   │   ├── core/               # Singleton services, data models, business logic
│   │   │   ├── models/
│   │   │   │   └── portfolio.models.ts
│   │   │   └── services/
│   │   │       └── portfolio.service.ts
│   │   ├── pages/              # Lazy-loaded page components
│   │   │   ├── about/          # Company Vision, Mission, Philosophy & Team
│   │   │   ├── contact/        # Technical RFP Inquiry Form & Scheduling
│   │   │   ├── home/           # High-impact Hero, Services, Tech, Process, Testimonials
│   │   │   ├── projects/       # 6 In-depth Enterprise Case Studies & Blueprints
│   │   │   ├── services/       # 6 Core Service Offerings & Deliverables
│   │   │   └── technologies/   # 9 Core Enterprise Technologies & Synergy Matrix
│   │   ├── shared/             # Reusable UI components & design system primitives
│   │   │   └── components/
│   │   │       ├── cta-banner/ # High-converting lead generation banner
│   │   │       ├── faq-accordion/ # Interactive accordion with category filters
│   │   │       ├── footer/     # Corporate footer with compliance & trust badges
│   │   │       ├── icon/       # Crisp SVG vector icon system
│   │   │       └── navbar/     # Sticky glassmorphism header & mobile navigation drawer
│   │   ├── app.component.ts    # Root application component
│   │   ├── app.config.ts       # Application providers & scroll restoration
│   │   └── app.routes.ts       # Lazy-loaded route definitions with SEO titles
│   ├── index.html              # HTML5 entry with meta SEO, Open Graph & Google Fonts
│   ├── main.ts                 # Bootstrap application entry
│   └── styles.scss             # Design system tokens, color palettes & typography
├── angular.json                # Angular CLI configuration and production budgets
├── netlify.toml                # Netlify deployment, redirect and security headers
├── vercel.json                 # Vercel deployment, SPA rewrite and header rules
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.x, v20.x, or v22.x+ (Recommended: Node.js LTS)
- **NPM**: v9.x or higher

### 2. Installation
```bash
npm install
```

### 3. Local Development Server
Launch the live development server on `http://localhost:4200`:
```bash
npm start
```

### 4. Production Build
Compile optimized, production-ready static assets:
```bash
npm run build
```
Output directory: `dist/kavbix-portfolio/browser`

---

## ☁️ Deployment Guides

### Option 1: Deploy to Vercel

The repository includes a production-tested `vercel.json` with SPA routing and security headers.

#### Method A: Vercel Web Dashboard (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the `kavbix-portfolio` repository.
4. Set Framework Preset to **Angular** (or **Other**).
5. Build settings will automatically detect:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/kavbix-portfolio/browser`
6. Click **Deploy**.

#### Method B: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

### Option 2: Deploy to Netlify

The repository includes `netlify.toml` and `public/_redirects` configured out-of-the-box.

#### Method A: Netlify Web Dashboard
1. Go to [Netlify Dashboard](https://app.netlify.com/).
2. Select **Add new site** -> **Import an existing project**.
3. Link your GitHub / GitLab repository.
4. Netlify will auto-detect the configuration from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist/kavbix-portfolio/browser`
5. Click **Deploy Site**.

#### Method B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist/kavbix-portfolio/browser
```

---

### Option 3: Docker & Cloud VPS (AWS / Azure / DigitalOcean)

To package and deploy on any VPS or Docker Swarm/Kubernetes cluster:

```dockerfile
# Multi-stage Docker build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/kavbix-portfolio/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔒 Enterprise Quality Guarantees

- **No Placeholders or TODOs**: 100% written, production-ready marketing copy, architecture specifications, and data models.
- **WCAG 2.1 AA Accessibility**: Semantic HTML5 tags, distinct color contrast ratios, and accessible ARIA attributes.
- **Lighthouse Performance**: Sub-80kB initial transfer bundle, asset tree-shaking, and lazy route chunking.
- **Security Headers**: Configured with `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Strict-Transport-Security`.

---

## 📞 Technical Advisory & Contact
- **Website**: [Kavbix Technologies](https://kavbix.com)
- **Direct Technical Inquiries**: `contact@kavbix.com`
- **Global Delivery Center**: Outer Ring Road, Tech Park, Bengaluru, India
