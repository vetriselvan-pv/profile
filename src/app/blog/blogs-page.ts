import { Component, signal, OnInit, AfterViewInit, OnDestroy, ElementRef, viewChildren } from '@angular/core';
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
  selector: 'app-blogs-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-bg-base transition-colors duration-500 py-20 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <a routerLink="/" class="inline-flex items-center gap-2 text-brand-primary font-bold mb-4 hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Back to Home
            </a>
            <h1 class="text-4xl md:text-6xl font-bold text-text-heading">
              All <span class="text-gradient">Blog Posts</span>
            </h1>
          </div>
          <div class="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full md:hidden"></div>
        </div>

        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (skeleton of [1,2,3,4,5,6]; track skeleton) {
              <div class="animate-pulse glass-dark rounded-3xl h-[450px] border border-border-base"></div>
            }
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (post of blogs(); track post.link; let i = $index) {
              <div 
                #blogCard
                class="group relative overflow-hidden rounded-3xl border border-border-base bg-bg-base transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              >
                <!-- Thumbnail -->
                <div class="relative h-56 overflow-hidden">
                  <img 
                    [src]="post.thumbnail || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000'" 
                    [alt]="post.title" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-60"></div>
                </div>

                <!-- Content -->
                <div class="p-8 flex-1 flex flex-col">
                  <p class="text-text-muted text-xs mb-3 font-medium flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="10" rx="2"/><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3Z"/><path d="M7 3v4"/><path d="M17 3v4"/><path d="M3 13h18"/></svg>
                    {{ post.pubDate | date:'longDate' }}
                  </p>
                  
                  <h3 class="text-xl font-bold mb-4 text-text-heading group-hover:text-brand-primary transition-colors line-clamp-3">
                    {{ post.title }}
                  </h3>
                  
                  <div class="flex flex-wrap gap-2 mb-6">
                    @for (cat of post.categories.slice(0, 3); track cat) {
                      <span class="text-[10px] font-bold px-2 py-0.5 border border-border-base rounded text-text-muted">
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
                      Read full article
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BlogsPage implements OnInit, AfterViewInit, OnDestroy {
  blogs = signal<MediumPost[]>([]);
  loading = signal(true);
  cardElements = viewChildren<ElementRef<HTMLDivElement>>('blogCard');

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchBlogs();
  }

  async fetchBlogs() {
    try {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vetriselvan_11'
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
        this.blogs.set(posts); // Show all available
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
    ScrollTrigger.getAll().forEach(t => {
      if (t.vars.id && t.vars.id.startsWith('blogs-page-')) {
        t.kill();
      }
    });
  }

  private animateCards() {
    this.cardElements().forEach((card, index) => {
      gsap.from(card.nativeElement, {
        scrollTrigger: {
          id: `blogs-page-${index}`,
          trigger: card.nativeElement,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: index * 0.05
      });
    });
  }
}
