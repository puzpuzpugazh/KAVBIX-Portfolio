# Kavbix Technologies — Developer Architecture & Deployment Guide

> **Document Purpose**: This document serves as the primary technical specification, architectural reference, and deployment handbook for developers contributing to, extending, and maintaining the **Kavbix Technologies** enterprise portfolio application.

---

## Table of Contents
1. [🏗️ Architecture & Technology Highlights](#️-architecture--technology-highlights)
   - [Core Technology Stack](#core-technology-stack)
   - [Angular Standalone & Modern Component Architecture](#angular-standalone--modern-component-architecture)
   - [Design System & SCSS Styling Tokens](#design-system--scss-styling-tokens)
   - [Zero-Dependency SVG Icon System](#zero-dependency-svg-icon-system)
   - [Directory Structure & Enterprise Boundaries](#directory-structure--enterprise-boundaries)
   - [Data Models & Service Architecture](#data-models--service-architecture)
2. [📑 Pages & Core Sections Delivered](#-pages--core-sections-delivered)
   - [1. Home Page (`/`)](#1-home-page-)
   - [2. Services Page (`/services`)](#2-services-page-services)
   - [3. Technologies Page (`/technologies`)](#3-technologies-page-technologies)
   - [4. Projects Page (`/projects`)](#4-projects-page-projects)
   - [5. About Us Page (`/about`)](#5-about-us-page-about)
   - [6. Contact Page (`/contact`)](#6-contact-page-contact)
   - [Shared Components Catalog](#shared-components-catalog)
3. [🚢 Deployment Ready: Vercel & Netlify](#-deployment-ready-vercel--netlify)
   - [1. Vercel Configuration (`vercel.json`)](#1-vercel-configuration-verceljson)
   - [2. Netlify Configuration (`netlify.toml` & `public/_redirects`)](#2-netlify-configuration-netlifytoml--public_redirects)
   - [Cloud VPS & Docker Alternative](#cloud-vps--docker-alternative)
4. [💻 Local Execution & Verification](#-local-execution--verification)
   - [Prerequisites](#prerequisites)
   - [Commands & Scripts](#commands--scripts)
   - [Production Build Verification](#production-build-verification)
   - [Troubleshooting & Windows Native Bindings](#troubleshooting--windows-native-bindings)
5. [🔮 Future Enhancements & Extension Guide](#-future-enhancements--extension-guide)

---

## 🏗️ Architecture & Technology Highlights

### Core Technology Stack
- **Framework**: Angular 22 (Latest Stable Enterprise Release)
- **Component Model**: Angular Standalone Components (`standalone: true`, zero `NgModule` overhead)
- **Language**: TypeScript 5.8+ / 6.0 in strict mode (`"strict": true` in `tsconfig.json`)
- **Routing**: Angular Router with lazy loading via dynamic `import()` and `loadComponent`
- **Reactivity & State**: Signals and RxJS with unpolluted state patterns
- **Styling**: Native SCSS with CSS Custom Properties (Design Tokens), responsive grid systems, and glassmorphism
- **Asset Pipeline**: Angular Application Builder (`@angular/build:application`) with esbuild and WASI bindings

---

### Angular Standalone & Modern Component Architecture
The application adheres strictly to the modern Angular paradigm:
- Every page and shared UI widget is an independent **Standalone Component**.
- Routes load page components asynchronously on-demand using `loadComponent: () => import('./pages/...').then(m => m.ComponentName)`.
- Scroll restoration and in-memory anchoring are configured at application startup in `app.config.ts`:
  ```typescript
  provideRouter(
    routes,
    withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })
  )
  ```
- **SEO Title Integration**: Each route specifies an informative, keyword-rich `title` tag for high search engine discoverability.

---

### Design System & SCSS Styling Tokens
All global styles, variables, typography, and card primitives are centralized in `src/styles.scss`:

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--color-primary` | `#2563EB` | Core Brand Blue (Trust, Engineering Precision) |
| `--color-primary-dark` | `#1D4ED8` | Primary Hover & Accentuation |
| `--color-primary-light` | `#EFF6FF` | Soft background tints for badges & icons |
| `--color-secondary` | `#0F172A` | Slate 900 (Corporate depth, dark sections) |
| `--color-accent` | `#38BDF8` | Sky Blue (High contrast highlights, code tags) |
| `--color-bg-base` | `#F8FAFC` | Main application canvas background |
| `--color-bg-card` | `#FFFFFF` | Elevated card surfaces |
| `--color-border` | `#E2E8F0` | Subtle clean boundary borders |
| `--color-success` | `#10B981` | Positive metric indicators & uptime SLA pills |
| `--font-heading` | `'Outfit', sans-serif` | Premium, modern heading typography |
| `--font-body` | `'Plus Jakarta Sans', sans-serif` | Clean, readable corporate body typography |

---

### Zero-Dependency SVG Icon System
To prevent peer-dependency conflicts with newer Angular versions, the application includes a dedicated `IconComponent` (`src/app/shared/components/icon/icon.component.ts`):
- Usage: `<app-icon name="angular" [size]="24" color="#2563eb"></app-icon>`
- Supported Icons:
  - **Frameworks & Tech**: `angular`, `react`, `java`, `spring`, `postgresql`, `mysql`, `docker`, `aws`, `azure`.
  - **UI & System Icons**: `code`, `server`, `layers`, `terminal`, `database`, `cloud`, `shield`, `check`, `check-circle`, `arrow-right`, `chevron-right`, `chevron-down`, `star`, `users`, `phone`, `mail`, `map-pin`, `external-link`, `menu`, `x`, `sparkles`, `zap`, `cpu`, `heart-pulse`, `shopping-bag`, `truck`, `book-open`, `clock`, `calendar`, `award`.
- 100% vector SVG rendering, responsive, and tree-shakeable.

---

### Directory Structure & Enterprise Boundaries
```text
src/
├── app/
│   ├── core/                          # Singleton business layer (data contracts & services)
│   │   ├── models/
│   │   │   └── portfolio.models.ts    # Strongly typed TypeScript interfaces
│   │   └── services/
│   │       └── portfolio.service.ts   # Central data provider for services, tech, case studies
│   ├── pages/                         # Lazy-loaded page components
│   │   ├── about/                     # About Us (Vision, Mission, Philosophy, Leadership)
│   │   ├── contact/                   # Contact Us (RFP Form, Ticket Simulation, Direct Channels)
│   │   ├── home/                      # Landing Page (Hero, Metrics, Services, Tech, Process)
│   │   ├── projects/                  # Production Case Studies (6 Detailed Blueprints)
│   │   ├── services/                  # Detailed breakdown of 6 Service Pillars
│   │   └── technologies/              # Detailed breakdown of 9 Core Technologies & Synergy Matrix
│   ├── shared/                        # Reusable presentation widgets
│   │   └── components/
│   │       ├── cta-banner/            # High-conversion bottom lead capture banner
│   │       ├── faq-accordion/         # Category-filtered accordion with smooth toggle
│   │       ├── footer/                # Corporate footer with compliance & legal links
│   │       ├── icon/                  # Vector SVG Icon component
│   │       └── navbar/                # Sticky header with glassmorphism & mobile drawer
│   ├── app.component.ts               # Root component hosting Navbar, RouterOutlet, Footer
│   ├── app.config.ts                  # Application configuration & router scroll behavior
│   └── app.routes.ts                  # Declarative route configuration
├── public/                            # Static public assets
│   ├── favicon.ico
│   └── _redirects                     # Netlify SPA redirect rule
├── index.html                         # Head metadata, Open Graph tags & Google Fonts
├── main.ts                            # Angular browser bootstrap
└── styles.scss                        # Design tokens, reset, typography & utility classes
```

---

### Data Models & Service Architecture
All dynamic data is typed via `portfolio.models.ts` and managed through `portfolio.service.ts`:
- `ServiceItem`: Category, badge, tech stack, architectures, deliverables, business ROI, KPIs.
- `TechnologyItem`: Category, version/LTS, core capabilities, enterprise scenarios, architecture role, telemetry specs.
- `ProjectCaseStudy`: Problem statement, solution implemented, architecture used, technologies used, key features, verified metrics, client testimonial.
- `WorkflowStep`: Phase name, duration, description, deliverables, engineering standards.
- `Testimonial`: Verified quotes from CTOs and engineering leaders with quantified ROI.
- `FaqItem`: Grouped by category (`Engagement`, `Technical`, `Architecture`, `Security`).

To add new case studies, technologies, or services, update `portfolio.service.ts`—all dependent pages will automatically reflect the updates.

---

## 📑 Pages & Core Sections Delivered

### 1. Home Page (`/`)
- **Hero Section**:
  - Live pulse status pill: *"Enterprise Software Consulting & Engineering Pods — Accepting Q2/Q3 Projects"*.
  - Gradient title & value proposition subtitle.
  - Primary CTAs: *"Schedule Technical Consultation"* & *"Explore Production Case Studies"*.
  - Live proof metrics bar: **99.99%** Uptime SLA, **25k+** Peak TPS, **100%** Code Ownership, **14+ Days** Rapid MVP Delivery.
  - Floating tech stack chip ribbon with vector technology badges.
- **Capability Pillars**: Architectural Discipline (DDD & Clean Architecture), Bank-Grade Security (OWASP Top 10), and High-Velocity Delivery.
- **Core Services Preview**: 6 service cards with KPIs and deep-dive links.
- **Why Tech Leaders Choose Kavbix**: 4 comparison cards against typical agencies (Senior Architects, Zero Technical Debt, 100% IP Transfer, Guaranteed SLAs).
- **Interactive Technology Stack Explorer**: Filterable tabs (*All, Frontend, Backend, Database, Cloud & DevOps*) with live specifications.
- **4-Stage Delivery Framework**: 1. Discovery & System Design → 2. Agile Sprints → 3. Quality Assurance & Penetration Testing → 4. Cloud Orchestration & Hypercare.
- **Client Industries**: Fintech & Banking, Healthcare & MedTech, Retail & E-Commerce, Logistics & Supply Chain, Enterprise B2B SaaS, EdTech.
- **Executive Social Proof**: Verified testimonials from CTOs, CMIOs, and VPs with audited ROI metrics.
- **FAQ Section**: Accordion addressing intellectual property, framework longevity, and team pod integration.
- **High-Converting CTA Banner**: Lead capture trigger with NDA guarantees.

---

### 2. Services Page (`/services`)
Comprehensive architectural deep-dive into the **6 core service pillars**:
1. **Frontend Engineering & Modern SPAs**:
   - Stack: Angular 18/19/22, React 18/19, TypeScript, SCSS, RxJS, NgRx.
   - Patterns: Micro-Frontends (Module Federation), Atomic Design, Server-Side Hydration.
   - Deliverables & KPIs: Sub-0.8s First Contentful Paint, 98/100 Lighthouse average.
2. **Backend Engineering & Distributed Systems**:
   - Stack: Java 17/21 LTS, Spring Boot 3, Spring Security, Hibernate/JPA, Liquibase.
   - Patterns: Domain-Driven Design (DDD), Hexagonal Architecture, CQRS, Virtual Threads.
   - Deliverables & KPIs: 25,000+ TPS capacity, 99.99% uptime SLA.
3. **Microservices & Event-Driven Systems**:
   - Stack: Spring Cloud, Apache Kafka, RabbitMQ, Docker, Zipkin/OpenTelemetry.
   - Patterns: Saga Distributed Transactions, Circuit Breakers, API Gateway Aggregator.
   - Deliverables & KPIs: 100% independent deployability, MTTR < 5 min.
4. **API Engineering & Systems Integration**:
   - Stack: RESTful APIs, OpenAPI 3.0 / Swagger, JSON:API, JWT / OAuth2 / OIDC.
   - Patterns: Contract-First Design, Backend for Frontend (BFF), Rate Limiting.
   - Deliverables & KPIs: 100% specification coverage, P99 API latency < 35ms.
5. **Database Architecture & Data Engineering**:
   - Stack: PostgreSQL 15/16, MySQL 8.0, Redis, HikariCP, Flyway.
   - Patterns: Read/Write Replica Splitting, Table Partitioning, 3NF & Star Schemas.
   - Deliverables & KPIs: 10x-50x query speedup, >94% cache hit ratio.
6. **Cloud Architecture & DevOps Automation**:
   - Stack: Docker, AWS (ECS/EKS/RDS), Microsoft Azure, Google Cloud, GitHub Actions.
   - Patterns: GitOps CI/CD Pipelines, Blue/Green & Canary Deployments, Multi-AZ Failover.
   - Deliverables & KPIs: Multiple daily deployments, automated rollback in < 60s.

---

### 3. Technologies Page (`/technologies`)
In-depth engineering profiles for **all 9 core technologies**:
- **Angular**: Signals reactivity, Standalone components, enterprise forms, strict typing.
- **React**: Next.js, Concurrent Mode, modular hooks, consumer SaaS agility.
- **Java**: Java 21 LTS, Virtual Threads (Project Loom), ZGC garbage collection tuning.
- **Spring Boot**: Spring Boot 3, Spring Security OAuth2, Actuator telemetry.
- **PostgreSQL**: ACID compliance, JSONB document indexing, declarative partitioning, PostGIS.
- **MySQL**: InnoDB crash recovery, master-replica read clustering, high throughput.
- **Docker**: Multi-stage minimal builds (<80MB), non-root security compliance.
- **AWS**: ECS/EKS container runtimes, RDS multi-AZ, CloudFront CDN edge delivery, VPC security.
- **Azure**: AKS Kubernetes, Azure App Services, Key Vault secrets, Entra ID (Azure AD).
- **Enterprise Stack Synergy Matrix**: Step-by-step visual diagram illustrating how the Presentation, Application, Persistence, and Cloud Runtime tiers interoperate seamlessly.

---

### 4. Projects Page (`/projects`)
Contains **6 realistic enterprise case studies**:
1. **FinFlow: Real-Time Banking & Transaction Settlement Platform**
   - *Problem*: Monolithic core had 3.8s latency spikes and database race conditions during market hours.
   - *Solution*: Distributed Spring Boot microservices over Apache Kafka with double-entry PostgreSQL ledgers.
   - *Impact*: 15,000 TPS, 99.999% uptime, 82% latency drop (3,800ms down to 22ms), $4.2M annual savings.
2. **PulseCare: Enterprise Hospital & Telehealth Management System**
   - *Problem*: Fragmented patient records across 14 hospitals taking 30 seconds to fetch medical histories.
   - *Solution*: HIPAA & HL7 FHIR compliant Angular portal with encrypted WebRTC video telehealth.
   - *Impact*: 1.2M+ consultations, 65% drop in intake delay, 100% HIPAA/SOC2 clearance.
3. **OmniCart Global: High-Scale Multi-Vendor Commerce Platform**
   - *Problem*: Storefront collapsed during holiday flash sales resulting in $2.1M lost cart revenues.
   - *Solution*: Micro-frontend storefront with Redis distributed locks for inventory and AWS ECS auto-scaling.
   - *Impact*: 100% uptime under 310,000 concurrent shoppers, 250k orders/hour, $18M+ GMV.
4. **TalentPulse 360: Enterprise Human Capital & Workforce Platform**
   - *Problem*: 9 disparate HR systems across global offices resulting in 12-day payroll cycles.
   - *Solution*: Multi-tenant Angular application with regional PostgreSQL table partitioning and Okta SSO.
   - *Impact*: Payroll cycle reduced from 12 days to 1.5 days, 50,000+ employees managed, $950k/yr licensing saved.
5. **SupplyFlow Prime: Automated Logistics & Inventory Platform**
   - *Problem*: 14% stockout rate, 4-second barcode scan latency, and $3.5M in obsolete buffer inventory.
   - *Solution*: Event-driven barcode queues with sub-80ms acknowledgment and predictive demand algorithms.
   - *Impact*: 99.4% inventory accuracy, 62% drop in stockouts, $5.8M trapped capital recovered.
6. **EduSphere Enterprise: Adaptive Learning Management Platform**
   - *Problem*: Legacy Moodle crashed with 5,000+ simultaneous test-takers and video corruption.
   - *Solution*: Offline-resilient exam interface in Angular with auto-scaling Spring Boot grading workers.
   - *Impact*: 350,000+ active learners, 0 crashes under 45,000 concurrent test-takers.

*Every project card includes an interactive **"Inspect Architecture Blueprint"** button opening a detailed modal.*

---

### 5. About Us Page (`/about`)
- **Vision**: To be the technical partner of choice for high-growth enterprises worldwide.
- **Mission**: Providing senior architectural guidance, strictly typed code, and transparent delivery.
- **Core Principles**: Domain-Driven Design (DDD), Predictable Continuous Delivery, Zero Technical Debt Tolerance, and Bank-Grade Security by Design.
- **Technical Leadership Profiles**: Principal Solutions Architect, Lead Frontend Architect, Head of Cloud/DevOps, and Principal Database Architect.
- **Written Guarantees**: 100% IP & Repo Ownership, OWASP Top 10 Security Audit, 99.99% SLA Uptime Standard, and Zero Vendor Lock-in.

---

### 6. Contact Page (`/contact`)
- **Interactive Technical RFP Form**:
  - Full Name, Work Email, Company, Phone.
  - Multi-select toggle buttons for required engineering capabilities (Frontend, Backend, Microservices, API, Database, DevOps).
  - Estimated Budget & Target Timeline selectors.
  - Project scope requirements textarea with validation.
  - **Live Ticket Generator**: Simulates enterprise queuing and produces a tracked reference (e.g. `KBX-84920`) with 4-hour SLA confirmation.
- **Direct Enterprise Channels**:
  - Direct Technical Inquiries: `contact@kavbix.com`
  - Advisory Line: `+91 98765 43210`
  - Location: Tech Park, Outer Ring Road, Bengaluru, India (Global Remote Pods).
- **Procurement FAQs**: Accordion answering mutual NDAs, contracting models, and sprint kickoffs.

---

### Shared Components Catalog
- `NavbarComponent`: Fixed header with blur backdrop, active link states, mobile drawer, and CTA.
- `FooterComponent`: Enterprise footer with services catalog, tech stack links, trust badges, and NDA disclosures.
- `CtaBannerComponent`: High-converting lead generation banner with background mesh gradient.
- `FaqAccordionComponent`: Interactive category-filtered accordion with animated chevron triggers.
- `IconComponent`: 30+ custom SVG vector icons.

---

## 🚢 Deployment Ready: Vercel & Netlify

### 1. Vercel Configuration (`vercel.json`)
The application includes a root [`vercel.json`](file:///d:/KAVBIX-PORTFOLIO/vercel.json) pre-configured with SPA routing rewrites and enterprise security headers:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist/kavbix-portfolio/browser",
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

#### To deploy to Vercel:
**Method A: Vercel Web Dashboard (Automated Git Integration)**
1. Push your repository to GitHub, GitLab, or Bitbucket:
   ```bash
   git remote add origin https://github.com/<your-username>/kavbix-portfolio.git
   git push -u origin master
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import the `kavbix-portfolio` repository.
4. Vercel will automatically read `vercel.json` and set:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/kavbix-portfolio/browser`
5. Click **Deploy**. Vercel will provision an SSL certificate and assign a global CDN URL.

**Method B: Vercel CLI (Direct Terminal Deploy)**
```bash
# 1. Install Vercel CLI globally (if not installed)
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy directly to production
vercel --prod
```

---

### 2. Netlify Configuration (`netlify.toml` & `public/_redirects`)
The application includes [`netlify.toml`](file:///d:/KAVBIX-PORTFOLIO/netlify.toml) and [`public/_redirects`](file:///d:/KAVBIX-PORTFOLIO/public/_redirects) for seamless single-page routing:

**`netlify.toml`**:
```toml
[build]
  command = "npm run build"
  publish = "dist/kavbix-portfolio/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**`public/_redirects`**:
```text
/*    /index.html   200
```
*(When building, the Angular builder automatically copies `public/_redirects` directly into `dist/kavbix-portfolio/browser/`)*.

#### To deploy to Netlify:
**Method A: Netlify Web Dashboard (Automated Git Integration)**
1. Navigate to [app.netlify.com](https://app.netlify.com).
2. Click **Add new site** → **Import an existing project**.
3. Select your GitHub / GitLab repository.
4. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/kavbix-portfolio/browser`
5. Click **Deploy Site**.

**Method B: Netlify CLI (Direct Terminal Deploy)**
```bash
# 1. Install Netlify CLI globally
npm install -g netlify-cli

# 2. Authenticate
netlify login

# 3. Deploy build output to production
netlify deploy --prod --dir=dist/kavbix-portfolio/browser
```

---

### Cloud VPS & Docker Alternative
For deploying to an AWS EC2, Azure VM, GCP Compute Engine, or Ubuntu VPS:

1. Create a `Dockerfile`:
   ```dockerfile
   FROM node:20-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist/kavbix-portfolio/browser /usr/share/nginx/html
   RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```
2. Build and run the container:
   ```bash
   docker build -t kavbix-portfolio:latest .
   docker run -d -p 80:80 kavbix-portfolio:latest
   ```

---

## 💻 Local Execution & Verification

### Prerequisites
- **Node.js**: v18.x, v20.x, or v22.x+ (Tested on Node v24.21.0 & Node v20 LTS)
- **NPM**: v10.x or v11.x
- **Git**: Installed and configured

---

### Commands & Scripts

All commands can be executed directly from the project root (`d:\KAVBIX-PORTFOLIO`):

```bash
# 1. Install all dependencies
npm install

# 2. Start the local development server (with HMR)
npm start
# -> Access at http://localhost:4200

# 3. Compile the production distribution bundle
npm run build

# 4. Preview the production build locally
npx serve dist/kavbix-portfolio/browser
```

---

### Production Build Verification

Running `npm run build` produces the following optimized distribution bundle:

```text
> kavbix-portfolio@0.0.0 build
> ng build

Initial chunk files | Names                  |  Raw size | Estimated transfer size
main-2KKNJ3NX.js    | main                   | 288.74 kB |                76.41 kB
styles-Y5UIBPQC.css | styles                 |   7.79 kB |                 2.02 kB
                    | Initial total          | 296.53 kB |                78.44 kB

Lazy chunk files    | Names                  |  Raw size | Estimated transfer size
chunk-CrH4xhfN.js   | contact-component      |  58.83 kB |                13.74 kB
chunk-BBza6VH5.js   | -                      |  44.99 kB |                13.72 kB
chunk-COI4NuHl.js   | home-component         |  39.16 kB |                 8.39 kB
chunk-DWMEMRYA.js   | projects-component     |  17.26 kB |                 4.13 kB
chunk-BbUasQck.js   | technologies-component |  11.97 kB |                 3.45 kB
chunk-Blsd4aYB.js   | about-component        |  11.81 kB |                 3.59 kB
chunk-BnJnY072.js   | services-component     |  10.46 kB |                 2.71 kB
chunk-D_FifQ2g.js   | -                      |   5.42 kB |                 1.69 kB
chunk-GiW8FkCi.js   | -                      |   3.81 kB |                 1.44 kB

Application bundle generation complete. [~4 seconds]
Output location: D:\KAVBIX-PORTFOLIO\dist\kavbix-portfolio
```

---

### Troubleshooting & Windows Native Bindings
- **Windows Application Control / Antivirus Policy**: On corporate Windows environments where unsigned `.node` binary native bindings are restricted, the project is configured with `@oxc-parser/binding-wasm32-wasi` (WASM fallback). This guarantees that builds succeed without requiring administrative privileges or native C++ compilers.
- **Production Budgets**: Configured in `angular.json` with comfortable headroom (`2MB` initial warning / `5MB` error, `25kB` component style warning / `50kB` error) to accommodate rich enterprise layouts.

---

## 🔮 Future Enhancements & Extension Guide

### How to Add a New Production Case Study
1. Open `src/app/core/models/portfolio.models.ts` and verify the `ProjectCaseStudy` interface.
2. In `src/app/core/services/portfolio.service.ts`, append a new object to the `projects` array:
   ```typescript
   {
     id: 'new-project-slug',
     title: 'Platform Name: Platform Subtitle',
     industry: 'Fintech & Banking',
     clientType: 'Enterprise',
     bannerGradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
     tagline: 'High-impact value proposition...',
     problemStatement: 'The enterprise challenge...',
     solutionImplemented: 'The architectural solution...',
     architectureUsed: 'Microservices, DDD, Kafka...',
     technologiesUsed: ['Angular', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Docker'],
     keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
     businessImpact: [
       { metric: '99.99%', description: 'Uptime SLA' }
     ]
   }
   ```
3. Both the Home page featured section and the Projects page deep-dive will automatically render the new case study with full filtering and modal support.

### How to Add a New Technology to the Stack
1. In `src/app/shared/components/icon/icon.component.ts`, add the new technology's SVG vector path inside the `<g *ngSwitchCase="'tech-name'">` switch.
2. In `src/app/core/services/portfolio.service.ts`, append the entry to the `technologies` array.
3. The interactive filters on both `/` and `/technologies` will immediately adapt to display the new technology card and production specifications.

### How to Connect the Contact Form to a Real Backend API
1. In `src/app/pages/contact/contact.component.ts`, inject `HttpClient` from `@angular/common/http`:
   ```typescript
   import { inject } from '@angular/core';
   import { HttpClient } from '@angular/common/http';

   private http = inject(HttpClient);
   ```
2. In `app.config.ts`, add `provideHttpClient()` to the `providers` list:
   ```typescript
   import { provideHttpClient } from '@angular/common/http';
   export const appConfig: ApplicationConfig = {
     providers: [provideHttpClient(), provideRouter(...)]
   };
   ```
3. In `submitInquiry()`, replace the simulation `setTimeout` with `this.http.post('/api/inquiries', payload).subscribe(...)`.
