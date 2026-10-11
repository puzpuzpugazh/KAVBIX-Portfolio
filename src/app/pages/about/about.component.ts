import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

interface LeadershipRole {
  title: string;
  focus: string;
  experience: string;
  credentials: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, CtaBannerComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  corePrinciples = [
    {
      title: 'Domain-Driven Design (DDD)',
      desc: 'We model business logic around genuine domain contexts and entities, separating presentation, application, and persistence concerns to avoid monolithic entanglement.'
    },
    {
      title: 'Predictable Continuous Delivery',
      desc: 'No massive "big-bang" deployments. Every two weeks, our clients inspect demonstrable, production-ready increments validated by automated CI/CD pipelines.'
    },
    {
      title: 'Zero Technical Debt Tolerance',
      desc: 'We enforce strict TypeScript configurations, clean architecture boundaries, comprehensive unit and integration tests, and static code analysis on every merge.'
    },
    {
      title: 'Bank-Grade Security by Design',
      desc: 'From parameterized SQL queries and OAuth2/OIDC token governance to least-privilege cloud IAM rules, security is verified at every stage of the development lifecycle.'
    }
  ];

  leadershipRoles: LeadershipRole[] = [
    {
      title: 'Principal Software Architect',
      focus: 'Distributed Systems & Enterprise Architecture',
      experience: '12+ Years Enterprise Experience',
      credentials: ['Ex-Fintech Infrastructure Architect', 'Specialist in Java 21, Spring Boot & Kafka', 'C4 Architectural Modeling Lead']
    },
    {
      title: 'Lead Frontend Architect',
      focus: 'Modern Angular & React Micro-Frontends',
      experience: '10+ Years Enterprise Experience',
      credentials: ['Angular Standalone & Signals Pioneer', 'WCAG 2.1 AA Accessibility Auditor', 'Enterprise Design Systems Engineer']
    },
    {
      title: 'Head of Cloud & DevOps Engineering',
      focus: 'AWS / Azure Container Orchestration & SRE',
      experience: '11+ Years Enterprise Experience',
      credentials: ['AWS Certified Solutions Architect Pro', 'Kubernetes CKA Certified', 'Terraform & Zero-Downtime CI/CD Lead']
    },
    {
      title: 'Principal Database Architect',
      focus: 'High-Throughput PostgreSQL & MySQL Systems',
      experience: '9+ Years Enterprise Experience',
      credentials: ['High-Concurrency Query Optimization', 'Partitioning & Replication Specialist', 'Zero-Downtime Data Migration Lead']
    }
  ];
}
