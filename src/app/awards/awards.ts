import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-awards',
  imports: [],
  template: `
   <section id="awards" class="animate-slide-up pb-20" style="animation-delay: 0.6s">
              <h3 class="text-2xl font-bold mb-12 flex items-center gap-4">
                <span class="w-8 h-1 bg-brand-accent rounded"></span>
                Awards
              </h3>
              <div class="space-y-8">
                @for (award of awards(); track award.title) {
                <div class="glass-dark p-6 rounded-2xl border-l-2 border-brand-accent">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="font-bold text-white">{{ award.title }}</h4>
                    <span class="text-xs text-brand-accent font-bold">{{ award.year }}</span>
                  </div>
                  <p class="text-sm text-gray-400">{{ award.organization }}</p>
                  <p class="text-sm text-gray-500 mt-2 italic">{{ award.description }}</p>
                </div>
                }
              </div>
            </section>
  `,
  styles: ``,
})
export class Awards {
  protected readonly awards = signal([
    {
      title: 'Sergey Bubka Award - Best Product Engineer',
      year: '2023',
      organization: 'Intellect Design Arena',
      description: 'Recognized for independently developing an Angular library.',
    },
    {
      title: 'Spotlight Award',
      year: '2022',
      organization: 'Intellect Design Arena',
      description:
        'Awarded for end-to-end ownership and delivery of a hybrid mobile and web application.',
    },
    {
      title: 'Ace Developer Award',
      year: '2021',
      organization: 'Newage Software and Solutions Pvt. Ltd.',
      description:
        'Honored for independently designing and delivering a hybrid mobile application.',
    },
    {
      title: 'Rockstar Rookie Award',
      year: '2020',
      organization: 'Newage Software and Solutions Pvt. Ltd.',
      description:
        'Recognized for exceeding expectations while rapidly mastering a new technology stack.',
    },
  ]);
}
