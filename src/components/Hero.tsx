import React from "react";
import ThreeJSCore from "./ThreeJSCore";

export default function Hero(): React.JSX.Element {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center rounded-3xl overflow-hidden clay-panel py-16 md:py-24 mt-8 md:mt-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full block">
          <ThreeJSCore />
        </div>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"></div>
      </div>
      
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12 gap-8 md:gap-12">
        
        {/* Text Content (Left on Desktop) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 flex-1">
          <h1 className="display-lg-mobile md:display-lg text-on-surface">
            VETRIVENDAN T <span className="text-slate-gray opacity-50">//</span><br/>
            LEAD AUTOMATION ENGINEER &amp; INDUSTRIAL AI RESEARCHER.
          </h1>
          <p className="body-lg text-on-surface-variant max-w-2xl">
            A Recent Automation and Robotics graduate from University of Auckland with 5+ years of hands-on experience in the material handling Automation and now researching to bring Reinforcement Learning models into real-world industrial applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center md:justify-start">
            <button className="btn-clay px-8 py-4 label-caps text-slate-gray flex items-center justify-center gap-2 active:btn-clay-active">
              View Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </button>
            <a href="https://www.linkedin.com/in/vetrivendan-t-vetri-8814b9101/" target="_blank" rel="noopener noreferrer" className="btn-clay px-4 py-4 text-slate-gray hover:text-robotic-cyan flex items-center justify-center active:btn-clay-active transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Profile Image (Right on Desktop, Top on Mobile) */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[3rem] md:rounded-[4rem] overflow-hidden clay-panel border-4 border-surface-container shadow-2xl relative group">
            <div className="absolute inset-0 bg-robotic-cyan/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src="/profile.jpg" alt="Vetrivendan T" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

      </div>
    </section>
  );
}
