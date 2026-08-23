import React from "react";

export default function Education(): React.JSX.Element {
  return (
    <section className="w-full mb-8">
      <div className="clay-panel rounded-xl p-6 md:p-8 relative">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-grid-line">
          <svg className="w-8 h-8 text-primary bg-surface-container-low p-1.5 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
          <h2 className="label-caps text-secondary uppercase tracking-widest">Academic Credentials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="clay-recessed rounded-lg border border-grid-line p-6 transition-all hover:shadow-[0_0_0_1px_#00f0ff,0_0_12px_rgba(0,240,255,0.4)]">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded bg-clay-white border border-grid-line flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <span className="technical-data text-[10px] text-outline-variant border border-outline-variant px-2 py-0.5 rounded">Postgraduate</span>
            </div>
            <h3 className="headline-md text-[18px] font-bold text-on-surface leading-tight mb-2">MEng in Robotics and Automation</h3>
            <p className="technical-data text-secondary flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
              University of Auckland
            </p>
          </div>
          <div className="clay-recessed rounded-lg border border-grid-line p-6 transition-all hover:shadow-[0_0_0_1px_#00f0ff,0_0_12px_rgba(0,240,255,0.4)]">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded bg-clay-white border border-grid-line flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="technical-data text-[10px] text-outline-variant border border-outline-variant px-2 py-0.5 rounded">Undergraduate</span>
            </div>
            <h3 className="headline-md text-[18px] font-bold text-on-surface leading-tight mb-2">BE in Electrical and Electronics</h3>
            <p className="technical-data text-secondary flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
              Kongu Engineering College
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
