import React from "react";

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
      {/* Header & Context */}
      <div className="col-span-1 lg:col-span-12 mb-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="label-caps text-secondary tracking-widest bg-surface-container-high px-2 py-1 rounded">Let's Connect</span>
        </div>
        <h2 className="display-lg-mobile md:display-lg text-on-background mb-4">Contact Me</h2>
        <p className="body-lg text-on-surface-variant max-w-2xl">Reach out for research collaborations in smart manufacturing and industrial AI.</p>
      </div>
      
      {/* Terminal Contact Form (Left Column) */}
      <div className="col-span-1 lg:col-span-7 clay-panel p-6 md:p-8">
        <div className="flex justify-between items-center mb-8 border-b border-grid-line pb-4">
          <span className="label-caps text-secondary">Send a Message</span>
          <svg className="w-6 h-6 text-slate-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 relative">
              <label className="technical-data text-on-surface-variant flex items-center gap-2">
                <span className="text-robotic-cyan font-bold">&gt;</span> Your Name
              </label>
              <input className="w-full bg-surface-container-highest border border-transparent focus:border-robotic-cyan focus:ring-1 focus:ring-robotic-cyan focus:outline-none rounded-md px-4 py-3 technical-data text-on-background shadow-inner transition-all placeholder:text-outline" placeholder="Your Name" type="text"/>
            </div>
            <div className="space-y-2 relative">
              <label className="technical-data text-on-surface-variant flex items-center gap-2">
                <span className="text-robotic-cyan font-bold">&gt;</span> Email Address
              </label>
              <input className="w-full bg-surface-container-highest border border-transparent focus:border-robotic-cyan focus:ring-1 focus:ring-robotic-cyan focus:outline-none rounded-md px-4 py-3 technical-data text-on-background shadow-inner transition-all placeholder:text-outline" placeholder="Email Address" type="email"/>
            </div>
          </div>
          <div className="space-y-2 relative">
            <label className="technical-data text-on-surface-variant flex items-center gap-2">
              <span className="text-robotic-cyan font-bold">&gt;</span> Subject
            </label>
            <input className="w-full bg-surface-container-highest border border-transparent focus:border-robotic-cyan focus:ring-1 focus:ring-robotic-cyan focus:outline-none rounded-md px-4 py-3 technical-data text-on-background shadow-inner transition-all placeholder:text-outline" placeholder="Collaboration / Inquiry" type="text"/>
          </div>
          <div className="space-y-2 relative">
            <label className="technical-data text-on-surface-variant flex items-center gap-2">
              <span className="text-robotic-cyan font-bold">&gt;</span> Message
            </label>
            <textarea className="w-full bg-surface-container-highest border border-transparent focus:border-robotic-cyan focus:ring-1 focus:ring-robotic-cyan focus:outline-none rounded-md px-4 py-3 technical-data text-on-background shadow-inner transition-all resize-none placeholder:text-outline" placeholder="Your message here..." rows={5}></textarea>
          </div>
          <div className="pt-4 flex justify-end">
            <button className="bg-clay-white text-primary font-body-md py-3 px-8 rounded-full border border-grid-line hover:border-robotic-cyan hover:text-robotic-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all shadow-md flex items-center gap-2 group" type="button">
              <span className="label-caps tracking-widest font-bold">Send Message</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </form>
      </div>
      
      {/* Contact Matrix & Location (Right Column) */}
      <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
        <div className="clay-panel rounded-xl p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="label-caps text-secondary">Contact Information</span>
            <span className="w-2 h-2 rounded-full bg-robotic-cyan led-indicator animate-pulse"></span>
          </div>
          <div className="clay-recessed rounded-lg border border-grid-line p-1">
            <div className="grid grid-cols-1 divide-y divide-grid-line">
              <div className="p-4 flex items-start gap-4 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <div className="label-caps text-slate-gray mb-1">Location</div>
                  <div className="technical-data text-on-background">New Plymouth, Taranaki, New Zealand</div>
                </div>
              </div>
              <div className="p-4 flex items-start gap-4 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <div className="label-caps text-slate-gray mb-1">Email</div>
                  <a className="technical-data text-on-background group-hover:text-robotic-cyan transition-colors" href="mailto:vendandsp@gmail.com">vendandsp@gmail.com</a>
                </div>
              </div>
              <div className="p-4 flex items-start gap-4 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <div className="label-caps text-slate-gray mb-1">Phone</div>
                  <a className="technical-data text-on-background group-hover:text-robotic-cyan transition-colors" href="tel:+64221615175">+64 221615175</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="clay-panel rounded-xl overflow-hidden h-64 relative">
          <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" alt="New Plymouth" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="bg-clay-white/90 backdrop-blur-sm px-3 py-1 rounded shadow-sm border border-grid-line">
              <span className="label-caps text-primary">Taranaki, New Zealand</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
