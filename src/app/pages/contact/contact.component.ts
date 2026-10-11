import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, FaqAccordionComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData = {
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    projectBudget: '$35,000 - $75,000',
    timeline: '1-3 months',
    projectDescription: ''
  };

  availableServices = [
    { id: 'frontend', name: 'Frontend (Angular / React)', selected: false },
    { id: 'backend', name: 'Backend (Java / Spring Boot)', selected: true },
    { id: 'microservices', name: 'Microservices & Kafka', selected: false },
    { id: 'api', name: 'REST & API Integration', selected: false },
    { id: 'database', name: 'PostgreSQL / MySQL Tuning', selected: false },
    { id: 'devops', name: 'Cloud & Docker DevOps', selected: false }
  ];

  budgetOptions = [
    '<$15,000 (Proof of Concept)',
    '$15,000 - $35,000 (MVP Development)',
    '$35,000 - $75,000 (Full System Architecture)',
    '$75,000+ (Enterprise Multi-Pod)'
  ];

  timelineOptions = [
    'Immediate MVP (Within 4 weeks)',
    '1 - 3 Months',
    '3 - 6 Months',
    'Long-Term Dedicated Pod'
  ];

  isSubmitted = false;
  isSubmitting = false;
  generatedTicketNumber = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        const targetId = params['service'];
        const match = this.availableServices.find(s => s.id === targetId || targetId.includes(s.id));
        if (match) {
          match.selected = true;
        }
      }
    });
  }

  toggleService(service: { id: string; name: string; selected: boolean }): void {
    service.selected = !service.selected;
  }

  submitInquiry(): void {
    if (!this.formData.fullName || !this.formData.workEmail || !this.formData.projectDescription) {
      alert('Please fill in your name, work email, and a brief project description.');
      return;
    }

    this.isSubmitting = true;

    // Simulate enterprise inquiry processing
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      const randomSuffix = Math.floor(10000 + Math.random() * 90000);
      this.generatedTicketNumber = `KBX-${randomSuffix}`;
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 900);
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.formData = {
      fullName: '',
      workEmail: '',
      companyName: '',
      phoneNumber: '',
      projectBudget: '$35,000 - $75,000',
      timeline: '1-3 months',
      projectDescription: ''
    };
    this.availableServices.forEach(s => (s.selected = false));
  }
}
