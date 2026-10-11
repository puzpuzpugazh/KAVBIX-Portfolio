export interface ServiceItem {
  id: string;
  title: string;
  category: 'frontend' | 'backend' | 'microservices' | 'api' | 'database' | 'devops';
  badge: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  technologies: string[];
  architectures: string[];
  deliverables: string[];
  businessBenefits: string[];
  kpis: { label: string; value: string }[];
}

export interface TechnologyItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps';
  icon: string;
  versionLts: string;
  tagline: string;
  description: string;
  coreCapabilities: string[];
  enterpriseUseCases: string[];
  architectureRole: string;
  productionMetrics: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  industry: string;
  category: string;
  clientType: 'Enterprise' | 'Fintech Scale-up' | 'HealthTech' | 'Global SaaS' | 'E-Commerce Global' | 'Corporate';
  bannerGradient: string;
  tagline: string;
  problemStatement: string;
  solutionImplemented: string;
  architectureUsed: string;
  technologiesUsed: string[];
  keyFeatures: string[];
  businessImpact: {
    metric: string;
    description: string;
  }[];
  testimonialQuote?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  avatarInitials: string;
  quote: string;
  rating: number;
  projectDomain: string;
  verifiedRoi: string;
}

export interface WorkflowStep {
  step: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  standards: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
  description: string;
  keySolutions: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Engagement' | 'Technical' | 'Architecture' | 'Security';
}

export interface InquiryFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber?: string;
  projectBudget: string;
  timeline: string;
  servicesNeeded: string[];
  projectDescription: string;
}
