import { Project } from "../types";
import { projectsData } from "../data/portfolioData";
import {
  Code2,
  ExternalLink,
  Eye,
} from "lucide-react";

interface ProjectsSectionProps {
  onInspectLogs: (project: Project) => void;
  onOpenTerminal: () => void;
}

export default function ProjectsSection({
  onInspectLogs,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12">
      <div className="py-16 px-6 lg:px-10 max-w-[1120px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4 border-b-2 border-[#454339] pb-6">
          <div>
            <span className="font-sans text-[11px] font-bold text-[#454339] uppercase block mb-2 tracking-[0.2em]">
              PLATE 02 // FEATURED DEVELOPMENTS
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#454339]">
              Public Projects
            </h2>
          </div>
          <div className="font-sans text-xs text-[#454339] font-bold bg-[#ffffff] border-2 border-[#454339] px-4 py-2 uppercase tracking-widest shadow-[3px_3px_0px_#454339]">
            Total Index: 04 / Active: 02
          </div>
        </div>

        {/* 2-Column Uniform Grid Layout for Better UX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden bg-[#ffffff] border-2 border-[#454339] shadow-[8px_8px_0px_#454339] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Tags */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pr-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#454339] text-[#fdfcf8] px-3 py-1 font-sans text-[10px] uppercase font-bold tracking-[0.2em] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden bg-[#e5e1d8] border-b-2 border-[#454339] relative">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-serif text-[#454339]/40 italic">
                    No preview available
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-3xl font-black text-[#454339] mb-2 group-hover:underline decoration-2 leading-tight">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <span className="font-sans text-[10px] text-[#454339]/80 mb-4 block uppercase tracking-[0.2em] font-black">
                      {p.subtitle}
                    </span>
                  )}
                  <p className="font-serif text-base text-[#454339]/80 mb-6 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#454339]">
                  <div className="flex gap-4">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#454339] hover:underline font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                      >
                        <Code2 className="w-4 h-4 text-[#454339]" /> Source
                      </a>
                    )}
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#454339] hover:underline font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4 text-[#454339]" /> Live
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onInspectLogs(p)}
                    className="bg-[#454339] text-[#fdfcf8] hover:bg-[#333333] border border-[#454339] px-4 py-2 font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5" /> Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
