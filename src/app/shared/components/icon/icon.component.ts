import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="app-icon" [ngClass]="['icon-' + name, className]" [style.width.px]="size" [style.height.px]="size" [style.min-width.px]="size" [style.color]="color || 'currentColor'">
      <svg
        [attr.viewBox]="viewBox"
        [attr.width]="size"
        [attr.height]="size"
        fill="none"
        stroke="currentColor"
        stroke-width="1.85"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="svg-icon"
        [ngSwitch]="name">

        <!-- Angular -->
        <g *ngSwitchCase="'angular'">
          <path d="M12 2L2 5.5l1.5 12.5L12 22l8.5-4L22 5.5L12 2z" stroke-width="1.8" />
          <path d="M12 4.5l-5 11h2.5l1-2.5h3l1 2.5H17L12 4.5z" />
          <path d="M11 11.5h2" stroke-width="1.5" />
        </g>

        <!-- React -->
        <g *ngSwitchCase="'react'">
          <ellipse cx="12" cy="12" rx="3.5" ry="3.5" stroke-width="2" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(150 12 12)" />
        </g>

        <!-- Java -->
        <g *ngSwitchCase="'java'">
          <path d="M18 10c0 4-3 6-6 6s-6-2-6-6" />
          <path d="M6 14c0 3 2.7 5 6 5s6-2 6-5" />
          <path d="M4 21c3 1.5 13 1.5 16 0" />
          <path d="M10 3c1 1.5-1 3 0 4.5" />
          <path d="M14 2c1 1.5-1 3 0 4.5" />
        </g>

        <!-- Spring Boot -->
        <g *ngSwitchCase="'spring'">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.8c-2.4.4-4.5-.8-5.3-2.6-.9-2 .1-4.2 2.1-5.1 1.9-.9 4.3 0 5.2 2 .5 1.1.4 2.3-.2 3.2" />
          <path d="M14.5 10c-1.5.5-2.5 1.8-2.5 3.3" />
        </g>

        <!-- PostgreSQL -->
        <g *ngSwitchCase="'postgresql'">
          <path d="M12 3c-4.5 0-8 3-8 7 0 2.5 1.5 4.7 3.8 5.8L7 20l4-2c.3.03.6.05 1 .05 4.5 0 8-3 8-7s-3.5-7-8-7z" />
          <path d="M9 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm4 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" fill="currentColor" />
          <path d="M10 14c1 1 3 1 4 0" />
        </g>

        <!-- MySQL -->
        <g *ngSwitchCase="'mysql'">
          <ellipse cx="12" cy="7" rx="8" ry="3" />
          <path d="M4 7v6c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
          <path d="M4 13v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
        </g>

        <!-- Docker -->
        <g *ngSwitchCase="'docker'">
          <path d="M3 13.5C3 13.5 5 13 8 13c4 0 7 3 13 3 1 0 2-.5 2-.5-1 4-5 6.5-11 6.5C5 22 2 17.5 3 13.5z" />
          <path d="M5 10h2.5v2.5H5zM8.5 10H11v2.5H8.5zM12 10h2.5v2.5H12zM8.5 6.5H11V9H8.5zM12 6.5h2.5V9H12zM15.5 10H18v2.5h-2.5z" fill="currentColor" stroke="none" />
        </g>

        <!-- AWS -->
        <g *ngSwitchCase="'aws'">
          <path d="M4 16c4 3 12 3 16 0" />
          <path d="M17.5 14.5L20 16l-2.5 1.5" />
          <path d="M6 10l2-4 2 4M6.5 8.5h3" />
          <path d="M13 6v4l2-3 2 3V6" />
        </g>

        <!-- Azure -->
        <g *ngSwitchCase="'azure'">
          <path d="M4 19L11 4h3.5L9 19H4z" />
          <path d="M11.5 13l2.5-4.5L20 19h-6l-2.5-6z" />
        </g>

        <!-- Code -->
        <g *ngSwitchCase="'code'">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </g>

        <!-- Server -->
        <g *ngSwitchCase="'server'">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" stroke-width="2.5" />
          <line x1="6" y1="18" x2="6.01" y2="18" stroke-width="2.5" />
        </g>

        <!-- Layers -->
        <g *ngSwitchCase="'layers'">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </g>

        <!-- Terminal -->
        <g *ngSwitchCase="'terminal'">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </g>

        <!-- Database -->
        <g *ngSwitchCase="'database'">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </g>

        <!-- Cloud -->
        <g *ngSwitchCase="'cloud'">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </g>

        <!-- Shield / Security -->
        <g *ngSwitchCase="'shield'">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </g>

        <!-- Check -->
        <g *ngSwitchCase="'check'">
          <polyline points="20 6 9 17 4 12" />
        </g>

        <!-- Check Circle -->
        <g *ngSwitchCase="'check-circle'">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </g>

        <!-- Arrow Right -->
        <g *ngSwitchCase="'arrow-right'">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </g>

        <!-- Chevron Right -->
        <g *ngSwitchCase="'chevron-right'">
          <polyline points="9 18 15 12 9 6" />
        </g>

        <!-- Chevron Down -->
        <g *ngSwitchCase="'chevron-down'">
          <polyline points="6 9 12 15 18 9" />
        </g>

        <!-- Star -->
        <g *ngSwitchCase="'star'">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
        </g>

        <!-- Users -->
        <g *ngSwitchCase="'users'">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </g>

        <!-- Phone -->
        <g *ngSwitchCase="'phone'">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </g>

        <!-- Mail -->
        <g *ngSwitchCase="'mail'">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </g>

        <!-- Map Pin -->
        <g *ngSwitchCase="'map-pin'">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </g>

        <!-- External Link -->
        <g *ngSwitchCase="'external-link'">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </g>

        <!-- Menu Hamburger -->
        <g *ngSwitchCase="'menu'">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </g>

        <!-- X Close -->
        <g *ngSwitchCase="'x'">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </g>

        <!-- Sparkles / Innovation -->
        <g *ngSwitchCase="'sparkles'">
          <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36l-2.12 2.12M8.76 15.24l-2.12 2.12m0-10.72l2.12 2.12m6.48 6.48l2.12 2.12" />
        </g>

        <!-- Zap / Lightning -->
        <g *ngSwitchCase="'zap'">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </g>

        <!-- CPU / Architecture -->
        <g *ngSwitchCase="'cpu'">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </g>

        <!-- Heart Pulse / MedTech -->
        <g *ngSwitchCase="'heart-pulse'">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
        </g>

        <!-- Shopping Bag / Commerce -->
        <g *ngSwitchCase="'shopping-bag'">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </g>

        <!-- Truck / Logistics -->
        <g *ngSwitchCase="'truck'">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </g>

        <!-- Book Open / EdTech -->
        <g *ngSwitchCase="'book-open'">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </g>

        <!-- Clock -->
        <g *ngSwitchCase="'clock'">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </g>

        <!-- Calendar -->
        <g *ngSwitchCase="'calendar'">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </g>

        <!-- Award -->
        <g *ngSwitchCase="'award'">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </g>

        <!-- Default icon fallback -->
        <g *ngSwitchDefault>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </g>
      </svg>
    </span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    .app-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
    }
    .svg-icon {
      width: 100%;
      height: 100%;
    }
  `]
})
export class IconComponent {
  @Input() name: string = 'check';
  @Input() size: number = 20;
  @Input() color: string = '';
  @Input() className: string = '';
  @Input() viewBox: string = '0 0 24 24';
}
