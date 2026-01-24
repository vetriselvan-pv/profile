import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  template: `
    <section id="education" class="animate-slide-up pb-20" style="animation-delay: 0.8s">
      <h3 class="text-2xl font-bold mb-12 flex items-center gap-4">
        <span class="w-8 h-1  rounded"></span>
        Education
      </h3>
      <div class="space-y-8">
        @for (edu of education(); track edu.degree) {
          <div class="glass-dark p-6 rounded-2xl border-l-2 border-gray-700">
            <h4 class="font-bold text-white mb-2">{{ edu.degree }}</h4>
            <p class="text-sm text-gray-400">{{ edu.institution }}</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xs text-gray-500">{{ edu.location }}</span>
              <span class="text-xs px-2 py-1 glass rounded text-gray-400">{{ edu.period }}</span>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Education {
  protected readonly education = signal([
    {
      degree: 'Bachelor of Engineering: Mechanical Engineering',
      institution: 'Mookambigai College of Engineering (Anna University)',
      location: 'Tiruchirapalli, India',
      period: '05/2018',
    },
  ]);
}
