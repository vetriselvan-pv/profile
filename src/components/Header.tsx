import React from "react";

export default function Header(): React.JSX.Element {
  return (
    <header className="flex justify-between items-center w-full px-6 md:px-12 py-4 sticky top-0 z-50 bg-clay-white shadow-[0_16px_32px_rgba(51,65,85,0.08)]">
      <div className="headline-md tracking-tighter text-on-surface">
        VETRIVENDAN T
      </div>
      <nav className="hidden md:flex gap-8">
        <a className="technical-data uppercase tracking-widest text-robotic-cyan font-bold border-b-2 border-robotic-cyan pb-1 hover:scale-105 transition-all" href="#projects">RESEARCH</a>
        <a className="technical-data uppercase tracking-widest text-slate-gray hover:text-primary transition-colors hover:scale-105" href="#projects">PROJECTS</a>
        <a className="technical-data uppercase tracking-widest text-slate-gray hover:text-primary transition-colors hover:scale-105" href="#skills">SKILLS</a>
        <a className="technical-data uppercase tracking-widest text-slate-gray hover:text-primary transition-colors hover:scale-105" href="#experience">EXPERIENCE</a>
      </nav>
      <a href="#contact" className="btn-clay btn-clay-primary px-6 py-2 technical-data text-primary hidden md:block active:btn-clay-active">
        Contact Me
      </a>
    </header>
  );
}
