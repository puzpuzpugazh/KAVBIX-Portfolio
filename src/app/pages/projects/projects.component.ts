import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCaseStudy } from '../../core/models/portfolio.models';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, CtaBannerComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectCaseStudy[] = [];
  categories: string[] = ['All', 'Fintech & Banking', 'Healthcare & MedTech', 'Retail & E-Commerce', 'Corporate & HR Tech', 'Logistics & Supply Chain', 'EdTech & Professional Learning'];
  selectedCategory: string = 'All';

  activeProjectModal: ProjectCaseStudy | null = null;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();

    // Check if there is a fragment
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const found = this.projects.find(p => p.id === fragment);
        if (found) {
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    });
  }

  get filteredProjects(): ProjectCaseStudy[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.industry.toLowerCase() === this.selectedCategory.toLowerCase());
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }

  openModal(project: ProjectCaseStudy): void {
    this.activeProjectModal = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.activeProjectModal = null;
    document.body.style.overflow = '';
  }
}
