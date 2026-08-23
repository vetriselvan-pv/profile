import React from "react";

export default function FeaturedWork(): React.JSX.Element {
  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Main Feature */}
      <div className="md:col-span-8 clay-panel p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-robotic-cyan opacity-10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
        <div className="relative z-10 flex flex-col gap-6 h-full">
          <div className="flex justify-between items-start">
            <div className="label-caps text-slate-gray bg-surface-container-low px-3 py-1 rounded">Project ID: RL-096</div>
            <svg className="w-6 h-6 text-robotic-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          <div className="flex-grow flex flex-col justify-center gap-4">
            <h2 className="headline-md text-on-surface">Breakthrough: Reinforcement Learning for Industrial Anomaly Detection</h2>
            <div className="clay-recessed p-4 border-l-2 border-robotic-cyan">
              <div className="flex items-end gap-2">
                <span className="display-lg text-primary leading-none">96%</span>
                <span className="technical-data text-slate-gray mb-1">Accuracy Achieved</span>
              </div>
            </div>
            <p className="body-md text-on-surface-variant max-w-lg mt-2">
              Developed and deployed a highly accurate RL model capable of identifying micro-anomalies in high-speed manufacturing lines, significantly reducing downtime and defect rates.
            </p>
          </div>
          <div className="mt-auto">
            <button className="inline-flex items-center gap-2 technical-data text-primary hover:text-robotic-cyan transition-colors">
              Read Full Paper 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Lab Image Feature */}
      <div className="md:col-span-4 clay-panel overflow-hidden relative min-h-[400px]">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Automation Lab" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-gray/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
          <div className="label-caps text-clay-white opacity-80 mb-2">Research Environment</div>
          <div className="technical-data text-clay-white">High-Tech Automation Lab facility. Testing physical RL actuation.</div>
        </div>
      </div>
    </section>
  );
}
