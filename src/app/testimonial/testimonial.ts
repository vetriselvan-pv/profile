import { Component, signal, AfterViewInit, OnDestroy, ElementRef, viewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div class="mb-12">
        <h2 class="text-4xl font-bold mb-4 animate-slide-up">
          What <span class="text-gradient">Colleague Says</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
      </div>

      <div class="relative group max-w-4xl mx-auto">
        <!-- Carousel Container -->
        <div class="relative overflow-hidden py-10" (mouseenter)="pauseAutoPlay()" (mouseleave)="startAutoPlay()">
          <div #carouselContainer class="flex transition-transform duration-500 ease-out">
            @for (item of testimonials(); track item.name; let i = $index) {
              <div 
                class="w-full flex-shrink-0 px-4 transition-opacity duration-300"
                [class.opacity-40]="i !== currentIndex()"
                [class.scale-95]="i !== currentIndex()"
              >
                <div class="glass-dark p-8 md:p-12 rounded-3xl border border-border-base relative">
                  <!-- Quote Icon -->
                  <div class="absolute -top-6 left-12 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V12C21.017 16.9706 17.017 21 12.017 21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C5.91243 8 5.017 7.10457 5.017 6V3H12.017V12C12.017 16.9706 8.017 21 3.017 21H5.017Z"/></svg>
                  </div>

                  <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-brand-primary/20 flex-shrink-0 shadow-2xl">
                      <img
                        [src]="item.image"
                        [alt]="item.name"
                        (error)="onImageError($event)"
                        class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    
                    <div class="flex-1 text-center md:text-left">
                      <p class="text-text-base text-xl md:text-2xl h-[240px] overflow-y-scroll leading-relaxed italic mb-8 transition-colors duration-500">
                        "{{ item.content }}"
                      </p>
                      
                      <div>
                        <h3 class="text-2xl font-bold text-text-heading transition-colors duration-500">{{ item.name }}</h3>
                        <p class="text-brand-primary font-medium mb-4">{{ item.role }}</p>
                        
                        <div class="flex justify-center md:justify-start gap-1 text-yellow-500">
                          @for (star of [1,2,3,4,5]; track star) {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-.181.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Controls -->
        <button 
          (click)="prev()" 
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 p-3 glass rounded-full hover:bg-brand-primary/10 text-text-muted hover:text-brand-primary transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        
        <button 
          (click)="next()" 
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 p-3 glass rounded-full hover:bg-brand-primary/10 text-text-muted hover:text-brand-primary transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <!-- Pagination Indicators -->
        <div class="flex justify-center gap-3 mt-8">
          @for (item of testimonials(); track item.name; let i = $index) {
            <button 
              (click)="goTo(i)"
              class="w-3 h-3 rounded-full transition-all duration-500"
              [class.bg-brand-primary]="currentIndex() === i"
              [class.w-8]="currentIndex() === i"
              [class.bg-text-muted]="currentIndex() !== i"
              [class.opacity-30]="currentIndex() !== i"
              [attr.aria-label]="'Go to testimonial ' + (i + 1)"
            ></button>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class Testimonial implements  AfterViewInit, OnDestroy {
  private readonly fallbackAvatar = './empty-avatar.svg';
  protected readonly testimonials = signal([
    {
      name: 'Manash Chakraborty',
      role: 'Engineering Manager  @ Intellect Design Arena',
      content: `Vetriselvan is one of the best UI developer and designer that I have come across. His ability to grasp architectural design and implementation of the same is impeccable.He understands client needs and comes up with multiple approaches for the same problem statement and enabled the best suitable one.

His skillset and team management ability has taken him to his current role earning him praises and accolades from every stakeholder! I wish him all the success in career and life.`,
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQHrz1j0gnfGfQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720720058469?e=1770854400&v=beta&t=WngSoqFyEyj0ycDuzovJkaKA5A97ngkFmn6JGGTevSc',
    },
    {
      name: 'Abdul Hameed',
      role: 'Senior Project Lead @ Intellect Design Arena',
      content: `I have known Vetri Selvan for the past three years, and he is an exceptionally talented and technically strong professional. He has deep core knowledge of Angular and product development, and his understanding goes well beyond implementation—he truly thinks from a scalable, long-term product perspective.
Vetri has been instrumental in designing and developing custom libraries, which significantly improved reusability and consistency across projects. Along with his technical expertise, he has effectively led development teams, managed internal teams, and successfully handled client-facing maintenance and delivery responsibilities.
What really sets him apart is his ability to combine hands-on technical depth with strong leadership. He guides teams, solves complex problems, and ensures high-quality delivery while maintaining clarity in communication with stakeholders.
I highly recommend Vetri Selvan to any organization looking for a strong Angular expert, technical leader, and product-focused engineer. He would be a valuable asset to any team.`,
      image:
        'https://media.licdn.com/dms/image/v2/D5635AQHV-egbuQe10w/profile-framedphoto-shrink_100_100/B56ZpFzoldKEAk-/0/1762107755080?e=1770008400&v=beta&t=wGPA08k_y9DsQtOG5-atuUG6OseJcrOaF5txb_WP9D0',
    },
    {
      name: 'Sivashankar S',
      role: 'Full stack Software Developer @ Intellect Design Arena Ltd',
      content: `First of all I am greatful for having such a wonderful Leader. He is such a passionate,hardworking and at the same time show calm and kind personality. He  inspired the co-worker in a lot of way especially his character the outstanding one. 
        He is such a promising dedicated hardworker and passionate person who wants to achieve his dreams and helps other to do so. His technical expertise matches the top 1% of the software developers who are actually solving real wold complex problems that are helping million of lifes.I am grateful and I'm solemnly happy to have such a wonderful brother in my life. He is deeply dedicated to achieving excellence and is equally committed to helping his colleagues reach their own goals. His promising talent and drive make him an asset to any organization, and I highly recommend him as both a visionary leader and a dedicated teammate`,
      image:
        'https://media.licdn.com/dms/image/v2/D5635AQG0LpNIuZn4fg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1733760393803?e=1770008400&v=beta&t=WAEUXzXIOkQcJnIU21FL8zP3B-UglsjS5P_anjGdtVY',
    },
    {
      name: 'G Anirudh',
      role: 'Software Engineer @ JP Morgan',
      content: `I have worked with Vetriselvan for only a few months, but his understanding and depth in designing web applications are unbelievable. The most impressive part is that he graduated with a non-technical degree, yet his passion for technology has made him a true veteran :)

Keep learning, keep growing, keep inspiring, and keep shining—always the way you do!`,
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQG7XNByZr7vEg/profile-displayphoto-scale_100_100/B4DZlJwtojH4Ag-/0/1757879132663?e=1770854400&v=beta&t=65M5nVxVlyh1R2XcBIy3xK9HbGqkEktG__Lfu42xZSU',
    },
    {
      name: 'ADAIKKALAPITCHAI A',
      role: 'Consultant @ Intellect Design Arena',
      content: ` had the pleasure of working with Vetriselvan during our senior project, where he served as the Project Lead and played a key role in driving the team’s success. He demonstrated strong technical expertise in Angular, taking ownership of frontend architecture, component design, and API integration while ensuring clean and scalable code. Beyond their technical skills, vetriselvan showed excellent leadership by coordinating tasks, mentoring team members, and maintaining clear communication throughout the project. His ability to balance hands-on development with effective team management made a significant impact on our project’s quality and timely completion. I highly recommend vetriselvan for opportunities involving Angular development and technical leadership.`,
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQHdoEyOdKYwsw/profile-displayphoto-shrink_100_100/B56ZS7YwiFGoAU-/0/1738310618713?e=1770854400&v=beta&t=Yo9R-OUcS6Jt0Q3J5XWtM7HlfUxZubuTpCWF-p5_kYw',
    },
    {
      name: 'Mohammad Ibrahim Ayoob',
      role: 'Product Engineer @ Intellect Design Arena Ltd',
      content: `
        I’ve had the privilege of working with Vetriselvan Bro, and he is an excellent technical lead with strong expertise in Angular development. He is highly innovative and consistently focuses on building clean, scalable, and efficient solutions.
What truly sets him apart is his continuous learning mindset. He is always exploring new technologies and advanced concepts, and actively tries to implement them in real projects to improve performance, maintainability, and overall quality.
As a leader, he is supportive, approachable, and encourages best practices across the team. His technical guidance and forward-thinking approach make him a great asset to any organization.`,
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQGRegyQfl9_Qw/profile-displayphoto-scale_100_100/B56ZrPKDJ9H8A4-/0/1764412111174?e=1770854400&v=beta&t=6OB-m3btbZXU2WU96LPVZr9GQVH9mJ20k4VQI0wY_-I',
    },
    {
      name: 'Mohamed Wasim Akram A',
      role: 'Software Engineer @ Intellect Design Arena',
      content: `I worked closely with him on an internal low-code studio used to build APIs and UI through drag-and-drop, which multiple projects across the company depend on.
He owns this product end-to-end and understands what actually happens behind the scenes when components are configured—something only he can reliably debug and fix.
As an Angular developer, he combines deep framework knowledge with strong product ownership, making him critical to the stability of several dependent teams.`,
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQHGfwTdepxIcg/profile-displayphoto-scale_100_100/B56ZgPQ2omHUAo-/0/1752602734971?e=1770854400&v=beta&t=IDQydKkuAJgxIVpkAFYqxuiAtWAZ4tEECGdlJ-XcWSU',
    },
  ]);

  currentIndex = signal(0);
  carouselContainer = viewChild<ElementRef<HTMLDivElement>>('carouselContainer');
  private autoPlayInterval: any;

  ngAfterViewInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.pauseAutoPlay();
  }

  next() {
    this.currentIndex.update(v => (v + 1) % this.testimonials().length);
    this.updateCarousel();
  }

  prev() {
    this.currentIndex.update(v => (v - 1 + this.testimonials().length) % this.testimonials().length);
    this.updateCarousel();
  }

  goTo(index: number) {
    this.currentIndex.set(index);
    this.updateCarousel();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), 6000);
  }

  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private updateCarousel() {
    const container = this.carouselContainer();
    if (container) {
      gsap.to(container.nativeElement, {
        x: `-${this.currentIndex() * 100}%`,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && !img.src.endsWith('/empty-avatar.svg')) {
      img.src = this.fallbackAvatar;
    }
  }
}
