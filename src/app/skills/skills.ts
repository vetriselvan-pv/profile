import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  template: `
    <section id="skills" class="animate-slide-up pb-20" style="animation-delay: 0.4s">
      <h3 class="text-2xl font-bold mb-12 flex items-center gap-4">
        <span class="w-8 h-1 bg-brand-secondary rounded"></span>
        Skills
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (category of skills(); track category.category) {
          <div
            class="glass-dark p-6 rounded-2xl border border-gray-800 hover:border-brand-secondary/30 transition-all"
          >
            <h4 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span class="w-2 h-2 bg-brand-secondary rounded-full"></span>
              {{ category.category }}
            </h4>
            <div class="flex flex-wrap gap-3">
              @for (skill of category.items; track skill) {
                <span
                  class="px-4 py-2 glass rounded-xl text-sm text-gray-400 hover:text-white hover:bg-brand-secondary/10 transition-all cursor-default group"
                >
                  {{ skill }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Skills {
  protected readonly skills = signal([
    {
      category: 'Language',
      items: ['HTML', 'CSS', 'Markdown', 'JavaScript (ES6+)', 'TypeScript'],
    },
    {
      category: 'Framework',
      items: ['Angular', 'Next.js', 'Node.js', 'Express js', 'Ionic capacitor'],
    },
    {
      category: 'Architecture',
      items: [
        'Nx Workspace',
        'Micro-frontends (Angular Module Federation)',
        'Micro-frontends (Angular Native Federation)',
        'Angular Monorepo',
      ],
    },
    {
      category: 'Library',
      items: ['React', 'RxJS', 'NGXS', 'Angular Material', 'Tailwind CSS', 'Prisma'],
    },
    {
      category: 'IDE',
      items: ['VS Code', 'Cursor', 'Antigravity', 'Android Studio', 'GitHub Desktop'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitHub', 'GitLab'],
    },
  ]);
}
