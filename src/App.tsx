import React, { useEffect, useState } from "react";

const photos = [
  {
    id: 1,
    location: "SERENGETI, TANZANIA",
    title: "Golden Hour Vigil",
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Lion resting in the Serengeti at golden hour",
  },
  {
    id: 2,
    location: "KATMAI, ALASKA",
    title: "The River Guardian",
    url: "https://images.unsplash.com/photo-1560088851-92b453e9a7e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Brown bear walking in a river in Katmai, Alaska",
  },
  {
    id: 3,
    location: "ETOSHA, NAMIBIA",
    title: "Dust & Silence",
    url: "https://images.unsplash.com/photo-1555541893-6b325254be37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Herd of elephants walking across a dry plain",
  },
  {
    id: 4,
    location: "PAPUA NEW GUINEA",
    title: "Iridescent Display",
    url: "https://images.unsplash.com/photo-1549480017-d76466a4b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Colorful bird perched on a branch",
  },
  {
    id: 5,
    location: "GREAT BARRIER REEF",
    title: "Ancient Mariner",
    url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Sea turtle swimming underwater",
  },
];

export default function App(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Intersection Observer to trigger fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col overflow-x-hidden w-full">
      {/* Navigation - Sticky & Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
        <div className="flex justify-between items-center w-full">
          <div className="text-sm sm:text-base md:headline-sm uppercase tracking-widest text-primary hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap">
            Wildlife Portfolio
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-on-surface-variant body-md">
            <a href="#about" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">About</a>
            <a href="#gallery" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">Gallery</a>
            <a href="#testimonials" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">Contact</a>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4 text-on-surface-variant body-md border-t border-outline-variant/30 mt-4 animate-fade-in-up">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block py-2">About</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block py-2">Gallery</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block py-2">Testimonials</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors block py-2">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section - Stunning Full Bleed Image with Parallax feel */}
      <section className="relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Stunning wildlife landscape"
            className="w-full h-full object-cover animate-fade-in-up" 
            style={{ animationDuration: '2s' }}
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 mt-16 md:mt-20 animate-fade-in-up opacity-0 reveal">
          <h1 className="text-3xl sm:text-4xl md:text-[80px] font-serif font-normal leading-[1.1] text-surface mb-4 md:mb-6 tracking-tight drop-shadow-lg">
            Witness the Untamed Silence
          </h1>
          <p className="text-sm sm:text-base md:body-lg italic text-surface-container max-w-2xl mx-auto drop-shadow-md px-4">
            Curated moments from the world's most remote ecosystems.
          </p>
        </div>
      </section>

      {/* Gallery Grid - Modern Hover Overlay */}
      <main id="gallery" className="px-6 md:px-16 py-16 md:py-32 flex flex-col items-center bg-surface-bright reveal opacity-0">
        <div className="w-full max-w-[1440px] flex justify-between items-end mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary">The Archive</h2>
          <span className="hidden md:block label-caps text-outline">Selected Works 2014—2024</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1440px]">
          {photos.slice(0, 3).map((photo, i) => (
            <div key={photo.id} className={`flex flex-col group cursor-pointer reveal opacity-0 stagger-${i+1}`}>
              <div className="relative overflow-hidden bg-surface-container aspect-[3/4] md:aspect-[3/4] hover-overlay">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col">
                  <p className="label-caps text-surface/80 md:text-surface/80 mb-2">{photo.location}</p>
                  <h3 className="headline-sm italic text-surface drop-shadow-md md:drop-shadow-none">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
          
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-2 md:mt-4 reveal opacity-0">
             {photos.slice(3, 5).map((photo) => (
              <div key={photo.id} className="flex flex-col group cursor-pointer">
                <div className="relative overflow-hidden bg-surface-container aspect-[4/3] md:aspect-[16/9] hover-overlay">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10 translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col">
                    <p className="label-caps text-surface/80 mb-2">{photo.location}</p>
                    <h3 className="headline-md italic text-surface drop-shadow-md md:drop-shadow-none">{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-24 mb-10 reveal opacity-0">
          <button className="bg-primary text-on-primary label-caps px-10 py-5 hover:bg-on-surface transition-colors border-none rounded-none tracking-widest relative overflow-hidden group w-full md:w-auto">
            <span className="relative z-10">View Full Archive</span>
          </button>
        </div>
      </main>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-surface py-16 md:py-32 px-6 md:px-16 flex flex-col items-center reveal opacity-0">
        <div className="max-w-3xl text-center mb-12 md:mb-24">
          <p className="label-caps text-outline mb-4 md:mb-6">Client Experiences</p>
          <h2 className="text-2xl md:headline-md text-primary leading-tight">
            Reflections from editors, gallery owners, and private collectors on the profound impact of these visual narratives.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1440px]">
          {[
            {
              quote: "The sheer intimacy captured in these images is unparalleled. It's rare to find a photographer who can so consistently frame the raw emotion of the natural world while maintaining such strict editorial standards.",
              name: "SARAH JENKINS",
              role: "Senior Photo Editor, Nature Quarterly"
            },
            {
              quote: "Hosting this collection was a milestone for our gallery. The large-format prints command the space, drawing viewers into a silent, reverent contemplation of species we so rarely see up close.",
              name: "MARCUS THORNE",
              role: "Director, Thorne Fine Arts Gallery"
            },
            {
              quote: "Acquiring the 'Silverback' series for my private collection was an easy decision. The tonal range and compositional mastery elevate wildlife photography into profound fine art.",
              name: "ELENA ROSTOVA",
              role: "Private Collector"
            }
          ].map((testimonial, i) => (
            <div key={i} className={`bg-surface-container-low p-8 md:p-14 flex flex-col h-full border-none rounded-none group hover:bg-surface-container transition-colors duration-500 reveal opacity-0 stagger-${i+1}`}>
              <span className="headline-sm font-bold text-primary mb-6 md:mb-8 opacity-50 group-hover:opacity-100 transition-opacity">”</span>
              <p className="body-md italic text-on-surface mb-10 md:mb-12 flex-grow leading-loose">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-outline-variant/30 pt-6">
                <p className="label-caps text-primary">{testimonial.name}</p>
                <p className="text-[10px] md:text-[11px] text-outline mt-2 tracking-widest uppercase">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full flex flex-col md:flex-row bg-background reveal opacity-0">
        <div className="w-full md:w-5/12 flex flex-col">
          <div className="w-full h-[50vh] md:h-auto md:flex-1 relative bg-surface-container overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Photographer behind the lens in a forest" 
              className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
          <div className="bg-surface-container py-6 px-6 md:px-12">
            <p className="label-caps text-on-surface-variant mb-2">BEHIND THE LENS</p>
            <p className="body-md italic text-primary">Waiting for the perfect light, Great Bear Rainforest, 2023.</p>
          </div>
        </div>

        <div className="w-full md:w-7/12 py-12 px-6 md:py-32 md:px-24 flex flex-col justify-center">
          <h2 className="text-3xl md:display-lg text-primary mb-8 md:mb-12">
            Chasing shadows & light<br className="hidden md:block"/> in the wild.
          </h2>
          <div className="flex flex-col gap-6 text-base md:body-lg text-on-surface-variant mb-12 md:mb-16 leading-relaxed font-light">
            <p>
              For over a decade, my lens has been a window into the untouched corners of our planet. I am driven by a singular, profound respect for the natural world and a desire to document the fleeting, often unseen moments of animal behavior that tell a larger story of ecological balance.
            </p>
            <p>
              My journey began not in the grand savannas, but in the quiet, overlooked woodlands of my childhood. That early fascination with the intricate details of nature has evolved into a lifelong commitment to showcasing the raw beauty and fragile reality of wildlife across all continents.
            </p>
          </div>

          <div className="bg-surface-container-low p-8 md:p-14 relative overflow-hidden group hover:bg-surface-container transition-colors duration-500">
            <span className="absolute top-2 left-4 md:top-8 md:left-8 font-serif text-[80px] md:text-[120px] text-primary/5 transition-transform duration-700 group-hover:scale-110 leading-none">99</span>
            <div className="relative z-10 pt-12 md:pt-12">
              <h3 className="headline-sm text-primary mb-6">Conservation Mission</h3>
              <p className="body-md text-on-surface-variant leading-relaxed">
                Photography is inherently an act of observation, but it must also be a catalyst for action. My mission is to bridge the gap between human empathy and environmental reality. By collaborating closely with conservation foundations and highlighting endangered ecosystems, I strive to ensure that the beauty we capture today remains for the generations of tomorrow. Every print sold directly supports habitat restoration initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-on-primary py-16 md:py-32 px-6 md:px-16 flex justify-center reveal opacity-0">
        <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col">
            <p className="label-caps text-on-primary-container mb-4 md:mb-6">Get in Touch</p>
            <h2 className="text-3xl md:display-lg text-surface mb-6 md:mb-8">Let's create something timeless.</h2>
            <p className="body-md text-surface-container mb-12 md:mb-16 max-w-md font-light leading-relaxed">
              For print inquiries, gallery exhibitions, editorial assignments, or to request a private viewing of the portfolio, please reach out via the form or contact details below.
            </p>
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="p-3 border border-surface-container/20 rounded-full group-hover:bg-surface-container/10 transition-colors shrink-0">
                  <svg className="w-5 h-5 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="label-caps text-surface-container mb-2">Email</p>
                  <p className="body-lg text-surface break-all md:break-normal">inquiries@wildlifeportfolio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="p-3 border border-surface-container/20 rounded-full group-hover:bg-surface-container/10 transition-colors shrink-0">
                  <svg className="w-5 h-5 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="label-caps text-surface-container mb-2">Studio</p>
                  <p className="body-md text-surface font-light leading-relaxed break-words">1450 Nature's Way<br/>Seattle, WA 98101<br/><span className="italic text-surface-container/70">(By Appointment Only)</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-container/30 p-8 md:p-14 border border-surface-container/10">
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="border-b border-surface-container/30 pb-3 focus-within:border-surface transition-colors">
                  <input type="text" placeholder="Name" className="w-full bg-transparent outline-none body-md text-surface placeholder-surface-container/50 border-none rounded-none" />
                </div>
                <div className="border-b border-surface-container/30 pb-3 focus-within:border-surface transition-colors">
                  <input type="email" placeholder="Email" className="w-full bg-transparent outline-none body-md text-surface placeholder-surface-container/50 border-none rounded-none" />
                </div>
              </div>
              <div className="border-b border-surface-container/30 pb-3 mt-2 md:mt-4 focus-within:border-surface transition-colors">
                <input type="text" placeholder="Subject" className="w-full bg-transparent outline-none body-md text-surface placeholder-surface-container/50 border-none rounded-none" />
              </div>
              <div className="border-b border-surface-container/30 pb-3 mt-2 md:mt-4 focus-within:border-surface transition-colors">
                <textarea placeholder="Message" rows={4} className="w-full bg-transparent outline-none body-md text-surface placeholder-surface-container/50 resize-none border-none rounded-none"></textarea>
              </div>
              <div className="mt-6 md:mt-8 text-left md:text-right">
                <button type="submit" className="w-full md:w-auto justify-center bg-surface text-primary label-caps px-12 py-5 hover:bg-surface-container transition-colors border-none rounded-none tracking-widest inline-flex items-center gap-4 group">
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background px-6 md:px-16 py-10 md:py-12 flex flex-col md:flex-row justify-between items-center text-on-surface-variant gap-8 border-none rounded-none border-t border-outline-variant/20">
        <div className="headline-sm uppercase tracking-widest text-primary text-center md:text-left">
          Wildlife Portfolio
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 label-caps">
          <a href="#" className="hover:text-primary hover:-translate-y-0.5 transition-all">Instagram</a>
          <a href="#" className="hover:text-primary hover:-translate-y-0.5 transition-all">Twitter</a>
          <a href="#" className="hover:text-primary hover:-translate-y-0.5 transition-all">Behance</a>
          <a href="#" className="hover:text-primary hover:-translate-y-0.5 transition-all">Email</a>
        </div>
        <div className="label-caps font-light text-outline text-center md:text-right">
          &copy; 2024 Wildlife Photography Portfolio.
        </div>
      </footer>
    </div>
  );
}
