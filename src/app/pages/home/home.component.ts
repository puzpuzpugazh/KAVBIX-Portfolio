import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import {
  ServiceItem,
  TechnologyItem,
  ProjectCaseStudy,
  Testimonial,
  WorkflowStep,
  IndustryItem
} from '../../core/models/portfolio.models';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconComponent,
    CtaBannerComponent,
    FaqAccordionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: ServiceItem[] = [];
  featuredTechnologies: TechnologyItem[] = [];
  featuredProjects: ProjectCaseStudy[] = [];
  testimonials: Testimonial[] = [];
  workflowSteps: WorkflowStep[] = [];
  industries: IndustryItem[] = [];

  activeTechTab: string = 'All';
  techCategories: string[] = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps'];

  activeTestimonialIndex = 0;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.services = this.portfolioService.getServices();
    this.featuredTechnologies = this.portfolioService.getTechnologies();
    this.featuredProjects = this.portfolioService.getProjects().slice(0, 3);
    this.testimonials = this.portfolioService.getTestimonials();
    this.workflowSteps = this.portfolioService.getWorkflowSteps();
    this.industries = this.portfolioService.getIndustries();
  }

  get filteredTechnologies(): TechnologyItem[] {
    if (this.activeTechTab === 'All') {
      return this.featuredTechnologies;
    }
    return this.featuredTechnologies.filter(t => t.category.toLowerCase() === this.activeTechTab.toLowerCase());
  }

  setTechTab(category: string): void {
    this.activeTechTab = category;
  }

  selectTestimonial(index: number): void {
    this.activeTestimonialIndex = index;
  }
}
