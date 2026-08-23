import React from "react";

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
      {/* Experience Timeline */}
      <div className="md:col-span-8 flex flex-col gap-6">
        <div className="clay-panel rounded-xl p-6 md:p-8 relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-grid-line">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-primary bg-surface-container-low p-1.5 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h2 className="label-caps text-secondary uppercase tracking-widest">Experience History</h2>
            </div>
            <span className="technical-data text-[10px] text-outline-variant hidden sm:inline-block">TIMELINE</span>
          </div>
          
          <div className="clay-recessed rounded-lg border border-grid-line p-6 pl-8">
            <div className="relative border-l border-outline-variant space-y-10 pb-4">
              
              {/* Job 1 */}
              <div className="relative pl-6 group">
                <div className="absolute w-3 h-3 bg-robotic-cyan rounded-full -left-[6.5px] top-[6px] shadow-[0_0_8px_rgba(0,240,255,0.8)] ring-4 ring-surface-container-low"></div>
                <div className="bg-clay-white p-5 rounded-lg border border-grid-line transition-all hover:shadow-[0_0_0_1px_#00f0ff,0_0_12px_rgba(0,240,255,0.4)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="headline-md text-[18px] font-bold text-on-surface">Automation Engineer</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="technical-data text-slate-gray flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Auckland, New Zealand
                      </span>
                      <span className="technical-data bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded text-xs border border-tertiary-fixed-dim">CURRENT</span>
                    </div>
                  </div>
                  <p className="technical-data text-primary mb-1">HEL Rimu</p>
                  <p className="technical-data text-outline-variant mb-3">Sep 2025 - Present</p>
                  <p className="body-md text-on-surface-variant">Deploying and optimizing advanced industrial automation sequences, maintaining rigorous software quality standards, and executing comprehensive system diagnostics.</p>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-6 group">
                <div className="absolute w-3 h-3 bg-outline-variant group-hover:bg-primary rounded-full -left-[6.5px] top-[6px] ring-4 ring-surface-container-low transition-colors"></div>
                <div className="bg-clay-white p-5 rounded-lg border border-grid-line transition-all hover:shadow-[0_0_0_1px_#00f0ff,0_0_12px_rgba(0,240,255,0.4)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="headline-md text-[18px] font-bold text-on-surface">Software Engineer Intern</h3>
                    <span className="technical-data text-slate-gray flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Auckland, New Zealand
                    </span>
                  </div>
                  <p className="technical-data text-secondary mb-1">Kenntec</p>
                  <p className="technical-data text-outline-variant mb-3">Nov 2024 - Feb 2025</p>
                  <p className="body-md text-on-surface-variant">Assisted in software architecture design, component testing, and logical fault analysis in early-stage deployment environments.</p>
                </div>
              </div>

              {/* Job 3 */}
              <div className="relative pl-6 group">
                <div className="absolute w-3 h-3 bg-outline-variant group-hover:bg-primary rounded-full -left-[6.5px] top-[6px] ring-4 ring-surface-container-low transition-colors"></div>
                <div className="bg-clay-white p-5 rounded-lg border border-grid-line transition-all hover:shadow-[0_0_0_1px_#00f0ff,0_0_12px_rgba(0,240,255,0.4)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="headline-md text-[18px] font-bold text-on-surface">PLC Engineer</h3>
                    <span className="technical-data text-slate-gray flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Serbia &amp; Finland (Onsite)
                    </span>
                  </div>
                  <p className="technical-data text-secondary mb-1">Cimcorp Group</p>
                  <p className="technical-data text-outline-variant mb-3">Aug 2019 - Jun 2024</p>
                  <p className="body-md text-on-surface-variant">Engineered Programmable Logic Controller routines for large-scale robotic facilities. Conducted onsite commissioning, troubleshooting, and protocol validation across international technical sites.</p>
                </div>
              </div>

              {/* Job 4 */}
              <div className="relative pl-6 group">
                <div className="absolute w-3 h-3 bg-outline-variant group-hover:bg-primary rounded-full -left-[6.5px] top-[6px] ring-4 ring-surface-container-low transition-colors"></div>
                <div className="bg-clay-white p-5 rounded-lg border border-grid-line transition-all hover:shadow-[0_0_0_1px_#00f0ff,0_0_12px_rgba(0,240,255,0.4)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="headline-md text-[18px] font-bold text-on-surface">Technical Role</h3>
                    <span className="technical-data text-slate-gray flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                  <p className="technical-data text-secondary mb-1">SMEC Labs</p>
                  <p className="technical-data text-outline-variant">Jun 2018 - Aug 2018 · 3 mos</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Skills Breakdown Sidebar */}
      <aside id="skills" className="md:col-span-4 flex flex-col gap-8">
        <div className="clay-panel rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-grid-line">
            <svg className="w-8 h-8 text-primary bg-surface-container-low p-1.5 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
            <h2 className="label-caps text-secondary uppercase tracking-widest">Skills Breakdown</h2>
          </div>
          
          <div className="mb-6">
            <div className="w-full h-32 rounded-lg mb-4 clay-recessed overflow-hidden relative border border-grid-line">
              <div className="bg-cover bg-center w-full h-full mix-blend-luminosity opacity-80" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
              <span className="absolute bottom-2 left-2 technical-data text-[10px] text-primary">Technical Visualization</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Industrial Automation', 'Software Quality', 'Analytical Skills', 'PLC Programming', 'System Diagnostics'].map(skill => (
              <span key={skill} className="bg-surface border border-grid-line px-3 py-1.5 rounded-full technical-data text-on-surface flex items-center gap-2 hover:border-robotic-cyan hover:shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-all cursor-default group">
                <span className="block w-1.5 h-1.5 shrink-0 bg-primary rounded-full group-hover:bg-robotic-cyan transition-colors"></span> {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="clay-panel rounded-xl p-0 overflow-hidden flex flex-col">
          <div className="p-6 pb-4 border-b border-grid-line bg-surface-bright flex items-center gap-3">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h2 className="label-caps text-secondary uppercase tracking-widest">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 bg-grid-line gap-[1px]">
            <div className="bg-clay-white p-4 flex flex-col hover:bg-surface-bright transition-colors cursor-default">
              <span className="technical-data text-[10px] text-slate-gray mb-1 uppercase">Database Config</span>
              <span className="body-md font-bold text-on-surface">Oracle Database 11g</span>
            </div>
            <div className="bg-clay-white p-4 flex flex-col hover:bg-surface-bright transition-colors cursor-default">
              <span className="technical-data text-[10px] text-slate-gray mb-1 uppercase">Specialization</span>
              <span className="body-md font-bold text-on-surface">PG Diploma in Industrial Automation</span>
            </div>
            <div className="bg-clay-white p-4 flex flex-col hover:bg-surface-bright transition-colors cursor-default">
              <span className="technical-data text-[10px] text-slate-gray mb-1 uppercase">Standardization</span>
              <span className="body-md font-bold text-on-surface">TUV in Industrial Automation</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
