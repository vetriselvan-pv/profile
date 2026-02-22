import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { VisitCounter } from '../service/visit-counter/visit-counter';

@Component({
  selector: 'app-visit-counter',
  standalone: true,
  template: `
    <section class="py-6 text-center">
      <p class="text-sm text-text-muted transition-colors duration-500">
        Website Visits:
        @if (count() !== null) {
          <span class="font-bold text-brand-primary">{{ count() }}</span>
        } @else if (hasError()) {
          <span class="font-bold text-red-400">Unavailable</span>
        } @else {
          <span class="font-bold text-text-heading">Loading...</span>
        }
      </p>
    </section>
  `,
})
export class VisitCounterComponent implements OnInit, OnDestroy {
  private readonly visitCounterService = inject(VisitCounter);
  private frameId: number | null = null;

  protected readonly count = signal<number | null>(null);
  protected readonly hasError = signal(false);

  ngOnInit(): void {
    this.visitCounterService.trackVisit().subscribe({
      next: (response) => {
        this.animateCount(response.count);
      },
      error: () => {
        this.hasError.set(true);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  private animateCount(target: number): void {
    const durationMs = 1500;
    const start = performance.now();
    const from = 0;

    this.count.set(from);

    const step = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (target - from) * eased);

      this.count.set(value);

      if (progress < 1) {
        this.frameId = requestAnimationFrame(step);
      } else {
        this.frameId = null;
      }
    };

    this.frameId = requestAnimationFrame(step);
  }
}
