import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      (click)="toggle.emit()"
      class="fixed left-6 bottom-6 md:left-10 md:bottom-10 z-50 p-4 glass-dark rounded-full shadow-lg border border-border-base hover:border-brand-primary/40 text-text-muted hover:text-brand-primary transition-all duration-300 group"
      aria-label="Toggle Theme"
    >
      <span
        class="absolute left-full ml-4 px-3 py-1.5 glass rounded-lg text-xs font-bold text-text-heading opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
      >
        {{ isDark() ? 'Light Mode' : 'Dark Mode' }}
      </span>
      <div class="relative z-10 hover:scale-110 transition-transform">
        @if (isDark()) {
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        }
      </div>
    </button>
  `,
  styles: [],
})
export class ThemeToggleComponent {
  isDark = input<boolean>(false);
  toggle = output();
}
