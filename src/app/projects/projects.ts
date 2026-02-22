import {
  Component,
  signal,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  viewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div class="mb-12">
        <h2 class="text-4xl font-bold mb-4 animate-slide-up">
          Featured <span class="text-gradient">Projects</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (project of projects(); track project.title; let i = $index) {
          <div
            #projectCard
            class="group relative overflow-hidden rounded-3xl border border-border-base bg-bg-base transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <!-- Project Image Container -->
            <div class="relative h-64 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              ></div>
              <img
                [src]="project.image"
                [alt]="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <!-- Quick Links (on hover) -->
              <div
                class="absolute inset-0 flex items-center justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20"
              >
                @if (project.github) {
                  <a
                    [href]="project.github"
                    target="_blank"
                    class="p-3 glass rounded-full hover:bg-brand-primary text-white transition-colors"
                    aria-label="Github Repository"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                      />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                }
                <a
                  [href]="project.link"
                  target="_blank"
                  class="p-3 glass rounded-full hover:bg-brand-secondary text-white transition-colors"
                  aria-label="Live Demo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Content -->
            <div class="p-8">
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tag of project.tech; track tag) {
                  <span
                    class="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded-lg"
                  >
                    {{ tag }}
                  </span>
                }
              </div>

              <h3
                class="text-xl font-bold mb-3 text-text-heading group-hover:text-brand-primary transition-colors"
              >
                {{ project.title }}
              </h3>

              <p class="text-text-muted text-sm leading-relaxed mb-6">
                {{ project.description }}
              </p>

              <div class="flex items-center justify-between">
                <a
                  [href]="project.link"
                  target="_blank"
                  class="text-sm font-bold flex items-center gap-2 text-text-heading hover:text-brand-primary transition-colors group/link"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="group-hover/link:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class Projects implements AfterViewInit, OnDestroy {
  protected readonly projects = signal([
    // {
    //   title: 'Portfolio',
    //   description:
    //     'I built this portfolio website from scratch to present my web development projects, technical expertise, and professional background in one place',
    //   image:
    //     './portfolio_landing.png',
    //   tech: ['Angular', 'tailwindcss', 'gsap'],
    //   link: 'https://vetriselvan-pv.github.io/profile/',
    //   github: 'https://github.com/vetriselvan-pv/profile',
    // },
    {
      title: 'Workspace Generator',
      description:
        'A workspace generator application I built to scaffold project structures quickly and standardize development setup across new applications.',
      image:
        './workspace-generator-logo.svg',
      tech: ['React', 'TypeScript', 'Node.js'],
      link: 'https://github.com/vetriselvan-pv/workspace-generator',
      github: 'https://github.com/vetriselvan-pv/workspace-generator/blob/main/PORTFOLIO_CASE_STUDY.md',
    },
    {
      title: 'Warehouse Management for Coffee Vendor',
      description:
        'A mobile application built to efficiently manage warehouse operations, inventory, and logistics for a coffee vendor shop.',
      image: './warehouse-app-placeholder.svg',
      tech: ['Ionic', 'Angular', 'Capacitor'],
      link: '#',
      github: '#',
    },
  ]);

  cardElements = viewChildren<ElementRef<HTMLDivElement>>('projectCard');

  ngAfterViewInit() {
    this.animateCards();
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars.id && t.vars.id.startsWith('projects-')) {
        t.kill();
      }
    });
  }

  private animateCards() {
    this.cardElements().forEach((card, index) => {
      gsap.from(card.nativeElement, {
        scrollTrigger: {
          id: `projects-${index}`,
          trigger: card.nativeElement,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: index * 0.1,
      });
    });
  }
}
