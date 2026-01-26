import { Component, signal, AfterViewInit } from '@angular/core';
import { ContactComponent } from './contact/contact';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Awards } from "./awards/awards";
import { Education } from "./education/education";
import { Home } from "./home/home";
import { Testimonial } from './testimonial/testimonial';
import { Projects } from './projects/projects';
import { Blog } from './blog/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, ContactComponent, Experience, Skills, Awards, Education, Home, Testimonial, Projects, Blog],
  template: `
    <div
      class="min-h-screen bg-bg-base text-text-base selection:bg-brand-primary selection:text-white transition-colors duration-500 overflow-x-hidden">
      <div class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div
          class="absolute top-[10%] left-[10%] w-120 h-120 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow">
        </div>
        <div
          class="absolute bottom-[20%] right-[10%] w-100 h-100 bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>
      <app-home [name]="name()" [role]="role()" [contact]="contact()" [summary]="summary()" /> 
      <div class="max-w-6xl mx-auto flex flex-col relative px-4">
        <app-experience />
        <app-projects />
        <app-skills />
        <app-blog />
        <app-testimonial />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <app-awards></app-awards>
          <app-education></app-education>
        </div>
        <app-contact [email]="contact().email" [phone]="contact().phone" [location]="contact().location" />
        <footer class="py-12 text-center text-sm text-text-muted animate-fade-in border-t border-border-base transition-colors duration-500">
          &copy; 2026 {{ name() }}. All rights reserved.
        </footer>
      </div>
    </div>
  `
})
export class MainContent {
  protected readonly name = signal('VETRISELVAN PANNEERSELVAM');
  protected readonly role = signal('Senior Fullstack Developer');
  protected readonly contact = signal({
    location: 'Chennai, India',
    phone: '+91 6380677385',
    email: 'vetrivaishu11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vetriselvan-panneerselvam',
    github: 'https://github.com/vetriselvan-pv',
    medium: 'https://medium.com/@vetriselvan_11',
    devto: 'https://dev.to/vetriselvan_11',
  });

  protected readonly summary = signal(
    'Senior Fullstack Developer with 6+ years of experience specializing in Angular and scalable enterprise applications. Proven leader with experience mentoring teams, driving UI architecture, and delivering high-performance solutions. Strong expertise in reusable component design, workflow-driven banking platforms, and Agile development.',
  ); 
}
