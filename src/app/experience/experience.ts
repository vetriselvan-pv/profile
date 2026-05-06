import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  template: `
    <section id="experience" class="animate-slide-up pb-20">
      <h3 class="text-2xl font-bold mb-12 flex items-center gap-4">
        <span class="w-8 h-1 bg-brand-primary rounded"></span>
        Experience
      </h3>

      <div class="space-y-16">
        @for (job of experience(); track job.company + job.period) {
          <div class="relative pl-10 border-l border-border-base transition-colors duration-500 group">
            <div
              class="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-text-muted rounded-full group-hover:bg-brand-primary transition-colors ring-4 ring-bg-base transition-colors duration-500"
            ></div>

            <div
              class="glass-dark p-8 rounded-2xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/5"
            >
              <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 border-b border-border-base/50 pb-6">
                <div>
                  <div class="flex items-center gap-3 mb-2">
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
                      class="text-brand-primary"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                    </svg>
                    <h4 class="text-2xl font-bold text-text-heading group-hover:text-brand-primary transition-colors duration-500">
                      {{ job.company }}
                    </h4>
                  </div>
                  <div class="text-text-muted flex items-center gap-2 text-sm ml-8">
                    <span>{{ job.location }}</span>
                    <span>&bull;</span>
                    <span class="text-brand-secondary font-medium">{{ job.role }}</span>
                  </div>
                </div>
                <span class="text-sm px-4 py-1.5 glass rounded-full text-text-muted transition-colors duration-500 font-medium">
                  {{ job.period }}
                </span>
              </div>

              <div class="space-y-10">
                @for (project of job.projects; track project.name) {
                  <div class="animate-fade-in">
                    <div class="flex flex-col mb-4">
                      <h5 class="text-lg font-bold text-brand-primary mb-1">
                        Project: {{ project.name }}
                      </h5>
                      <div class="text-text-heading font-semibold text-sm tracking-wide">
                        {{ project.role }}
                      </div>
                    </div>

                    <ul class="space-y-3">
                      @for (bullet of project.highlights; track $index) {
                        <li class="text-text-muted flex gap-3 leading-relaxed">
                          <span class="text-brand-primary/70 mt-1.5 text-xs">●</span>
                          <span>{{ bullet }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
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
      company: 'Intellect Design Arena',
      location: 'Chennai',
      period: '03/2025 - Current',
      role: 'Senior Project Lead',
      projects: [
        {
          name: 'FPX Library (Fintech UI Framework)',
          role: 'Senior Frontend Architect / Project Lead',
          highlights: [
            'Architected a configuration-driven full stack framework using Angular and Node.js, enabling dynamic UI rendering and reducing feature development time by 40% across multiple product teams.',
            'Designed and implemented reusable NPM component libraries and backend-driven configuration systems, improving UI consistency and minimizing duplicate code by 50%.',
            'Led a team of 6 engineers to deliver scalable frontend and API-integrated modules aligned with enterprise fintech requirements.',
            'Established coding standards, linting, and CI/CD practices, improving code quality and reducing production defects.',
          ],
        },
        {
          name: 'Pulse – BaaS Platform (API Monetization & Billing)',
          role: 'Senior Full Stack Engineer / Technical Lead',
          highlights: [
            'Developed and scaled a BaaS platform supporting API monetization and billing workflows across multiple enterprise banking products.',
            'Built and integrated RESTful APIs using Node.js, enabling seamless communication between frontend applications and backend services.',
            'Engineered scalable workflows for API subscription, monetization, usage tracking, and automated billing systems.',
            'Implemented secure document specification upload and asset management features for API lifecycle workflows.',
          ],
        },
        {
          name: 'API Exchange – Consumer API Portal',
          role: 'Senior Full Stack Engineer / Technical Lead',
          highlights: [
            'Engineered a full stack API marketplace platform supporting API discovery, access control, and subscription workflows.',
            'Designed role-based access systems and backend-driven authorization logic, improving application security and scalability.',
            'Integrated real-time data synchronization between Angular frontend and Node.js backend services.',
          ],
        },
      ],
    },
    {
      company: 'Intellect Design Arena',
      location: 'Chennai',
      period: '10/2023 - 03/2025',
      role: 'Team Lead',
      projects: [
        {
          name: 'iTurmeric Studio (Low Code Platform)',
          role: 'Full Stack Engineer / Team Lead',
          highlights: [
            'Mentored a 3-member frontend engineering team delivering a low-code Angular enterprise platform.',
            'Designed scalable Angular component libraries adopted across 5+ teams, reducing development effort by 50%.',
            'Conducted code reviews and enforced Angular architecture standards, folder structures, and quality gates.',
            'Developed secure internal APIs using Node.js and Express.js with Bcrypt encryption for automation workflows.',
          ],
        },
      ],
    },
    {
      company: 'Intellect Design Arena',
      location: 'Chennai',
      period: '10/2022 - 09/2023',
      role: 'Consultant',
      projects: [
        {
          name: 'Retail Banking Hybrid Mobile & Back-Office Applications',
          role: 'Consultant',
          highlights: [
            'Developed a retail banking hybrid mobile application using Angular 14, Ionic, and Apache Cordova.',
            'Implemented credit card services and complex workflow-driven banking features.',
            'Integrated native Cordova plugins and optimized UI interactions using GSAP animations.',
            'Contributed to enterprise back-office banking applications including Service Request Management and Role Maintenance modules.',
          ],
        },
      ],
    },
    {
      company: 'Intellect Design Arena',
      location: 'Jordan',
      period: '09/2021 - 10/2022',
      role: 'Associate Consultant',
      projects: [
        {
          name: 'Arab Bank Teller Application (On-site - Jordan)',
          role: 'Frontend Developer',
          highlights: [
            'Built Angular 8 teller applications featuring reusable UI components for bill payment workflows.',
            'Collaborated directly with on-site clients and domain experts to gather requirements and deliver enhancements.',
          ],
        },
        {
          name: 'Sberbank Retail Mobile & Web Application',
          role: 'Hybrid Mobile App Developer',
          highlights: [
            'Independently developed Service Request, Flex Pay, Onboarding, and Greenification modules using Angular and Java backend systems.',
          ],
        },
      ],
    },
    {
      company: 'Newage Software and Solutions',
      location: 'Chennai',
      period: '11/2019 - 09/2021',
      role: 'Frontend Developer',
      projects: [
        {
          name: 'ERP Logistics & CRM Modules',
          role: 'Frontend Developer',
          highlights: [
            'Developed core ERP logistics modules using Angular 9 with Nx workspace.',
            'Implemented NGXS state management for booking workflows.',
            'Delivered a CRM module for a hybrid Ionic application.',
          ],
        },
      ],
    },
  ]);
}
