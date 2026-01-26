import { NgOptimizedImage } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  template: `
    <section
      id="home"
      class="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 gap-12 max-w-6xl mx-auto relative"
    >
      <div class="text-center md:text-left md:w-2/3 animate-slide-up">
        <h1
          id="portfolioName"
          class="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-text-heading transition-colors duration-500"
        >
          {{ name() }}
        </h1>
        <h2 class="text-2xl md:text-3xl font-medium text-brand-primary mb-8 text-gradient">
          {{ role() }}
        </h2>
        <p class="text-text-muted text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto md:mx-0 transition-colors duration-500">
          {{ summary() }}
        </p>

        <div class="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          <a
            [href]="contact().linkedin"
            target="_blank"
            class="glass p-3 rounded-xl hover:bg-brand-primary/10 transition-all hover:-translate-y-1 group"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-slate-500 group-hover:text-brand-primary transition-colors"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            [href]="contact().github"
            target="_blank"
            class="glass p-3 rounded-xl hover:bg-brand-primary/10 transition-all hover:-translate-y-1 group"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-slate-500 group-hover:text-brand-primary transition-colors"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <a
            [href]="contact().medium"
            target="_blank"
            class="glass p-3 rounded-xl hover:bg-brand-primary/10 transition-all hover:-translate-y-1 group"
            aria-label="Medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="text-slate-500 group-hover:text-brand-primary transition-colors"
            >
              <path
                d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.82 6.82 0 0 1 0 12a6.82 6.82 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"
              />
            </svg>
          </a>

          <a
            [href]="contact().devto"
            target="_blank"
            class="glass p-3 rounded-xl hover:bg-brand-primary/10 transition-all hover:-translate-y-1 group"
            aria-label="dev.to"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 512 512"
              class="text-slate-500 group-hover:text-brand-primary transition-colors"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="512" height="512" rx="15%"></rect>
                <path
                  fill="#ffffff"
                  d="M140.47 203.94h-17.44v104.47h17.45c10.155-.545 17.358-8.669 17.47-17.41v-69.65c-.696-10.364-7.796-17.272-17.48-17.41zm45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>

      <div class="md:w-1/3 flex justify-center animate-slide-up">
        <div class="relative w-48 h-48 md:w-64 md:h-64 group">
          <div
            class="absolute -inset-4 bg-gradient-to-tr from-brand-primary/30 to-brand-secondary/30 rounded-full blur-2xl animate-pulse-slow opacity-50 group-hover:opacity-100 transition-opacity"
          ></div>

          <div
            class="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full flex items-center justify-center p-1 relative overflow-hidden ring-4 ring-brand-primary/20 shadow-2xl animate-float"
          >
            <img
              ngSrc="profile.png"
              width="184"
              height="184"
              alt="Vetriselvan Panneerselvam"
              priority
              class="rounded-full object-cover w-full h-full grayscale-0 hover:grayscale  transition-all duration-500 transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce glass p-2 rounded-full hidden md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-text-muted transition-colors duration-500"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  `,
  styles: ``,
})
export class Home {
  name = input<string>();
  role = input<string>();
  contact = input.required<{
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    medium: string;
    devto: string;
  }>();
  summary = input<string>();
}
