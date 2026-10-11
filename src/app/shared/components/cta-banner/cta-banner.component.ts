import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <!-- Background Glow Effect -->
          <div class="card-glow"></div>
          <div class="card-mesh"></div>

          <div class="cta-content">
            <span class="badge badge-dark">
              <span class="pulse-dot"></span>
              <span>Accepting New Enterprise Projects</span>
            </span>

            <h2 class="cta-heading">{{ title }}</h2>
            <p class="cta-subheading">{{ subtitle }}</p>

            <div class="cta-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">
                <span>{{ buttonText }}</span>
                <app-icon name="arrow-right" [size]="18"></app-icon>
              </a>
              <a routerLink="/projects" class="btn btn-outline-white btn-lg">
                <span>Review Production Projects</span>
                <app-icon name="external-link" [size]="16"></app-icon>
              </a>
            </div>

            <!-- Trust points under buttons -->
            <div class="cta-trust-badges">
              <div class="trust-item">
                <app-icon name="check" [size]="15" color="#38bdf8"></app-icon>
                <span>30-min Technical Architecture Review</span>
              </div>
              <div class="trust-item">
                <app-icon name="check" [size]="15" color="#38bdf8"></app-icon>
                <span>Signed Mutual NDA Included</span>
              </div>
              <div class="trust-item">
                <app-icon name="check" [size]="15" color="#38bdf8"></app-icon>
                <span>Fixed Milestone or Dedicated Pod</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      padding: 5rem 0 6rem 0;
      position: relative;
    }

    .cta-card {
      background: linear-gradient(135deg, #0f172a 0%, #172554 50%, #1e1b4b 100%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-xl);
      padding: 5rem 2.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.4);
    }

    .card-glow {
      position: absolute;
      top: -20%;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 350px;
      background: radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(56, 189, 248, 0.1) 60%, transparent 80%);
      filter: blur(50px);
      pointer-events: none;
    }

    .card-mesh {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
      opacity: 0.6;
    }

    .cta-content {
      position: relative;
      z-index: 1;
      max-width: 820px;
      margin: 0 auto;
    }

    .cta-heading {
      color: #ffffff;
      font-size: clamp(2.2rem, 4.2vw, 3.25rem);
      margin: 1.5rem 0 1.25rem 0;
      letter-spacing: -0.03em;
      line-height: 1.15;
    }

    .cta-subheading {
      color: #cbd5e1;
      font-size: 1.15rem;
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }

    .cta-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;
    }

    .cta-trust-badges {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      font-size: 0.875rem;
      color: #94a3b8;
    }

    .trust-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 768px) {
      .cta-card {
        padding: 3.5rem 1.5rem;
      }
      .cta-actions {
        flex-direction: column;
        width: 100%;
      }
      .cta-actions .btn {
        width: 100%;
      }
      .cta-trust-badges {
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-start;
      }
    }
  `]
})
export class CtaBannerComponent {
  @Input() title: string = 'Ready to Engineer an Enterprise-Grade Software Platform?';
  @Input() subtitle: string = 'Schedule an exploratory architecture call with our engineering leads. We provide concrete architectural feasibility, timeline breakdowns, and fixed milestone estimates.';
  @Input() buttonText: string = 'Book Technical Consultation';
}
