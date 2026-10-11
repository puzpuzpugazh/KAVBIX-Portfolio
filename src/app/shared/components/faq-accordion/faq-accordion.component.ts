import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItem } from '../../../core/models/portfolio.models';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="faq-container">
      <!-- Category Filter Pills -->
      <div class="category-tabs" *ngIf="showCategories">
        <button
          type="button"
          class="tab-btn"
          [class.active]="selectedCategory === 'All'"
          (click)="setCategory('All')">
          All Questions
        </button>
        <button
          type="button"
          class="tab-btn"
          *ngFor="let cat of categories"
          [class.active]="selectedCategory === cat"
          (click)="setCategory(cat)">
          {{ cat }}
        </button>
      </div>

      <!-- FAQ Items List -->
      <div class="faq-list">
        <div
          class="faq-item"
          *ngFor="let item of filteredFaqs; let i = index"
          [class.expanded]="openIndex === i">
          <button
            type="button"
            class="faq-question-btn"
            (click)="toggle(i)"
            [attr.aria-expanded]="openIndex === i">
            <span class="faq-question-text">{{ item.question }}</span>
            <span class="faq-category-tag">{{ item.category }}</span>
            <span class="faq-icon-wrapper">
              <app-icon name="chevron-down" [size]="18"></app-icon>
            </span>
          </button>
          <div class="faq-answer-collapse" [class.show]="openIndex === i">
            <div class="faq-answer-inner">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .faq-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .category-tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      margin-bottom: 2.5rem;
      flex-wrap: wrap;
    }

    .tab-btn {
      background: #ffffff;
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      padding: 0.45rem 1rem;
      border-radius: var(--radius-pill);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .tab-btn:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    .tab-btn.active {
      background: var(--color-secondary);
      border-color: var(--color-secondary);
      color: #ffffff;
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      background: #ffffff;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: all var(--transition-normal);
    }

    .faq-item:hover {
      border-color: rgba(37, 99, 235, 0.4);
      box-shadow: var(--shadow-sm);
    }

    .faq-item.expanded {
      border-color: var(--color-primary);
      box-shadow: var(--shadow-md);
    }

    .faq-question-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.4rem 1.75rem;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
    }

    .faq-question-text {
      font-family: var(--font-heading);
      font-size: 1.075rem;
      font-weight: 600;
      color: var(--color-text-title);
      flex: 1;
      line-height: 1.4;
    }

    .faq-category-tag {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      padding: 0.2rem 0.6rem;
      background: var(--color-bg-subtle);
      border-radius: var(--radius-pill);
      color: var(--color-text-muted);
      letter-spacing: 0.04em;
    }

    .faq-icon-wrapper {
      color: var(--color-text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .faq-item.expanded .faq-icon-wrapper {
      transform: rotate(180deg);
      color: var(--color-primary);
    }

    .faq-answer-collapse {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .faq-answer-collapse.show {
      max-height: 400px;
    }

    .faq-answer-inner {
      padding: 0 1.75rem 1.6rem 1.75rem;
      border-top: 1px solid #f1f5f9;
      padding-top: 1.25rem;
    }

    .faq-answer-inner p {
      font-size: 0.95rem;
      color: var(--color-text-body);
      line-height: 1.7;
    }

    @media (max-width: 640px) {
      .faq-question-btn {
        padding: 1.15rem 1.25rem;
      }
      .faq-category-tag {
        display: none;
      }
      .faq-answer-inner {
        padding: 0 1.25rem 1.25rem 1.25rem;
      }
    }
  `]
})
export class FaqAccordionComponent implements OnInit {
  @Input() showCategories = true;
  @Input() initialOpenIndex = 0;

  allFaqs: FaqItem[] = [];
  filteredFaqs: FaqItem[] = [];
  categories: string[] = ['Engagement', 'Technical', 'Architecture', 'Security'];
  selectedCategory: string = 'All';
  openIndex: number = 0;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.allFaqs = this.portfolioService.getFaqs();
    this.filteredFaqs = this.allFaqs;
    this.openIndex = this.initialOpenIndex;
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredFaqs = this.allFaqs;
    } else {
      this.filteredFaqs = this.allFaqs.filter(f => f.category === category);
    }
    this.openIndex = 0;
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
