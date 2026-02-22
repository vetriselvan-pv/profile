
import { Component, AfterViewInit, ElementRef, viewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contribution',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contribution" class="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div class="mb-12">
        <h2 class="text-4xl font-bold mb-4">
          My <span class="text-gradient">Contributions</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
        ></div>
      </div>

      <div #contributionContainer class="opacity-0 bg-bg-base border border-border-base rounded-3xl p-8 shadow-xl overflow-hidden relative group hover:border-brand-primary/50 transition-colors duration-500">
        <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div class="relative z-10 flex flex-col items-center">
            <p class="text-text-muted mb-8 text-center max-w-2xl">
                Check out my open source contributions on GitHub. I'm passionate about building and sharing with the community.
            </p>

            <div class="w-full p-6 rounded-2xl border border-border-base bg-brand-primary/5 text-left">
                <h3 class="text-2xl font-bold text-text-heading mb-4">
                    GitHub Contribution
                </h3>
                <h3 class="text-lg font-bold text-text-heading mb-2">
                    Repository: angular-skills
                </h3>
                <a
                  href="https://github.com/analogjs/angular-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm font-semibold text-brand-primary hover:underline mb-3"
                >
                  https://github.com/analogjs/angular-skills
                </a>
                <p class="text-text-muted leading-relaxed mb-3">
                  A collection of skills for AI-assisted Angular development. These skills provide coding agents such as Claude, Gemini, OpenCode, etc with up-to-date Angular v20+ patterns, best practices, and code examples.
                </p>
                <p class="text-text-heading font-medium">
                  Contribution: Angular Signal Forms - (FormValueControl)
                </p>
            </div>

            <div class="w-full mt-8 p-6 rounded-2xl border border-border-base bg-bg-base text-left">
                <h3 class="text-2xl font-bold text-text-heading mb-4">
                    GitHub Activity
                </h3>
                <a href="https://github.com/vetriselvan-pv" target="_blank" rel="noopener noreferrer" class="block w-full overflow-x-auto">
                    <img 
                        src="https://ghchart.rshah.org/vetriselvan-pv" 
                        alt="Vetriselvan's Github Chart" 
                        class="w-full min-w-[800px] h-auto filter hover:brightness-110 transition-all duration-300"
                    />
                </a>
            </div>

            <div class="mt-8">
                <a href="https://github.com/vetriselvan-pv" target="_blank" class="px-6 py-3 rounded-full bg-brand-primary/10 text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    Visit GitHub Profile
                </a>
            </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class Contribution implements AfterViewInit, OnDestroy {
    container = viewChild<ElementRef>('contributionContainer');

    ngAfterViewInit() {
        const el = this.container()?.nativeElement;
        if (el) {
            gsap.fromTo(el, {
                 y: 50,
                 opacity: 0
            }, {
                scrollTrigger: {
                    id: 'contribution-trigger',
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                force3D: true // Force hardware acceleration
            });
        }
    }

    ngOnDestroy() {
        const trigger = ScrollTrigger.getById('contribution-trigger');
        if (trigger) {
            trigger.kill();
        }
    }
}
