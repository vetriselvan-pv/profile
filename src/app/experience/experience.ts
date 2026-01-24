import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  template: `
    <section id="experience" class="animate-slide-up pb-20" style="animation-delay: 0.2s">
      <h3 class="text-2xl font-bold mb-12 flex items-center gap-4">
        <span class="w-8 h-1 bg-brand-primary rounded"></span>
        Experience
      </h3>

      <div class="space-y-16">
        @for (job of experience(); track job.title + job.company) {
          <div class="relative pl-10 border-l border-gray-800 group">
            <div
              class="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-700 rounded-full group-hover:bg-brand-primary transition-colors ring-4 ring-[#050505]"
            ></div>

            <div
              class="glass-dark p-6 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/5"
            >
              <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <h4
                  class="text-xl font-bold text-white group-hover:text-brand-primary transition-colors"
                >
                  {{ job.title }}
                </h4>
                <span class="text-sm px-3 py-1 glass rounded-full text-gray-400">
                  {{ job.period }}
                </span>
              </div>
              <div class="mb-4 flex items-center gap-2 text-brand-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <span class="font-medium">{{ job.company }}</span>
                <span class="text-gray-600">&bull;</span>
                <span class="text-gray-500 text-sm">{{ job.location }}</span>
              </div>
              <ul class="space-y-2">
                @for (bullet of job.description; track $index) {
                  <li class="text-gray-400 flex gap-3">
                    <span class="text-brand-primary mt-1.5">•</span>
                    <span>{{ bullet }}</span>
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Experience {
  protected readonly experience = signal([
    {
      title: 'Senior Project Lead',
      company: 'Intellect Design Arena',
      location: 'Chennai',
      period: '03/2025 - Current',
      description: [
        'Led and mentored a 6-member engineering team to architect FPX, a scalable Angular v20 framework.',
        'Built a configuration-driven UI engine using JSON-based reusable components.',
        'Improved developer productivity by delivering pre-built layouts and event-handling abstractions.',
      ],
    },
    {
      title: 'Team Lead',
      company: 'Intellect Design Arena',
      location: 'Chennai',
      period: '10/2023 - 03/2025',
      description: [
        'Led and mentored a 3-member frontend team on the Angular-based iTurmeric platform.',
        'Designed a reusable Angular library used by 5+ teams, reducing duplicate code by 50%.',
        'Built a Node.js automation server to streamline code merges and improve deployment efficiency.',
      ],
    },
    {
      title: 'Consultant',
      company: 'Intellect Design Arena',
      location: 'Chennai',
      period: '10/2022 - 09/2023',
      description: [
        'Developed a hybrid banking mobile app using Angular 14 and Apache Cordova.',
        'Built core features including credit card services and checkbook requests.',
        'Integrated Cordova plugins for native device functionality.',
        'Improved UI experience using GSAP animations.',
      ],
    },
    {
      title: 'Associate Consultant',
      company: 'Intellect Design Arena',
      location: 'Jordan',
      period: '09/2021 - 10/2022',
      description: [
        'Developed an Angular 8 teller application with reusable UI components.',
        'Delivered bill payment and cash deposit workflows.',
        'Collaborated with clients to implement business-aligned enhancements.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Newage Software and Solutions',
      location: 'Chennai',
      period: '11/2019 - 09/2021',
      description: [
        'Developed core ERP logistics modules using Angular 9 with Nx workspace.',
        'Implemented NGXS state management for booking workflows.',
        'Delivered a CRM module for a hybrid Ionic application.',
      ],
    },
  ]);
}
