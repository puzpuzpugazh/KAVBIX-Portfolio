import { Injectable } from '@angular/core';
import {
  ServiceItem,
  TechnologyItem,
  ProjectCaseStudy,
  Testimonial,
  WorkflowStep,
  IndustryItem,
  FaqItem
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly services: ServiceItem[] = [
    {
      id: 'frontend-development',
      title: 'Frontend Engineering & Modern SPAs',
      category: 'frontend',
      badge: 'Core Competency',
      shortDescription: 'Enterprise-scale, responsive, and blazing-fast web interfaces built with modern Angular & React architectures.',
      fullDescription: 'We build reactive, accessible, and high-performance frontend applications designed for complex business workflows, multi-tenant dashboards, and high-throughput customer portals. Utilizing state-of-the-art Angular Standalone architecture, React Next.js paradigms, robust state management, and optimized asset delivery, our frontends deliver sub-second interactions and unmatched user satisfaction.',
      icon: 'code',
      technologies: ['Angular 18/19/22', 'React 18/19', 'TypeScript', 'SCSS / Modern CSS', 'RxJS', 'NgRx / Zustand'],
      architectures: ['Micro-Frontends (Module Federation)', 'Atomic Design System', 'Component-Driven Architecture', 'Server-Side Rendering & Hydration'],
      deliverables: [
        'Production-grade Angular / React Single-Page Applications',
        'Custom Design Systems with reusable design tokens',
        'Multi-tenant enterprise admin & analytics dashboards',
        'Automated E2E testing pipelines with Cypress/Playwright'
      ],
      businessBenefits: [
        '45% faster page load and interaction responsiveness',
        '100% WCAG 2.1 AA accessibility compliance for enterprise procurement',
        'Unified cross-browser and cross-device consistency',
        'Reduced long-term maintenance costs via modular component libraries'
      ],
      kpis: [
        { label: 'Avg Lighthouse Score', value: '98/100' },
        { label: 'First Contentful Paint', value: '< 0.8s' }
      ]
    },
    {
      id: 'backend-development',
      title: 'Backend Engineering & Distributed Systems',
      category: 'backend',
      badge: 'High Performance',
      shortDescription: 'Robust, mission-critical backend systems engineered with Java, Spring Boot, and enterprise design patterns.',
      fullDescription: 'Modern enterprises demand backend engines capable of processing millions of concurrent transactions with 99.999% reliability. We architect modular, secure, and horizontally scalable backends utilizing Java 17/21 LTS, Spring Boot 3.x, resilient thread-pools, and asynchronous event streams to power mission-critical operations.',
      icon: 'server',
      technologies: ['Java 17/21 LTS', 'Spring Boot 3', 'Spring Security', 'Hibernate / JPA', 'Liquibase', 'Gradle / Maven'],
      architectures: ['Domain-Driven Design (DDD)', 'Hexagonal / Clean Architecture', 'Event-Driven Systems', 'CQRS Pattern'],
      deliverables: [
        'Enterprise Spring Boot core applications',
        'Zero-trust authentication & authorization (OAuth2 / OIDC)',
        'High-throughput asynchronous processing workers',
        'Comprehensive automated unit & integration test suites'
      ],
      businessBenefits: [
        'Zero downtime deployments with graceful container lifecycles',
        'Bank-grade data encryption at rest and in transit',
        'Sub-10ms internal service response latency',
        'Audit-ready compliance logging and traceability'
      ],
      kpis: [
        { label: 'Uptime SLA Target', value: '99.99%' },
        { label: 'Tx Throughput', value: '25,000+ TPS' }
      ]
    },
    {
      id: 'microservices-architecture',
      title: 'Microservices & Event-Driven Systems',
      category: 'microservices',
      badge: 'Scalability',
      shortDescription: 'Decoupled, independently deployable microservices orchestrated for resilient enterprise scaling.',
      fullDescription: 'Break free from monolithic bottlenecks. We design and implement fault-tolerant microservice ecosystems with automated service discovery, dynamic API gateways, distributed tracing, and asynchronous message broker topologies (Kafka / RabbitMQ) that eliminate single points of failure.',
      icon: 'layers',
      technologies: ['Spring Cloud', 'Apache Kafka', 'RabbitMQ', 'Docker', 'Kubernetes', 'Zipkin / OpenTelemetry'],
      architectures: ['Event-Driven Architecture', 'Saga Distributed Transaction Pattern', 'API Gateway Aggregator', 'Circuit Breaker Pattern'],
      deliverables: [
        'Decoupled microservice catalog with defined bounded contexts',
        'Distributed event broker cluster configuration',
        'Centralized configuration and secret management',
        'Distributed tracing and Prometheus/Grafana observability'
      ],
      businessBenefits: [
        'Autonomous team deployments without cross-service blockers',
        'Graceful degradation: failure in one service never crashes the platform',
        'Elastic autoscaling based on real-time traffic spikes',
        '30% reduction in cloud compute over-provisioning'
      ],
      kpis: [
        { label: 'Independent Deployability', value: '100%' },
        { label: 'Mean Time to Recovery', value: '< 5 min' }
      ]
    },
    {
      id: 'api-development',
      title: 'API Engineering & Systems Integration',
      category: 'api',
      badge: 'Integration',
      shortDescription: 'Standardized, hyper-secure RESTful APIs and webhook pipelines powering third-party ecosystems.',
      fullDescription: 'APIs are the connective tissue of modern digital business. We engineer contract-first RESTful APIs and high-efficiency integration pipelines complying with OpenAPI 3.0 standards, rate-limiting policies, token revocation, and enterprise developer portals.',
      icon: 'terminal',
      technologies: ['RESTful Web Services', 'OpenAPI / Swagger 3.0', 'JSON:API', 'JWT / OAuth2', 'Spring Cloud Gateway'],
      architectures: ['Contract-First API Design', 'BFF (Backend for Frontend)', 'Webhook Event Notifications', 'Rate Limiting & Token Bucket'],
      deliverables: [
        'Interactive Swagger / Redoc developer documentation',
        'API Gateway routing with rate-limiting & IP whitelisting',
        'SDK client generation in TypeScript and Java',
        'Enterprise ERP, CRM, and Payment gateway integrations'
      ],
      businessBenefits: [
        'Seamless onboarding for enterprise partner integrations',
        'Strict payload schema validation guarding against injection attacks',
        'Granular API monetization and quota tracking capabilities',
        'Real-time webhook notifications for downstream third-party triggers'
      ],
      kpis: [
        { label: 'Documentation Coverage', value: '100% Spec' },
        { label: 'P99 API Latency', value: '< 35ms' }
      ]
    },
    {
      id: 'database-solutions',
      title: 'Database Architecture & Data Engineering',
      category: 'database',
      badge: 'Data Integrity',
      shortDescription: 'High-concurrency PostgreSQL & MySQL database architectures optimized for data integrity and speed.',
      fullDescription: 'From high-frequency financial ledgers to multi-terabyte transactional stores, we structure relational databases with optimal indexing strategies, partitioning schemes, connection pooling, and automated failover replicas that preserve ACID compliance at peak load.',
      icon: 'database',
      technologies: ['PostgreSQL 15/16', 'MySQL 8.0', 'Redis', 'HikariCP', 'Flyway / Liquibase', 'pg_stat_statements'],
      architectures: ['Read/Write Replica Splitting', 'Table Partitioning & Sharding', 'Multi-Level Caching (Redis L2)', 'Zero-Downtime Migration Pattern'],
      deliverables: [
        'Third Normal Form (3NF) and Star Schema database models',
        'Automated database migration scripts with rollbacks',
        'Query execution plan optimization and index blueprints',
        'Disaster recovery, automated backup & point-in-time recovery setups'
      ],
      businessBenefits: [
        'Elimination of slow query locks and deadlock incidents',
        'Sub-second query response even on 100M+ record tables',
        'Zero data corruption guarantee under high concurrent writes',
        'RPO < 1 minute and RTO < 5 minutes disaster preparedness'
      ],
      kpis: [
        { label: 'Query Speedup', value: '10x-50x' },
        { label: 'Cache Hit Ratio', value: '> 94%' }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Architecture & DevOps Automation',
      category: 'devops',
      badge: 'Cloud Native',
      shortDescription: 'Multi-cloud deployment on AWS, Azure, GCP, and VPS with automated CI/CD and Docker containerization.',
      fullDescription: 'We transform manual software releases into automated, immutable, and reproducible cloud delivery pipelines. Our DevOps architects configure Docker container ecosystems, Infrastructure as Code, Kubernetes clusters, and zero-downtime rolling deployment strategies across leading cloud providers and bare-metal VPS.',
      icon: 'cloud',
      technologies: ['Docker', 'AWS (ECS/EKS/RDS)', 'Microsoft Azure', 'Google Cloud Platform', 'GitHub Actions / GitLab CI', 'Terraform / VPS'],
      architectures: ['GitOps CI/CD Pipelines', 'Blue/Green & Canary Deployments', 'Container Orchestration', 'Multi-Region High Availability'],
      deliverables: [
        'Production Dockerfiles with multi-stage minimal footprint builds',
        'Automated GitHub Actions / GitLab CI/CD build & deploy pipelines',
        'Cloud infrastructure provisioning (Terraform / CloudFormation)',
        'Production monitoring, alert triggers, and health status probes'
      ],
      businessBenefits: [
        'Release to production in under 8 minutes with single-commit triggers',
        'Instant rollback capability in case of unforeseen edge cases',
        'Up to 40% reduction in cloud infrastructure spending via right-sizing',
        'SOC2 & ISO 27001 compliant deployment audits'
      ],
      kpis: [
        { label: 'Deployment Frequency', value: 'Multiple/day' },
        { label: 'Rollback Duration', value: '< 60s' }
      ]
    }
  ];

  private readonly technologies: TechnologyItem[] = [
    {
      id: 'angular',
      name: 'Angular',
      category: 'Frontend',
      icon: 'angular',
      versionLts: 'v18 / v19 / v22',
      tagline: 'Enterprise-grade TypeScript framework for scalable Single Page Applications',
      description: 'Angular is our primary frontend weapon for large-scale enterprise portals. With Standalone Components, Signals reactive state, strictly typed reactive forms, and built-in dependency injection, Angular delivers unmatched maintainability for long-lived enterprise software.',
      coreCapabilities: [
        'Fine-grained reactivity with Angular Signals',
        'Standalone component architecture without NgModules overhead',
        'Enterprise form validation engine & dynamic form generators',
        'Built-in HTTP interceptors, routing guards, and lazy chunk loading'
      ],
      enterpriseUseCases: [
        'Multi-role ERP & CRM management portals',
        'Fintech transactional banking interfaces',
        'Healthcare patient record & diagnostic consoles',
        'Data-heavy SaaS administration dashboards'
      ],
      architectureRole: 'Client-side presentation layer, state management, client security tokens, and responsive UI views.',
      productionMetrics: 'Sub-1.2s First Meaningful Paint, 100% strict TypeScript typing.'
    },
    {
      id: 'react',
      name: 'React',
      category: 'Frontend',
      icon: 'react',
      versionLts: 'v18 / v19 LTS',
      tagline: 'Declarative component library powering dynamic user-facing digital products',
      description: 'React provides unmatched ecosystem velocity and flexibility for consumer-facing SaaS products, high-conversion e-commerce storefronts, and interactive dashboards requiring custom fluid UI animations and component modularity.',
      coreCapabilities: [
        'Concurrent rendering and suspense-driven data fetching',
        'Lightweight component composability and custom React Hooks',
        'Modern state engines (Zustand, TanStack Query, Redux Toolkit)',
        'Server Components and Next.js hybrid rendering'
      ],
      enterpriseUseCases: [
        'High-growth consumer & B2B SaaS web applications',
        'Omnichannel retail & e-commerce shopping portals',
        'Interactive real-time collaboration boards',
        'Public-facing marketing & customer acquisition web apps'
      ],
      architectureRole: 'Modular view rendering, client-side dynamic state synchronization, and reactive consumer experiences.',
      productionMetrics: 'Zero memory leaks, 60fps micro-animations, Lighthouse score 95+.'
    },
    {
      id: 'java',
      name: 'Java',
      category: 'Backend',
      icon: 'java',
      versionLts: 'Java 17 & 21 LTS',
      tagline: 'High-throughput, type-safe enterprise language powering mission-critical logic',
      description: 'Java remains the gold standard for global enterprise computing. We leverage modern Java LTS features including Virtual Threads (Project Loom), Pattern Matching, and Records to engineer ultra-fast, multithreaded backend applications with rock-solid memory governance.',
      coreCapabilities: [
        'Virtual Threads for massive concurrency with minimal memory overhead',
        'Strong type-safety, record types, and pattern matching syntax',
        'Battle-tested Garbage Collection tuning (G1, ZGC) for low latency',
        'Comprehensive security tooling and cryptographic libraries'
      ],
      enterpriseUseCases: [
        'Core banking transaction clearing engines',
        'High-frequency ledger accounting systems',
        'Enterprise identity federation & OAuth token issuers',
        'High-concurrency batch processing and data transformation'
      ],
      architectureRole: 'Core business domain models, algorithmic calculation engines, and secure persistence operations.',
      productionMetrics: 'Zero memory leaks across 180+ days continuous uptime, 25k+ TPS capability.'
    },
    {
      id: 'spring-boot',
      name: 'Spring Boot',
      category: 'Backend',
      icon: 'spring',
      versionLts: 'v3.2 / v3.3',
      tagline: 'De facto enterprise microservices framework for production-grade reliability',
      description: 'Spring Boot is our core backend framework of choice. It eliminates boilerplate while offering enterprise dependency injection, declarative transactions, Spring Security integration, and seamless cloud readiness via Spring Cloud and Spring Actuator.',
      coreCapabilities: [
        'Auto-configuration, dependency injection, and aspect-oriented programming',
        'Spring Security with OAuth2 Resource Server & JWT validation',
        'Spring Data JPA / Hibernate with optimized queries and connection pooling',
        'Spring Boot Actuator for health checks, Prometheus metrics, and live diagnostics'
      ],
      enterpriseUseCases: [
        'Distributed microservices with Eureka / Consul service discovery',
        'RESTful API backend for Angular and React frontends',
        'Secure multi-tenant B2B SaaS backend architecture',
        'Event-driven consumer services integrated with Kafka'
      ],
      architectureRole: 'API routing, security authorization layer, transaction boundaries, and service orchestration.',
      productionMetrics: 'Sub-2s boot times, 99.99% availability, native Grafana metrics integration.'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'Database',
      icon: 'postgresql',
      versionLts: 'v15 / v16',
      tagline: 'The world\'s most advanced open-source relational database for complex enterprise datasets',
      description: 'PostgreSQL offers legendary reliability, rich feature sets including JSONB document storage, advanced indexing (GIN, GiST, BRIN), and strict ACID compliance, making it our primary choice for complex transactional applications.',
      coreCapabilities: [
        'Full ACID compliance with multi-version concurrency control (MVCC)',
        'High-performance JSONB storage combining relational & document patterns',
        'Declarative table partitioning for billion-row scalability',
        'Streaming replication and hot standby high-availability setups'
      ],
      enterpriseUseCases: [
        'Financial ledgers requiring zero transaction ambiguity',
        'Multi-tenant SaaS data partitioning with Row-Level Security (RLS)',
        'Complex analytical queries and window functions',
        'Geospatial and location-based business intelligence (PostGIS)'
      ],
      architectureRole: 'Primary system of record, transactional persistence, and analytical view aggregation.',
      productionMetrics: 'P99 query time < 8ms, 100% data consistency guaranteed under crash recovery.'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'Database',
      icon: 'mysql',
      versionLts: 'v8.0 / v8.4 LTS',
      tagline: 'Proven, high-read-throughput relational database for web-scale workloads',
      description: 'MySQL 8 powers some of the highest-traffic web platforms on Earth. We configure InnoDB buffer pools, query caching layers, and master-replica read pools to handle colossal read traffic while maintaining strict transactional integrity.',
      coreCapabilities: [
        'InnoDB crash recovery, transactional row-level locking, and foreign keys',
        'Optimized connection pooling via HikariCP and ProxySQL',
        'Read-replica auto-routing for massive horizontal read scaling',
        'Invisible indexes and histogram statistics for query plan accuracy'
      ],
      enterpriseUseCases: [
        'High-volume e-commerce product catalogs and order history',
        'Content management platforms with heavy read-to-write ratios',
        'High-throughput social feeds and notifications',
        'Inventory stock tracking systems'
      ],
      architectureRole: 'High-throughput transactional storage and read-replicated query serving.',
      productionMetrics: 'Supports 50,000+ reads/sec with master-replica clustering.'
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'Cloud & DevOps',
      icon: 'docker',
      versionLts: 'v26 / v27 Engine',
      tagline: 'Standardized containerization guaranteeing dev-to-production parity',
      description: 'Docker ensures your application behaves identically whether running on a developer laptop, staging cluster, or high-availability cloud server. We author hardened, multi-stage Dockerfiles that eliminate bloat, minimize attack surfaces, and run as non-root users.',
      coreCapabilities: [
        'Multi-stage builds reducing image sizes from 1GB+ down to under 80MB',
        'Minimalist distroless and Alpine base images with zero unnecessary binaries',
        'Docker Compose for local full-stack development orchestration',
        'Non-root container execution compliant with CIS security benchmarks'
      ],
      enterpriseUseCases: [
        'Packaging Spring Boot microservices and Angular SPAs for deployment',
        'Reproducible developer environments spinning up in under 60 seconds',
        'Isolated test runs in CI pipelines preventing environment drift',
        'Blue/Green deployment units across cloud orchestrators'
      ],
      architectureRole: 'Immutable application packaging, runtime isolation, and deployment consistency.',
      productionMetrics: 'Container start time < 3.5s, 0 vulnerabilities in base runtime.'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services (AWS)',
      category: 'Cloud & DevOps',
      icon: 'aws',
      versionLts: 'Global Cloud Infrastructure',
      tagline: 'Enterprise cloud infrastructure for unlimited global scalability and fault tolerance',
      description: 'We design and manage cost-effective, high-availability AWS architectures leveraging ECS/EKS container runtimes, RDS managed databases, CloudFront CDN edge delivery, S3 secure object storage, and strict IAM least-privilege configurations.',
      coreCapabilities: [
        'Elastic Container Service (ECS) and EKS Kubernetes orchestration',
        'Amazon RDS multi-AZ deployments with automatic failover',
        'CloudFront CDN edge caching reducing global TTFB to under 30ms',
        'VPC private subnet isolation, NAT gateways, and Security Groups'
      ],
      enterpriseUseCases: [
        'Global SaaS platforms requiring multi-region data residency',
        'High-traffic e-commerce infrastructure auto-scaling for flash sales',
        'Automated disaster recovery topologies across distinct AWS availability zones',
        'Secure API Gateway endpoints with AWS WAF firewall protection'
      ],
      architectureRole: 'Cloud compute backbone, managed database tier, edge acceleration, and DNS routing.',
      productionMetrics: '99.99% infrastructure uptime, automated horizontal auto-scaling in < 90 seconds.'
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      category: 'Cloud & DevOps',
      icon: 'azure',
      versionLts: 'Enterprise Cloud Platform',
      tagline: 'Seamless enterprise cloud hosting with native Active Directory & compliance backing',
      description: 'For corporate clients and enterprises deeply integrated with Microsoft ecosystems, we build robust Azure environments leveraging Azure App Services, AKS, Azure SQL, Key Vault secrets management, and Entra ID (Azure AD) federated authentication.',
      coreCapabilities: [
        'Azure Kubernetes Service (AKS) for enterprise microservice fleets',
        'Azure App Services for turnkey zero-downtime deployment slots',
        'Azure Key Vault for bank-grade secret and cryptographic key rotation',
        'Azure Monitor & Application Insights for end-to-end telemetry'
      ],
      enterpriseUseCases: [
        'Corporate intranet platforms integrated with Microsoft 365 / Entra ID',
        'Healthcare and financial platforms requiring HIPAA and FedRAMP compliance',
        'Hybrid cloud deployments linking on-premise servers with Azure cloud',
        'Enterprise DevOps pipelines running on Azure DevOps and GitHub Enterprise'
      ],
      architectureRole: 'Enterprise cloud hosting, corporate identity federation, and hybrid network interconnects.',
      productionMetrics: 'Enterprise SLA backed by Microsoft guarantees, automated security patching.'
    }
  ];

  private readonly projects: ProjectCaseStudy[] = [
    {
      id: 'finflow-banking-platform',
      title: 'FinFlow: Real-Time Banking & Transaction Settlement Platform',
      industry: 'Fintech & Banking',
      category: 'Fintech / Enterprise Banking',
      clientType: 'Fintech Scale-up',
      bannerGradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #2563EB 100%)',
      tagline: 'Next-generation core banking transaction settlement engine processing 15,000+ financial transfers per second with zero ledger discrepancies.',
      problemStatement: 'The client—a rapidly scaling digital fintech banking provider—was burdened by a legacy monolithic core that suffered severe latency spikes (> 3.8s) during peak market trading hours. Concurrency race conditions in their relational database caused occasional ledger sync delays, and auditors flagged their monolithic deployment pipeline as a single point of operational risk.',
      solutionImplemented: 'Kavbix designed and engineered an event-driven distributed banking architecture. We decomposed the payment flow into high-performance Spring Boot microservices communicating over an idempotent Kafka event bus, backed by double-entry PostgreSQL ledgers with optimistic locking. The web interface was completely re-architected in Angular 18 with real-time WebSocket state synchronizations.',
      architectureUsed: 'Event-Driven Microservices Architecture, CQRS (Command Query Responsibility Segregation), Double-Entry Accounting Ledger, Kafka Message Streams, Distributed Tracing with OpenTelemetry, and Multi-AZ PostgreSQL Aurora.',
      technologiesUsed: ['Angular 18', 'Java 21 LTS', 'Spring Boot 3', 'Apache Kafka', 'PostgreSQL', 'Docker', 'AWS ECS', 'Redis'],
      keyFeatures: [
        'Real-time double-entry transaction settlement with sub-25ms response time',
        'Two-factor biometric authentication with OAuth2/OIDC token rotation',
        'Dynamic multi-currency exchange rate calculation engine with automated hedge routing',
        'Granular compliance audit logging with immutable hash chaining',
        'Interactive treasury dashboard with real-time liquidity visualization in Angular'
      ],
      businessImpact: [
        { metric: '99.999%', description: 'Core banking transaction uptime maintained over 12 consecutive months' },
        { metric: '15,000 TPS', description: 'Peak transaction processing capacity achieved without latency degradation' },
        { metric: '82% Drop', description: 'Reduction in settlement latency (from 3,800ms down to 22ms)' },
        { metric: '$4.2M', description: 'Estimated annual operational cost savings through automated reconciliation' }
      ],
      testimonialQuote: {
        quote: 'Kavbix delivered an enterprise banking engine that passed our institutional regulatory audits with flying colors. Their architectural discipline in Spring Boot and Angular is world-class.',
        author: 'Marcus Vance',
        role: 'Chief Technology Officer, FinFlow Financial Group'
      }
    },
    {
      id: 'pulsecare-healthcare-platform',
      title: 'PulseCare: Enterprise Hospital & Telehealth Management System',
      industry: 'Healthcare & MedTech',
      category: 'HealthTech Platform',
      clientType: 'HealthTech',
      bannerGradient: 'linear-gradient(135deg, #064E3B 0%, #065F46 40%, #059669 100%)',
      tagline: 'HIPAA-compliant hospital operating system unifying electronic medical records, real-time doctor scheduling, and WebRTC telehealth consultations.',
      problemStatement: 'A hospital network managing 14 regional facilities struggled with disconnected paper-based scheduling and fragmented patient medical records. Clinicians experienced significant burnout due to sluggish legacy desktop software that took up to 30 seconds to fetch medical histories, directly delaying critical urgent-care decisions.',
      solutionImplemented: 'We engineered a centralized, HIPAA and HL7 FHIR-compliant digital hospital platform. Built using Angular with reactive state management for immediate patient search, backed by a Spring Boot backend secured by role-based attribute encryption, and hosted on isolated private cloud VPCs with continuous cryptographic audit trails.',
      architectureUsed: 'Clean Hexagonal Architecture, FHIR Standards Gateway, End-to-End Encrypted WebRTC Video Streaming, Automated Read-Replica MySQL Cluster, Docker Swarm Containers.',
      technologiesUsed: ['Angular', 'Java 17', 'Spring Boot 3', 'MySQL 8', 'Docker', 'Microsoft Azure', 'WebRTC', 'Spring Security'],
      keyFeatures: [
        'Sub-second Electronic Health Record (EHR) retrieval with optimistic caching',
        'Integrated encrypted WebRTC telehealth video calls with live doctor-patient notes',
        'Automated prescription generation with drug-interaction warning algorithms',
        'Smart doctor shift scheduling with conflict-detection algorithms',
        'Patient self-service portal for appointment booking and lab result downloads'
      ],
      businessImpact: [
        { metric: '1.2M+', description: 'Patient medical consultations successfully processed across 14 hospitals' },
        { metric: '65% Less', description: 'Patient check-in and intake waiting time reduced from 28m down to 9m' },
        { metric: '100%', description: 'HIPAA and SOC2 compliance audit clearance with zero vulnerabilities' },
        { metric: '3.4x ROI', description: 'Operational efficiency return achieved within first 9 months of rollout' }
      ],
      testimonialQuote: {
        quote: 'Kavbix transformed our hospital operations. Our doctors now spend their time treating patients instead of fighting slow software. The platform is rock-solid.',
        author: 'Dr. Aris Thorne',
        role: 'Chief Medical Information Officer, PulseCare Health Systems'
      }
    },
    {
      id: 'omnicart-global-ecommerce',
      title: 'OmniCart Global: High-Scale Multi-Vendor Commerce Platform',
      industry: 'Retail & E-Commerce',
      category: 'Enterprise E-Commerce',
      clientType: 'E-Commerce Global',
      bannerGradient: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #EA580C 100%)',
      tagline: 'High-availability omnichannel e-commerce ecosystem capable of processing 250,000 orders/hour during global flash sale events.',
      problemStatement: 'A major international retail brand experienced catastrophic web crashes during annual holiday sales. Their legacy monolithic commerce store collapsed under 80,000 concurrent visitors, resulting in lost cart revenues of over $2.1M in a single 4-hour window.',
      solutionImplemented: 'Kavbix designed and implemented an elastic cloud-native microservices architecture. The user storefront was constructed in high-performance React with server-side caching, while the checkout engine, inventory lock manager, and payment dispatchers were implemented in Java Spring Boot on AWS ECS with auto-scaling triggers.',
      architectureUsed: 'Micro-Frontends Storefront + Microservices Backend, Redis Distributed Locks for Inventory Reservation, Striped Read/Write MySQL Database Architecture, AWS CloudFront Edge Caching.',
      technologiesUsed: ['React', 'Angular Admin', 'Java 21', 'Spring Boot', 'MySQL 8', 'Redis Cluster', 'AWS ECS', 'Docker'],
      keyFeatures: [
        'Distributed flash-sale inventory reservation with zero double-selling bugs',
        'Dynamic multi-currency and multi-language localized checkout',
        'Real-time vendor shipping management and automated tax calculations',
        'Intelligent product search engine with fuzzy matching and instant filtering',
        'Comprehensive admin command center with real-time revenue analytics'
      ],
      businessImpact: [
        { metric: '100% Uptime', description: 'Maintained during Black Friday peak event with 310,000 concurrent shoppers' },
        { metric: '250k/hr', description: 'Order processing capacity without database transaction deadlock' },
        { metric: '+34%', description: 'Increase in overall checkout conversion rate due to sub-second load times' },
        { metric: '$18M+', description: 'Gross merchandise volume seamlessly processed in single launch weekend' }
      ],
      testimonialQuote: {
        quote: 'We survived Black Friday without a single hitch. Kavbix engineered an infrastructure that handled three times our forecasted peak load without breaking a sweat.',
        author: 'Elena Rostova',
        role: 'VP of Digital Commerce, OmniCart Global'
      }
    },
    {
      id: 'talentpulse-employee-management',
      title: 'TalentPulse 360: Enterprise Human Capital & Workforce Platform',
      industry: 'Corporate & HR Tech',
      category: 'Enterprise SaaS',
      clientType: 'Corporate',
      bannerGradient: 'linear-gradient(135deg, #312E81 0%, #4338CA 50%, #6366F1 100%)',
      tagline: 'Unified enterprise HR and workforce management suite supporting 50,000+ employees across 22 global subsidiaries.',
      problemStatement: 'A multinational corporate enterprise with 50,000+ employees operated with 9 disparate HR systems across different geographic offices. Payroll calculations took 12 days per cycle, employee appraisal reviews were lost in spreadsheets, and HR leadership had zero unified visibility into workforce turnover.',
      solutionImplemented: 'We engineered TalentPulse 360: a centralized, multi-tenant enterprise human capital platform. Developed with Angular Standalone Components, dynamic RBAC permission matrices, automated payroll calculation engines in Spring Boot, and PostgreSQL with table partitioning by business region.',
      architectureUsed: 'Multi-Tenant Clean Architecture, Regional Table Partitioning in PostgreSQL, Asynchronous Report Generation Queue, SAML 2.0 / Okta Enterprise Single Sign-On.',
      technologiesUsed: ['Angular 18', 'Java 17', 'Spring Boot 3', 'PostgreSQL 16', 'Docker', 'AWS (RDS & ECS)', 'Spring Security'],
      keyFeatures: [
        'Global payroll engine computing multi-country taxes and statutory deductions in minutes',
        'Interactive 360-degree performance evaluation cycles with peer review workflows',
        'Automated leave, expense reimbursement, and document approval pipelines',
        'Single Sign-On (SSO) integration with corporate Okta and Microsoft Entra ID',
        'Customizable organizational hierarchy chart with drag-and-drop team restructuring'
      ],
      businessImpact: [
        { metric: '88% Faster', description: 'Monthly payroll processing timeline slashed from 12 days to just 1.5 days' },
        { metric: '50,000+', description: 'Active corporate employees managed across 22 countries with 0 data leaks' },
        { metric: '$950k/yr', description: 'Direct licensing savings by consolidating 9 fragmented legacy tools into 1' },
        { metric: '94% Score', description: 'Employee satisfaction index with new intuitive self-service portal' }
      ],
      testimonialQuote: {
        quote: 'TalentPulse 360 unified our global offices. What used to take two weeks of payroll headaches now takes an afternoon. Kavbix engineers are true architects.',
        author: 'Siddharth Nair',
        role: 'Chief Human Resources Officer, Meridian Global Holdings'
      }
    },
    {
      id: 'supplyflow-inventory-management',
      title: 'SupplyFlow Prime: Automated Logistics & Inventory Platform',
      industry: 'Logistics & Supply Chain',
      category: 'Industrial IoT & Logistics',
      clientType: 'Enterprise',
      bannerGradient: 'linear-gradient(135deg, #1C1917 0%, #44403C 50%, #78716C 100%)',
      tagline: 'Automated warehouse inventory tracking and predictive supply replenishment platform managing 2M+ SKUs across 38 distribution hubs.',
      problemStatement: 'A major logistics distribution operator faced acute inventory inaccuracies leading to 14% stockout rates during peak distribution cycles. Barcode scanning had latency of up to 4 seconds per scan, and manual purchase order tracking led to $3.5M in overstocked obsolete goods.',
      solutionImplemented: 'Kavbix architected SupplyFlow Prime: a high-throughput inventory operating system. We integrated low-latency barcode scanning queues, predictive stock depletion algorithms in Java, real-time warehouse floor 2D visualization in Angular, and automated vendor purchase order workflows.',
      architectureUsed: 'Event-Driven Architecture with RabbitMQ, In-Memory Caching with Redis, High-Volume Batch Ingestion, PostgreSQL Timescale Engine, Docker Containerized Edge Nodes.',
      technologiesUsed: ['Angular', 'Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'RabbitMQ', 'Azure Cloud'],
      keyFeatures: [
        'Instant warehouse barcode/RFID scan ingestion with sub-80ms acknowledgment',
        'Predictive replenishment algorithms forecasting demand based on historical velocity',
        'Multi-warehouse inventory transfer tracking with real-time transit status',
        'Interactive warehouse floor bin-mapping with visual heatmaps in Angular',
        'Automated Purchase Order generation triggered at custom minimum stock thresholds'
      ],
      businessImpact: [
        { metric: '99.4%', description: 'Inventory count accuracy achieved across 38 enterprise distribution centers' },
        { metric: '62% Drop', description: 'Reduction in product stockouts through proactive algorithmic replenishment' },
        { metric: '2M+ SKUs', description: 'Real-time SKU catalog maintained with continuous live balance tracking' },
        { metric: '$5.8M', description: 'Freed up trapped working capital by eliminating unnecessary buffer stock' }
      ],
      testimonialQuote: {
        quote: 'Our warehouse managers love SupplyFlow. The responsiveness of the Angular interface combined with the rock-solid Spring backend made this our most successful IT rollout ever.',
        author: 'Rachel Steinberg',
        role: 'Director of Global Supply Operations, NexaLogistics'
      }
    },
    {
      id: 'edusphere-learning-management',
      title: 'EduSphere Enterprise: Adaptive Learning Management Platform',
      industry: 'EdTech & Professional Learning',
      category: 'EdTech Enterprise',
      clientType: 'Global SaaS',
      bannerGradient: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 50%, #8B5CF6 100%)',
      tagline: 'Scalable corporate learning and accredited assessment platform serving 350,000+ active students and enterprise corporate trainees.',
      problemStatement: 'An international education and corporate certification provider suffered from an aging Moodle installation that crashed whenever 5,000+ simultaneous students attempted timed certification exams. Proctoring videos frequently corrupted and certificate issuance required days of manual verification.',
      solutionImplemented: 'We created EduSphere Enterprise from the ground up. We designed an Angular web application optimized for offline exam caching and anti-cheat browser monitoring, backed by a resilient Spring Boot backend with auto-scaling assessment workers, automated grading pipelines, and digital certificate verification.',
      architectureUsed: 'Stateless Microservices, CDN-Accelerated Video Streaming, Redis Bull Queue for Grading Workers, PostgreSQL for Normalized Student Progress, Cloudflare Edge Rules.',
      technologiesUsed: ['Angular 18', 'Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'AWS (S3 & CloudFront)', 'Redis'],
      keyFeatures: [
        'Offline-resilient timed examination interface with auto-recovery on network drops',
        'Adaptive assessment engine matching question difficulty to candidate proficiency',
        'Enterprise SCORM and xAPI compliance for corporate training content integration',
        'Automated cryptographic digital diploma and badge generation upon course completion',
        'Interactive instructor video grading portal with time-stamped video comments'
      ],
      businessImpact: [
        { metric: '350k+', description: 'Active learners enrolled across 120+ corporate and university partners' },
        { metric: '0 Crashes', description: 'Zero system downtime recorded across 45,000 concurrent examination sessions' },
        { metric: '99.2%', description: 'Assessment submission success rate even on low-bandwidth rural connections' },
        { metric: '4.8 / 5', description: 'Average learner platform rating across corporate trainee satisfaction surveys' }
      ],
      testimonialQuote: {
        quote: 'EduSphere gave us the scale we needed to sign Fortune 500 corporate clients. The system handles 45,000 concurrent test-takers without breaking a sweat.',
        author: 'David Chen',
        role: 'Co-Founder & VP Product, EduSphere Global'
      }
    }
  ];

  private readonly testimonials: Testimonial[] = [
    {
      id: 'test-1',
      clientName: 'Marcus Vance',
      clientRole: 'Chief Technology Officer',
      companyName: 'FinFlow Financial Group',
      avatarInitials: 'MV',
      quote: 'Kavbix Technologies operates at an engineering tier rarely seen in consulting firms. They didn\'t just write code; they challenged our architectural assumptions, eliminated concurrency bottlenecks, and delivered an enterprise banking engine that processed 15,000 TPS on day one. Worth every rupee of the engagement.',
      rating: 5,
      projectDomain: 'Fintech Core Banking',
      verifiedRoi: '82% latency reduction & 99.999% uptime'
    },
    {
      id: 'test-2',
      clientName: 'Elena Rostova',
      clientRole: 'VP of Digital Commerce',
      companyName: 'OmniCart Global Retail',
      avatarInitials: 'ER',
      quote: 'Previous agencies told us our Black Friday crashing issues were insurmountable without massive cloud bills. Kavbix rebuilt our checkout microservices in Spring Boot and streamlined our React frontend. Result: zero downtime, 310,000 concurrent shoppers, and our highest revenue weekend in company history.',
      rating: 5,
      projectDomain: 'High-Scale E-Commerce',
      verifiedRoi: '+34% checkout conversion & $18M GMV'
    },
    {
      id: 'test-3',
      clientName: 'Dr. Aris Thorne',
      clientRole: 'Chief Medical Information Officer',
      companyName: 'PulseCare Health Systems',
      avatarInitials: 'AT',
      quote: 'In healthcare, software failure puts lives in jeopardy. Kavbix demonstrated rigorous adherence to HIPAA security, sub-second medical record rendering in Angular, and pristine code documentation. They are not merely contractors—they are our trusted technical architects.',
      rating: 5,
      projectDomain: 'HealthTech Enterprise',
      verifiedRoi: '65% drop in intake delay across 14 hospitals'
    },
    {
      id: 'test-4',
      clientName: 'Rachel Steinberg',
      clientRole: 'Director of Global Supply Operations',
      companyName: 'NexaLogistics Worldwide',
      avatarInitials: 'RS',
      quote: 'Our inventory accuracy increased from 86% to 99.4% in just four months after launching SupplyFlow. Kavbix\'s mastery of Java Spring microservices, Docker containerization, and Angular dashboards saved our business over $5.8M in obsolete stock write-offs.',
      rating: 5,
      projectDomain: 'Supply Chain & Logistics',
      verifiedRoi: '$5.8M working capital recovered'
    }
  ];

  private readonly workflow: WorkflowStep[] = [
    {
      step: '01',
      phase: 'Discovery & System Design',
      title: 'Architectural Blueprint & Domain Modeling',
      duration: 'Week 1 - 2',
      description: 'We conduct rigorous domain-driven design workshops, define bounded contexts, model relational schemas, specify OpenAPI contracts, and map non-functional requirements (SLAs, RTO/RPO, peak concurrency).',
      deliverables: [
        'System Architecture Specification (C4 Model)',
        'Database Entity-Relationship & Migration Plan',
        'API Contract Specifications (OpenAPI 3.0)',
        'Cloud Infrastructure & Cost Projections'
      ],
      standards: ['Domain-Driven Design (DDD)', 'OWASP Threat Modeling', 'IEEE Software Standards']
    },
    {
      step: '02',
      phase: 'Sprint Engineering & CI/CD',
      title: 'High-Velocity Agile Engineering',
      duration: 'Bi-Weekly Sprints',
      description: 'We write clean, strictly-typed code with automated unit and integration tests on every pull request. Continuous integration pipelines run static analysis (SonarQube) and automated container builds.',
      deliverables: [
        'Weekly working software demonstrations',
        'Automated CI/CD build pipelines with branch protection',
        'Comprehensive unit test coverage (> 85%)',
        'Staging environment deploys for client signoff'
      ],
      standards: ['Clean Architecture & SOLID Principles', 'GitFlow & Trunk-Based Development', 'Zero Compiler Warnings']
    },
    {
      step: '03',
      phase: 'Quality Assurance & Security',
      title: 'Penetration Testing & Stress Engineering',
      duration: 'Sprint Polish Phase',
      description: 'Software is subjected to rigorous end-to-end testing, automated load and stress testing under 5x expected peak concurrency, and third-party penetration testing to guarantee airtight security.',
      deliverables: [
        'Automated E2E test suites (Playwright/Cypress)',
        'Load testing reports (JMeter/K6 with P99 metrics)',
        'OWASP Top 10 vulnerability assessment report',
        'Accessibility compliance audit (WCAG 2.1 AA)'
      ],
      standards: ['ISO 27001 Security Controls', 'SOC2 Readiness Check', 'WCAG 2.1 AA Standards']
    },
    {
      step: '04',
      phase: 'Cloud Orchestration & Hypercare',
      title: 'Production Deployment & SLA Assurance',
      duration: 'Go-Live & 24/7 SLA',
      description: 'Zero-downtime Blue/Green deployment to production cloud (AWS/Azure/GCP/VPS). We establish Prometheus/Grafana monitoring, live health check probes, automated alerting, and 30 days of active hypercare.',
      deliverables: [
        'Zero-downtime production cutover orchestration',
        'Real-time observability dashboard (Grafana/CloudWatch)',
        'Complete source code repository transfer with documentation',
        'Dedicated SLA incident response guarantee'
      ],
      standards: ['99.99% Uptime SLA', 'Full Intellectual Property Ownership Assignment', 'Zero Vendor Lock-in']
    }
  ];

  private readonly industries: IndustryItem[] = [
    {
      id: 'fintech',
      name: 'Fintech & Banking',
      icon: 'shield',
      subtitle: 'Zero-tolerance reliability & double-entry precision',
      description: 'Core banking systems, payment orchestration gateways, automated reconciliation ledgers, and institutional regulatory compliance platforms.',
      keySolutions: ['Real-time settlement engines', 'Fraud anomaly detection pipelines', 'Multi-currency ledger accounting', 'PCI-DSS & SOC2 compliant setups']
    },
    {
      id: 'healthcare',
      name: 'Healthcare & MedTech',
      icon: 'heart-pulse',
      subtitle: 'HIPAA-compliant patient platforms & EHR systems',
      description: 'Hospital operations suites, electronic health records, doctor-patient telehealth portals, and automated diagnostic lab management.',
      keySolutions: ['HL7 / FHIR compliant health records', 'Encrypted WebRTC telehealth portals', 'Automated pharmacy inventory', 'Medical device telemetry integration']
    },
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      icon: 'shopping-bag',
      subtitle: 'High-throughput flash sales & headless commerce',
      description: 'Multi-vendor marketplaces, real-time inventory reservation engines, dynamic pricing algorithms, and high-conversion storefronts.',
      keySolutions: ['250k+ orders/hour flash sale resilience', 'Omnichannel inventory synchronization', 'Sub-second mobile checkout flows', 'Custom merchant portal dashboards']
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      icon: 'truck',
      subtitle: 'Real-time asset tracking & automated warehousing',
      description: 'Automated warehouse inventory tracking, multi-depot fleet management, predictive demand replenishment, and freight optimization.',
      keySolutions: ['Sub-80ms barcode scanning queues', 'Predictive SKU stockout alerts', 'Multi-warehouse transit tracking', 'Automated PO supplier dispatch']
    },
    {
      id: 'enterprise-saas',
      name: 'Enterprise B2B SaaS',
      icon: 'cpu',
      subtitle: 'Multi-tenant architectures ready for global scale',
      description: 'Internal operational platforms, workforce management, workflow automation engines, and multi-tenant SaaS products for enterprise scale.',
      keySolutions: ['Tenant database isolation & Row-Level Security', 'Enterprise SSO (Okta, Azure AD, SAML)', 'Role-Based Access Control (RBAC)', 'Usage-based billing & Stripe integration']
    },
    {
      id: 'edtech',
      name: 'EdTech & Corporate Learning',
      icon: 'book-open',
      subtitle: 'Adaptive learning & high-concurrency exam engines',
      description: 'Learning management systems, real-time anti-cheat exam portals, automated certification verification, and video learning platforms.',
      keySolutions: ['Offline-resilient examination interfaces', 'SCORM & xAPI compliance', 'Cryptographic verifiable certificate issuance', '45,000+ concurrent test capacity']
    }
  ];

  private readonly faqs: FaqItem[] = [
    {
      category: 'Engagement',
      question: 'Who owns the intellectual property (IP) and source code?',
      answer: 'You retain 100% full legal ownership of all intellectual property, source code, architecture diagrams, database schemas, and assets created during our engagement. Everything is transferred to your private repository upon project milestone completion with clean, unencumbered licensing.'
    },
    {
      category: 'Technical',
      question: 'Why does Kavbix specialize in Angular, Java, and Spring Boot for enterprise solutions?',
      answer: 'For enterprise solutions handling significant transactional volume, long software lifecycles, and strict security requirements, the combination of Angular (strict typing, stable long-term support, built-in dependency injection) and Java Spring Boot (memory management, rock-solid multithreading, enterprise ecosystem) delivers the lowest total cost of ownership and lowest defect rates over 5-10 year horizons compared to transient scripting frameworks.'
    },
    {
      category: 'Architecture',
      question: 'How do you guarantee that our platform will scale as our user base grows?',
      answer: 'We build for horizontal elasticity from day one. By enforcing stateless microservices, separating relational read and write traffic through replica pools, caching aggressively in Redis, and packaging applications in immutable Docker containers, your system can auto-scale compute instances dynamically based on CPU/memory pressure without requiring code rewrites.'
    },
    {
      category: 'Engagement',
      question: 'How do you handle project management, communication, and sprint delivery?',
      answer: 'We assign a dedicated Technical Lead and Project Manager to every engagement. We operate in two-week agile sprints with bi-weekly live staging demos, transparent Slack/Teams shared channels, and real-time Jira/Linear tracking. You never wonder what was built or what is coming next.'
    },
    {
      category: 'Security',
      question: 'How do you ensure data security, GDPR, and enterprise compliance?',
      answer: 'Security is integrated into our definition of done, not an afterthought. We enforce OWASP Top 10 remediation, parameterized queries against SQL injection, bcrypt/Argon2 password hashing, strict OAuth2/OIDC scopes, automated dependency vulnerability scanning via CI pipelines, and encryption at rest using AES-256.'
    },
    {
      category: 'Technical',
      question: 'Can you work with our existing in-house technical team or take over legacy code?',
      answer: 'Absolutely. We frequently collaborate with in-house CTOs, engineering managers, and product leads. We can perform a formal Architectural & Security Audit on existing codebases, design an incremental strangler-fig migration roadmap to eliminate technical debt, or provide dedicated pods to accelerate feature delivery.'
    }
  ];

  getServices(): ServiceItem[] {
    return this.services;
  }

  getServiceById(id: string): ServiceItem | undefined {
    return this.services.find(s => s.id === id);
  }

  getTechnologies(): TechnologyItem[] {
    return this.technologies;
  }

  getTechnologiesByCategory(category: string): TechnologyItem[] {
    return this.technologies.filter(t => t.category.toLowerCase() === category.toLowerCase());
  }

  getProjects(): ProjectCaseStudy[] {
    return this.projects;
  }

  getProjectById(id: string): ProjectCaseStudy | undefined {
    return this.projects.find(p => p.id === id);
  }

  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }

  getWorkflowSteps(): WorkflowStep[] {
    return this.workflow;
  }

  getIndustries(): IndustryItem[] {
    return this.industries;
  }

  getFaqs(): FaqItem[] {
    return this.faqs;
  }
}
