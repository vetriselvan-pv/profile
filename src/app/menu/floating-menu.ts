import { Component, signal, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-floating-menu', 
  imports: [CommonModule],
  template: `
    <nav
      class="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-50 flex flex-col items-center gap-4"
    >
      <div
        class="flex flex-col gap-3 transition-all duration-500 origin-bottom"
        [class.opacity-0]="!isMenuOpen()"
        [class.scale-90]="!isMenuOpen()"
        [class.translate-y-4]="!isMenuOpen()"
        [class.pointer-events-none]="!isMenuOpen()"
      >
        @for (item of menuItems(); track item.id) {
          <button
            (click)="scrollToSection(item.id)"
            class="p-4 glass-dark rounded-full shadow-lg border border-slate-200 hover:border-brand-primary/40 text-slate-500 hover:text-brand-primary transition-all duration-300 relative group"
            [class.text-brand-primary]="activeSection() === item.id"
            [attr.aria-label]="'Scroll to ' + item.label"
          >
            <!-- Tooltip -->
            <span
              class="absolute right-full mr-4 px-3 py-1.5 glass rounded-lg text-xs font-bold text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
            >
              {{ item.label }}
            </span>

            <!-- Icon -->
            <div class="relative z-10 hover:scale-110 transition-transform">
              @switch (item.id) {
                @case ('home') {
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                }
                @case ('experience') {
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
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                }
                @case ('projects') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                }
                @case ('skills') {
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
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                }
                @case ('awards') {
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
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                }
                @case ('education') {
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
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v5" />
                  </svg>
                }
                @case ('contact') {
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
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                }
                @case ('testimonials') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l4-4V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"/><path d="M3 19V9a2 2 0 0 1 2-2h2"/></svg>
                }
                @case ('blogs') {
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                }
              }
            </div>
            @if (activeSection() === item.id) {
              <div
                class="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-brand-primary rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
              ></div>
            }
          </button>
        }
        
      </div>
      <button
        (click)="isMenuOpen.set(!isMenuOpen())"
        class="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative z-50 overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        ></div>
        <div
          class="relative z-10 transition-transform duration-500"
          [class.rotate-90]="isMenuOpen()"
        >
          @if (!isMenuOpen()) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          } @else {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          }
        </div>
      </button>
    </nav>
  `,
  styles: [],
})
export class FloatingMenu implements AfterViewInit, OnDestroy {
  menuItems = signal([
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' },
    { id: 'education', label: 'Education' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' },
  ]);

  activeSection = signal('home');
  isMenuOpen = signal(false);
  private routeSubscription: any;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Listen for route changes to setup/refresh triggers
    this.routeSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.refreshTriggers();
    });

    // Initial setup
    this.refreshTriggers();
  }

  private refreshTriggers() {
    this.killAllTriggers();
    if (this.router.url === '/' || this.router.url === '') {
      // Give Angular a moment to render the routed component
      setTimeout(() => this.setupScrollTriggers(), 100);
    }
  }

  private killAllTriggers() {
    ScrollTrigger.getAll().forEach(t => {
      if (t.vars.id && t.vars.id.startsWith('nav-')) {
        t.kill();
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    this.killAllTriggers();
  }

  private setupScrollTriggers() {
    this.menuItems().forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        ScrollTrigger.create({
          id: `nav-${item.id}`,
          trigger: element,
          start: 'top 40%',
          end: 'bottom 40%',
          onToggle: self => {
            if (self.isActive) {
              this.activeSection.set(item.id);
            }
          },
        });
      }
    });
  }

  scrollToSection(id: string) {
    this.activeSection.set(id);
    this.isMenuOpen.set(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
