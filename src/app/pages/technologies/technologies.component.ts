import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { TechnologyItem } from '../../core/models/portfolio.models';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, CtaBannerComponent],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  technologies: TechnologyItem[] = [];
  categories: string[] = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps'];
  selectedCategory: string = 'All';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.technologies = this.portfolioService.getTechnologies();
  }

  get filteredTechnologies(): TechnologyItem[] {
    if (this.selectedCategory === 'All') {
      return this.technologies;
    }
    return this.technologies.filter(
      t => t.category.toLowerCase() === this.selectedCategory.toLowerCase()
    );
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }
}
