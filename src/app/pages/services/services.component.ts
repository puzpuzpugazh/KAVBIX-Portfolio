import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ServiceItem } from '../../core/models/portfolio.models';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, CtaBannerComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: ServiceItem[] = [];
  selectedService: ServiceItem | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.services = this.portfolioService.getServices();
    if (this.services.length > 0) {
      this.selectedService = this.services[0];
    }
  }

  selectService(service: ServiceItem): void {
    this.selectedService = service;
  }
}
