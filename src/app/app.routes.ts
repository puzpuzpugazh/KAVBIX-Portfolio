import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Kavbix Technologies | Enterprise Software Engineering & Cloud Solutions'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | Enterprise Frontend, Java Spring Boot & Cloud Architecture | Kavbix'
  },
  {
    path: 'technologies',
    loadComponent: () =>
      import('./pages/technologies/technologies.component').then((m) => m.TechnologiesComponent),
    title: 'Technologies | Angular, React, Java, Spring Boot, PostgreSQL & Cloud | Kavbix'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Production Case Studies | Enterprise Banking, Healthcare & SaaS | Kavbix'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Enterprise Engineering Standards & Technical Leadership | Kavbix'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us | Request Technical RFP & Schedule Consultation | Kavbix'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
