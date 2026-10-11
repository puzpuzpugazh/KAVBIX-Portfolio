import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <footer class="footer">
      <div class="footer-top container">
        <div class="footer-grid">
          <!-- Col 1: Brand & Enterprise Value -->
          <div class="footer-brand-col">
            <a routerLink="/" class="footer-brand">
              <div class="logo-symbol">
                <span class="logo-letter">K</span>
                <div class="logo-accent-dot"></div>
              </div>
              <div class="brand-text">
                <span class="brand-name">KAVBIX</span>
                <span class="brand-tag">TECHNOLOGIES</span>
              </div>
            </a>
            <p class="brand-desc">
              We engineer enterprise-grade web applications, resilient microservices, and cloud-native systems for high-growth tech startups, mid-market leaders, and global enterprises.
            </p>

            <div class="trust-pill-group">
              <span class="trust-pill">
                <app-icon name="shield" [size]="14" color="#38bdf8"></app-icon>
                <span>OWASP Top 10 Compliant</span>
              </span>
              <span class="trust-pill">
                <app-icon name="award" [size]="14" color="#10b981"></app-icon>
                <span>100% IP Transfer</span>
              </span>
              <span class="trust-pill">
                <app-icon name="clock" [size]="14" color="#38bdf8"></app-icon>
                <span>99.99% Uptime SLA</span>
              </span>
            </div>
          </div>

          <!-- Col 2: Enterprise Services -->
          <div class="footer-col">
            <h4 class="col-title">Engineering Services</h4>
            <ul class="col-list">
              <li><a routerLink="/services" fragment="frontend-development">Frontend Engineering (Angular/React)</a></li>
              <li><a routerLink="/services" fragment="backend-development">Java & Spring Boot Backends</a></li>
              <li><a routerLink="/services" fragment="microservices-architecture">Microservices & Kafka Streams</a></li>
              <li><a routerLink="/services" fragment="api-development">Enterprise REST & OpenAPI</a></li>
              <li><a routerLink="/services" fragment="database-solutions">PostgreSQL & MySQL Engineering</a></li>
              <li><a routerLink="/services" fragment="cloud-devops">Cloud Deployment (AWS / Azure)</a></li>
            </ul>
          </div>

          <!-- Col 3: Technology Capabilities -->
          <div class="footer-col">
            <h4 class="col-title">Core Technologies</h4>
            <ul class="col-list">
              <li><a routerLink="/technologies">Angular (Signals & Standalone)</a></li>
              <li><a routerLink="/technologies">React & TypeScript Ecosystem</a></li>
              <li><a routerLink="/technologies">Java 17 / 21 LTS Core</a></li>
              <li><a routerLink="/technologies">Spring Boot 3 Enterprise</a></li>
              <li><a routerLink="/technologies">PostgreSQL & MySQL RDBMS</a></li>
              <li><a routerLink="/technologies">Docker & Cloud Orchestration</a></li>
              <li><a routerLink="/technologies">AWS & Azure Architecture</a></li>
            </ul>
          </div>

          <!-- Col 4: Enterprise Inquiries -->
          <div class="footer-col">
            <h4 class="col-title">Technical Advisory</h4>
            <p class="advisory-text">Ready to discuss your software architecture, migration, or new build?</p>
            <div class="contact-links">
              <a href="mailto:contact@kavbix.com" class="contact-link-item">
                <app-icon name="mail" [size]="16" color="#38bdf8"></app-icon>
                <span>contact&#64;kavbix.com</span>
              </a>
              <a href="tel:+919876543210" class="contact-link-item">
                <app-icon name="phone" [size]="16" color="#38bdf8"></app-icon>
                <span>+91 98765 43210</span>
              </a>
              <div class="contact-link-item">
                <app-icon name="map-pin" [size]="16" color="#38bdf8"></app-icon>
                <span>Tech Park, Bengaluru & Global Delivery</span>
              </div>
            </div>
            <a routerLink="/contact" class="btn btn-primary btn-sm cta-touch-btn">
              <span>Request Technical RFP</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-inner container">
          <div class="copy-text">
            &copy; {{ currentYear }} Kavbix Technologies Pvt. Ltd. All rights reserved. Built with modern Angular enterprise architecture.
          </div>
          <div class="bottom-links">
            <span class="confidential-badge">Enterprise Confidentiality & NDA Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #0b1120;
      color: #94a3b8;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.9375rem;
    }

    .footer-top {
      padding: 5rem 1.5rem 4rem 1.5rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.6fr 1.2fr 1.2fr 1.3fr;
      gap: 3.5rem;
    }

    /* Brand Column */
    .footer-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      margin-bottom: 1.25rem;
    }

    .logo-symbol {
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, #1e293b 0%, #1e3a8a 50%, #2563eb 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .logo-letter {
      color: #ffffff;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.35rem;
      line-height: 1;
    }

    .logo-accent-dot {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #38bdf8;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.15rem;
      letter-spacing: 0.08em;
      color: #ffffff;
      line-height: 1.1;
    }

    .brand-tag {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: #38bdf8;
      line-height: 1;
    }

    .brand-desc {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: #94a3b8;
      margin-bottom: 1.75rem;
    }

    .trust-pill-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .trust-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.3rem 0.65rem;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      font-size: 0.75rem;
      color: #cbd5e1;
      font-weight: 500;
    }

    /* Col lists */
    .col-title {
      color: #ffffff;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      letter-spacing: -0.01em;
    }

    .col-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .col-list a {
      color: #94a3b8;
      transition: color 0.15s ease;
      font-size: 0.875rem;
    }

    .col-list a:hover {
      color: #38bdf8;
    }

    .advisory-text {
      font-size: 0.875rem;
      color: #94a3b8;
      margin-bottom: 1.25rem;
      line-height: 1.5;
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .contact-link-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: #cbd5e1;
      font-size: 0.875rem;
    }

    .contact-link-item:hover {
      color: #38bdf8;
    }

    .cta-touch-btn {
      width: 100%;
      justify-content: center;
    }

    /* Footer Bottom */
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 1.75rem 0;
      background: rgba(0, 0, 0, 0.25);
    }

    .footer-bottom-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      flex-wrap: wrap;
      font-size: 0.8125rem;
      color: #64748b;
    }

    .confidential-badge {
      color: #94a3b8;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
      }
    }

    @media (max-width: 640px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2.25rem;
      }
      .footer-bottom-inner {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
