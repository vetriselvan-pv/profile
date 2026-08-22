import React from "react";

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
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-8">
        <div className="headline-sm uppercase tracking-widest text-primary">
          Wildlife Portfolio
        </div>
        <div className="hidden md:flex gap-8 text-on-surface-variant body-md">
          <a href="#" className="border-b border-primary pb-1 text-primary">Gallery</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* About Section */}
      <section className="w-full flex flex-col md:flex-row bg-background">
        {/* Left Image Side */}
        <div className="w-full md:w-5/12 flex flex-col">
          <div className="w-full h-[60vh] md:h-auto md:flex-1 relative bg-surface-container">
            <img 
              src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Photographer behind the lens in a forest" 
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="bg-surface-container py-4 px-6 md:px-8">
            <p className="label-caps text-on-surface-variant mb-1">BEHIND THE LENS</p>
            <p className="body-md italic text-primary">Waiting for the perfect light, Great Bear Rainforest, 2023.</p>
          </div>
        </div>

        {/* Right Content Side */}
        <div className="w-full md:w-7/12 py-16 px-6 md:py-24 md:px-24 flex flex-col justify-center">
          <h2 className="display-lg-mobile md:display-lg text-primary mb-12">
            Chasing shadows & light<br className="hidden md:block"/> in the wild.
          </h2>
          <div className="flex flex-col gap-6 body-md text-on-surface mb-16">
            <p>
              For over a decade, my lens has been a window into the untouched corners of our planet. I am driven by a singular, profound respect for the natural world and a desire to document the fleeting, often unseen moments of animal behavior that tell a larger story of ecological balance.
            </p>
            <p>
              My journey began not in the grand savannas, but in the quiet, overlooked woodlands of my childhood. That early fascination with the intricate details of nature has evolved into a lifelong commitment to showcasing the raw beauty and fragile reality of wildlife across all continents.
            </p>
            <p>
              Through a minimalist, editorial approach, I aim to strip away distractions, allowing the subject to command the frame. The resulting images are not just photographs; they are testaments to survival, grace, and the urgent need for preservation.
            </p>
          </div>

          {/* Conservation Mission */}
          <div className="bg-surface-container-low p-8 md:p-12 relative overflow-hidden">
            <span className="absolute top-4 left-6 md:top-8 md:left-8 font-serif text-[100px] text-surface-container-highest opacity-50 leading-none">99</span>
            <div className="relative z-10 pt-16 md:pt-12">
              <h3 className="headline-md text-primary mb-4">Conservation Mission</h3>
              <p className="body-md text-on-surface-variant">
                Photography is inherently an act of observation, but it must also be a catalyst for action. My mission is to bridge the gap between human empathy and environmental reality. By collaborating closely with conservation foundations and highlighting endangered ecosystems, I strive to ensure that the beauty we capture today remains for the generations of tomorrow. Every print sold directly supports habitat restoration initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-surface-variant flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <h1 className="display-lg-mobile md:display-lg text-primary mb-4">
            Witness the Untamed Silence
          </h1>
          <p className="body-lg italic text-on-surface-variant">
            Curated moments from the world's most remote ecosystems.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="px-6 md:px-16 py-section flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full max-w-[1440px]">
          {/* Row 1: 3 columns */}
          {photos.slice(0, 3).map((photo) => (
            <div key={photo.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden mb-4 bg-surface-container aspect-[3/2] border border-transparent">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
              <p className="label-caps text-on-surface-variant mb-1">
                {photo.location}
              </p>
              <h3 className="body-md italic text-primary group-hover:text-on-surface transition-colors">
                {photo.title}
              </h3>
            </div>
          ))}
          
          {/* Row 2: 2 columns, centered or spanning */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-gutter mt-4">
             {photos.slice(3, 5).map((photo) => (
              <div key={photo.id} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden mb-4 bg-surface-container aspect-[16/9] border border-transparent">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                </div>
                <p className="label-caps text-on-surface-variant mb-1">
                  {photo.location}
                </p>
                <h3 className="body-md italic text-primary group-hover:text-on-surface transition-colors">
                  {photo.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-section mb-10">
          <button className="bg-primary text-on-primary label-caps px-8 py-4 hover:bg-primary-container transition-colors border-none rounded-none">
            View Full Archive
          </button>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="bg-surface py-section px-6 md:px-16 flex flex-col items-center">
        <div className="max-w-4xl text-center mb-16">
          <h2 className="headline-md text-primary mb-6">Client Experiences</h2>
          <p className="text-on-surface-variant body-md">
            Reflections from editors, gallery owners, and private collectors on the profound<br className="hidden md:block"/> impact of these wildlife visual narratives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full max-w-[1440px]">
          {[
            {
              quote: "The sheer intimacy captured in these images is unparalleled. It's rare to find a photographer who can so consistently frame the raw emotion of the natural world while maintaining such strict editorial standards.",
              name: "SARAH JENKINS",
              role: "Senior Photo Editor, Nature Quarterly"
            },
            {
              quote: "Hosting this collection was a milestone for our gallery. The large-format prints command the space, drawing viewers into a silent, reverent contemplation of species we so rarely see up close.",
              name: "MARCUS Thorne",
              role: "Director, Thorne Fine Arts Gallery"
            },
            {
              quote: "Acquiring the 'Silverback' series for my private collection was an easy decision. The tonal range and compositional mastery elevate wildlife photography into profound fine art.",
              name: "ELENA ROSTOVA",
              role: "Private Collector"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-surface-container-low p-8 md:p-10 flex flex-col h-full border-none rounded-none">
              <span className="headline-sm font-bold text-primary mb-6">”</span>
              <p className="body-md italic text-on-surface mb-12 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="label-caps text-primary">{testimonial.name}</p>
                <p className="label-caps text-outline mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface-container py-section px-6 md:px-16 flex justify-center">
        <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-gutter">
          <div className="flex flex-col">
            <h2 className="headline-md text-primary mb-8">Get in Touch</h2>
            <p className="text-on-surface-variant body-md mb-12 max-w-md">
              For print inquiries, gallery exhibitions, editorial assignments, or to request a private viewing of the portfolio, please reach out via the form or contact details below.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <p className="label-caps text-primary mb-1">Email</p>
                  <p className="body-md text-on-surface-variant">inquiries@wildlifeportfolio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <p className="label-caps text-primary mb-1">Studio</p>
                  <p className="body-md text-on-surface-variant">1450 Nature's Way<br/>Seattle, WA 98101<br/>(By Appointment Only)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-8 md:p-12 border-none rounded-none">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-outline-variant pb-2">
                  <input type="text" placeholder="Name" className="w-full bg-transparent outline-none body-md placeholder-outline border-none rounded-none" />
                </div>
                <div className="border-b border-outline-variant pb-2">
                  <input type="email" placeholder="Email" className="w-full bg-transparent outline-none body-md placeholder-outline border-none rounded-none" />
                </div>
              </div>
              <div className="border-b border-outline-variant pb-2 mt-4">
                <input type="text" placeholder="Subject (e.g. Print Inquiry, Exhibition)" className="w-full bg-transparent outline-none body-md placeholder-outline border-none rounded-none" />
              </div>
              <div className="border-b border-outline-variant pb-2 mt-4">
                <textarea placeholder="Message" rows={3} className="w-full bg-transparent outline-none body-md placeholder-outline resize-none border-none rounded-none"></textarea>
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-primary text-on-primary label-caps px-8 py-4 hover:bg-primary-container transition-colors border-none rounded-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center text-on-surface-variant gap-6 border-none rounded-none">
        <div className="headline-sm uppercase tracking-widest text-primary">
          Wildlife Portfolio
        </div>
        <div className="flex gap-6 label-caps">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Behance</a>
          <a href="#" className="hover:text-primary transition-colors">Email</a>
        </div>
        <div className="label-caps font-light text-outline">
          &copy; 2024 Wildlife Photography Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
