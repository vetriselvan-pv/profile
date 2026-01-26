import {
  Component,
  signal,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  viewChildren,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="blogs" class="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div class="mb-12">
        <h2 class="text-4xl font-bold mb-4 animate-slide-up">
          Latest <span class="text-gradient">Blog Posts</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
        ></div>
      </div>

      @if (loading()) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (skeleton of [1, 2, 3]; track skeleton) {
            <div
              class="animate-pulse glass-dark rounded-3xl h-[450px] border border-border-base"
            ></div>
          }
        </div>
      } @else {
        <!-- Carousel/Grid Wrapper -->
        <div class="relative group max-w-full">
          <!-- Desktop Grid (md and up) / Mobile Slider (base) -->
          <div #carouselContainer class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (post of blogs(); track post.link; let i = $index) {
              <div
                #blogCard
                class="w-full shrink-0 md:w-auto group relative overflow-hidden rounded-3xl border border-border-base bg-bg-base transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-2xl flex flex-col"
                [class.opacity-40]="isMobile() && i !== currentIndex()"
                [class.scale-95]="isMobile() && i !== currentIndex()"
              >
                <!-- Thumbnail -->
                <div class="relative h-56 overflow-hidden">
                  <img
                    [src]="
                      post.thumbnail ||
                      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000'
                    "
                    [alt]="post.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-60"
                  ></div>
                  <div class="absolute bottom-4 left-6 z-10">
                    <span
                      class="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-brand-primary text-white rounded"
                    >
                      Medium
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-8 flex-1 flex flex-col">
                  <p class="text-text-muted text-xs mb-3 font-medium flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="10" rx="2" />
                      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3Z" />
                      <path d="M7 3v4" />
                      <path d="M17 3v4" />
                      <path d="M3 13h18" />
                    </svg>
                    {{ post.pubDate | date: 'longDate' }}
                  </p>

                  <h3
                    class="text-xl font-bold mb-4 text-text-heading group-hover:text-brand-primary transition-colors line-clamp-2"
                  >
                    {{ post.title }}
                  </h3>

                  <div class="flex flex-wrap gap-2 mb-6">
                    @for (cat of post.categories.slice(0, 3); track cat) {
                      <span
                        class="text-[10px] font-bold px-2 py-0.5 border border-border-base rounded text-text-muted"
                      >
                        #{{ cat }}
                      </span>
                    }
                  </div>

                  <div class="mt-auto">
                    <a
                      [href]="post.link"
                      target="_blank"
                      class="inline-flex items-center gap-2 text-sm font-bold text-text-heading hover:text-brand-secondary transition-colors group/btn"
                    >
                      Read on Medium
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="group-hover/btn:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Mobile Controls -->
          @if (isMobile() && blogs().length > 1) {
            <div class="flex items-center justify-between mt-8 relative z-20">
              <div class="flex gap-8 items-center justify-center">
                <button
                  (click)="prev()"
                  class="p-4 glass rounded-full text-text-muted hover:text-brand-primary active:scale-95 transition-all shadow-lg"
                  aria-label="Previous post"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <div class="flex gap-2 px-4">
                  @for (post of blogs(); track post.link; let i = $index) {
                    <button
                      (click)="goTo(i)"
                      class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                      [class.bg-brand-primary]="currentIndex() === i"
                      [class.w-6]="currentIndex() === i"
                      [class.bg-text-muted]="currentIndex() !== i"
                      [class.opacity-30]="currentIndex() !== i"
                      [attr.aria-label]="'Go to post ' + (i + 1)"
                    ></button>
                  }
                </div>
                <button
                  (click)="next()"
                  class="p-4 glass rounded-full text-text-muted hover:text-brand-primary active:scale-95 transition-all shadow-lg"
                  aria-label="Next post"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              <!-- Pagination Indicators -->
            </div>
          }
        </div>

        <div class="mt-16 text-center">
          <a
            routerLink="/blogs"
            class="inline-flex items-center gap-3 px-8 py-4 glass-dark rounded-2xl font-bold text-text-heading hover:bg-brand-primary/10 transition-all hover:-translate-y-1 group/all"
          >
            View All Posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="group-hover/all:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      }
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
export class Blog implements OnInit, AfterViewInit, OnDestroy {
  blogs = signal<MediumPost[]>([]);
  loading = signal(true);
  currentIndex = signal(0);
  isMobile = signal(false);

  cardElements = viewChildren<ElementRef<HTMLDivElement>>('blogCard');
  carouselContainer = viewChild<ElementRef<HTMLDivElement>>('carouselContainer');

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
    this.fetchBlogs();
  }

  private checkScreenSize() {
    this.isMobile.set(window.innerWidth < 768);
    if (!this.isMobile()) {
      this.currentIndex.set(0);
      this.resetCarouselPosition();
    }
  }

  async fetchBlogs() {
    try {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vetriselvan_11',
      );
      const data = await response.json();
      if (data.status === 'ok') {
        const posts = data.items.map((item: any) => {
          if (!item.thumbnail) {
            const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
            item.thumbnail = imgMatch ? imgMatch[1] : '';
          }
          return item;
        });
        this.blogs.set(posts.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      this.loading.set(false);
      setTimeout(() => this.animateCards(), 100);
    }
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars.id && t.vars.id.startsWith('blog-')) {
        t.kill();
      }
    });
    window.removeEventListener('resize', () => this.checkScreenSize());
  }

  goTo(index: number) {
    this.currentIndex.set(index);
    this.updateCarousel();
  }

  next() {
    if (this.blogs().length === 0) return;
    this.currentIndex.update((v) => (v + 1) % this.blogs().length);
    this.updateCarousel();
  }

  prev() {
    if (this.blogs().length === 0) return;
    this.currentIndex.update((v) => (v - 1 + this.blogs().length) % this.blogs().length);
    this.updateCarousel();
  }

  private updateCarousel() {
    const container = this.carouselContainer();
    if (container && this.isMobile()) {
      // Use xPercent for smoother full-width shifts and x for gap compensations
      gsap.to(container.nativeElement, {
        xPercent: -this.currentIndex() * 100,
        x: -this.currentIndex() * 32, // gap-8 is 32px
        duration: 0.6,
        ease: 'power3.inOut',
        overwrite: true,
      });
    }
  }

  private resetCarouselPosition() {
    const container = this.carouselContainer();
    if (container) {
      gsap.set(container.nativeElement, { x: 0 });
    }
  }

  private animateCards() {
    if (this.isMobile()) return; // Skip staggered entry animation on mobile carousel for now to avoid conflicts

    this.cardElements().forEach((card, index) => {
      gsap.from(card.nativeElement, {
        scrollTrigger: {
          id: `blog-${index}`,
          trigger: card.nativeElement,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: index * 0.1,
      });
    });
  }
}

// Need to implement
/* private blogList = inject(BlogList);
    blogsList = rxResource({
    stream : () => {
      return this.blogList.getBlogList().pipe(map((res) => {
        const posts = res.map((item: any) => {
          if (!item.thumbnail) {
            const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
            item.thumbnail = imgMatch ? imgMatch[1] : '';
          }
          return item;
        });
      }))
    }
  })

  */
