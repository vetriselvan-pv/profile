import { Component, inject, input, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactForm } from '../service/contact-form/contact-form';

@Component({
  selector: 'app-contact', 
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="pb-20 px-4 animate-slide-up">
      <h3 class="text-2xl font-bold mb-12 flex items-center gap-4">
        <span class="w-8 h-1 bg-brand-primary rounded"></span>
        Get In Touch
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="space-y-8">
          <p class="text-text-muted text-lg leading-relaxed transition-colors duration-500">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-center gap-4 group">
              <div class="p-4 glass rounded-2xl group-hover:bg-brand-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest transition-colors duration-500">Email Me</p>
                <a [href]="'mailto:' + email()" class="text-text-heading hover:text-brand-primary transition-colors duration-500 text-lg">{{ email() }}</a>
              </div>
            </div>

            <div class="flex items-center gap-4 group">
              <div class="p-4 glass rounded-2xl group-hover:bg-brand-secondary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-secondary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest transition-colors duration-500">Call Me</p>
                <a [href]="'tel:' + phone()" class="text-text-heading hover:text-brand-secondary transition-colors duration-500 text-lg">{{ phone() }}</a>
              </div>
            </div>

            <div class="flex items-center gap-4 group">
              <div class="p-4 glass rounded-2xl group-hover:bg-brand-accent/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-accent"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest transition-colors duration-500">Location</p>
                <p class="text-text-heading text-lg transition-colors duration-500">{{ location() }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-dark p-8 rounded-3xl border border-border-base shadow-2xl relative overflow-hidden group transition-colors duration-500">
          <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="space-y-2">
              <label for="name" class="text-sm font-medium text-text-muted ml-1 transition-colors duration-500">Name</label>
              <input 
                id="name" 
                type="text" 
                formControlName="name"
                class="w-full bg-bg-base/50 border border-border-base rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary/50 transition-colors duration-500 text-text-heading"
                placeholder="Your Name"
              >
            </div>
            
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium text-text-muted ml-1 transition-colors duration-500">Email</label>
              <input 
                id="email" 
                type="email" 
                formControlName="email"
                class="w-full bg-bg-base/50 border border-border-base rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary/50 transition-colors duration-500 text-text-heading"
                placeholder="your@email.com"
              >
            </div>

            <div class="space-y-2">
              <label for="message" class="text-sm font-medium text-text-muted ml-1 transition-colors duration-500">Message</label>
              <textarea 
                id="message" 
                formControlName="message"
                rows="4"
                class="w-full bg-bg-base/50 border border-border-base rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary/50 transition-colors duration-500 text-text-heading"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              [disabled]="contactForm.invalid || isSubmitting()"
              class="w-full bg-linear-to-r from-brand-primary to-brand-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              @if (isSubmitting()) {
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Message
              }
            </button>

            @if (statusMessage()) {
              <p class="text-center text-sm animate-fade-in" [class.text-green-400]="isSuccess()" [class.text-red-400]="!isSuccess()">
                {{ statusMessage() }}
              </p>
            }
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Contact {
  email = input.required<string>();
  phone = input.required<string>();
  location = input.required<string>();

  contactFormService = inject(ContactForm);

  contactForm: FormGroup;
  isSubmitting = signal(false);
  statusMessage = signal('');
  isSuccess = signal(true);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.statusMessage.set('');

      this.contactFormService.postContactForm(this.contactForm.value).subscribe({
        next: (res) => {
          this.isSubmitting.set(false);
          this.isSuccess.set(true);
          this.statusMessage.set('Thank you! Your message has been sent successfully.');
          this.contactForm.reset();
        },
        error: (err) => {
          this.isSubmitting.set(false);
          this.isSuccess.set(false);
          this.statusMessage.set('Something went wrong. Please try again later.');
        }
      });
       
    }
  }
}
