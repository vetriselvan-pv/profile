import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { FloatingMenu } from './menu/floating-menu';
import { ThemeToggleComponent } from './menu/theme-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloatingMenu, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly isDark = signal(false);

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.isDark.set(initialDark);
    this.applyTheme(initialDark);
  }

  toggleTheme() {
    const nextDark = !this.isDark();
    this.isDark.set(nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    this.applyTheme(nextDark);
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  ngAfterViewInit(): void {
    // ScrollSmoother or other global setup if needed
  }
}
