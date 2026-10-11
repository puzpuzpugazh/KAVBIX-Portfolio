import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="header-inner container">
        <!-- Brand Logo -->
        <a routerLink="/" class="brand" (click)="closeMobileMenu()">
          <div class="logo-symbol">
            <span class="logo-letter">K</span>
            <div class="logo-accent-dot"></div>
          </div>
          <div class="brand-text">
            <span class="brand-name">KAVBIX</span>
            <span class="brand-tag">TECHNOLOGIES</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="nav-desktop">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-link">Home</a>
          <a routerLink="/services" routerLinkActive="active" class="nav-link">Services</a>
          <a routerLink="/technologies" routerLinkActive="active" class="nav-link">Technologies</a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link">Projects</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">About Us</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
        </nav>

        <!-- Right Action Buttons -->
        <div class="header-actions">
          <a routerLink="/contact" class="btn btn-primary btn-sm cta-btn">
            <span>Schedule Consultation</span>
            <app-icon name="arrow-right" [size]="15"></app-icon>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button
            type="button"
            class="mobile-toggle"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="mobileMenuOpen"
            aria-label="Toggle navigation menu">
            <app-icon [name]="mobileMenuOpen ? 'x' : 'menu'" [size]="22"></app-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" [class.open]="mobileMenuOpen">
        <nav class="mobile-nav container">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMobileMenu()" class="mobile-link">
            <span>Home</span>
            <app-icon name="chevron-right" [size]="16"></app-icon>
          </a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMobileMenu()" class="mobile-link">
            <span>Services</span>
            <app-icon name="chevron-right" [size]="16"></app-icon>
          </a>
          <a routerLink="/technologies" routerLinkActive="active" (click)="closeMobileMenu()" class="mobile-link">
            <span>Technologies</span>
            <app-icon name="chevron-right" [size]="16"></app-icon>
          </a>
          <a routerLink="/projects" routerLinkActive="active" (click)="closeMobileMenu()" class="mobile-link">
            <span>Projects</span>
            <app-icon name="chevron-right" [size]="16"></app-icon>
          </a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()" class="mobile-link">
            <span>About Us</span>
            <app-icon name="chevron-right" [size]="16"></app-icon>
          </a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMobileMenu()" class="mobile-link">
            <span>Contact & Inquiries</span>
            <app-icon name="chevron-right" [size]="16"></app-icon>
          </a>

          <div class="mobile-cta-wrapper">
            <a routerLink="/contact" (click)="closeMobileMenu()" class="btn btn-primary btn-lg" style="width: 100%;">
              <span>Book Technical Call</span>
              <app-icon name="arrow-right" [size]="18"></app-icon>
            </a>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(248, 250, 252, 0.88);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(226, 232, 240, 0.7);
      transition: all 0.25s ease;
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.95);
      border-bottom-color: rgba(226, 232, 240, 0.95);
      box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.08);
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }

    /* Brand Logo */
    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
    }

    .logo-symbol {
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
    }

    .logo-letter {
      color: #ffffff;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.35rem;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .logo-accent-dot {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #38bdf8;
      box-shadow: 0 0 6px #38bdf8;
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
      color: var(--color-secondary);
      line-height: 1.1;
    }

    .brand-tag {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: var(--color-primary);
      line-height: 1;
    }

    /* Desktop Navigation */
    .nav-desktop {
      display: flex;
      align-items: center;
      gap: 1.75rem;
    }

    .nav-link {
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--color-text-muted);
      padding: 0.5rem 0.25rem;
      position: relative;
      transition: color 0.15s ease;
    }

    .nav-link:hover {
      color: var(--color-primary);
    }

    .nav-link.active {
      color: var(--color-primary);
      font-weight: 600;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-primary);
      border-radius: 2px;
    }

    /* Header Actions */
    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .cta-btn {
      padding: 0.6rem 1.25rem;
      font-size: 0.875rem;
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      padding: 0.5rem;
      cursor: pointer;
      color: var(--color-secondary);
      align-items: center;
      justify-content: center;
      transition: background 0.15s ease;
    }

    .mobile-toggle:hover {
      background: var(--color-bg-subtle);
    }

    /* Mobile Drawer */
    .mobile-drawer {
      display: none;
      position: fixed;
      top: 72px;
      left: 0;
      right: 0;
      background: #ffffff;
      border-bottom: 1px solid var(--color-border);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease;
    }

    .mobile-drawer.open {
      max-height: 480px;
    }

    .mobile-nav {
      padding: 1.25rem 1.5rem 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .mobile-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.85rem 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-body);
      border-bottom: 1px solid #f1f5f9;
      transition: color 0.15s ease;
    }

    .mobile-link.active {
      color: var(--color-primary);
      font-weight: 700;
    }

    .mobile-cta-wrapper {
      margin-top: 1.25rem;
    }

    @media (max-width: 900px) {
      .nav-desktop {
        display: none;
      }
      .cta-btn {
        display: none;
      }
      .mobile-toggle {
        display: flex;
      }
      .mobile-drawer {
        display: block;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
