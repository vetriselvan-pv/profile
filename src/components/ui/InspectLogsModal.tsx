import { Project } from "../../types";
import { X, Activity, Terminal, Shield, ExternalLink, Cpu, HardDrive } from 'lucide-react';

interface InspectLogsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function InspectLogsModal({ project, onClose }: InspectLogsModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#454339]/70 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10 animate-in fade-in">
      <div className="bg-[#ffffff] border-2 border-[#454339] shadow-[10px_10px_0px_#454339] w-full max-w-3xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-5 bg-[#f4f0e6] border-b-2 border-[#454339] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#454339]"></span>
            <span className="font-sans text-xs text-[#454339] font-black uppercase tracking-widest">
              INSPECTING_LOGS // {project.title.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8] border border-[#454339] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 lg:p-8 overflow-y-auto space-y-6 bg-[#fdfcf8]">
          {/* Project Header Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="bg-[#454339] text-[#fdfcf8] px-2.5 py-0.5 font-sans text-[10px] uppercase font-bold tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="font-serif italic text-3xl font-black text-[#454339] mb-2">{project.title}</h2>
            <p className="font-serif text-base text-[#454339]/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-[#ffffff] p-3.5 border-2 border-[#454339] shadow-[3px_3px_0px_#454339]"
                >
                  <p className="font-sans text-[10px] uppercase font-bold text-[#454339]/60 mb-1">{m.label}</p>
                  <p className="font-serif text-lg font-black text-[#454339]">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Key Architectural Highlights */}
          {project.highlights && (
            <div>
              <h4 className="font-sans text-xs font-bold text-[#454339] mb-3 tracking-[0.2em] uppercase">
                ARCHITECTURAL_HIGHLIGHTS
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((hl, i) => (
                  <li
                    key={i}
                    className="font-serif text-sm text-[#454339] flex items-start gap-2 bg-[#ffffff] p-3 border-2 border-[#454339]"
                  >
                    <span className="text-[#454339] font-black">&gt;</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Real-time Simulated Execution Logs */}
          <div>
            <h4 className="font-sans text-xs text-[#454339] mb-3 tracking-[0.2em] uppercase flex items-center gap-2 font-bold">
              <Terminal className="w-4 h-4 text-[#454339]" /> RUNTIME_EXECUTION_STREAM
            </h4>
            <div className="bg-[#ffffff] p-4 border-2 border-[#454339] font-mono text-xs space-y-1.5 text-[#454339]">
              {project.logs?.map((log, idx) => (
                <p key={idx} className="leading-relaxed">
                  <span className="text-[#454339]/50">[T+{idx * 12}ms]</span>{' '}
                  <span className="font-semibold text-[#454339]">{log}</span>
                </p>
              ))}
              <p className="text-[#454339] font-bold underline">
                [STREAM_STATUS] Idle - Waiting for next event pipeline...
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f4f0e6] border-t-2 border-[#454339] flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2 font-sans text-xs font-bold text-[#454339]">
            <HardDrive className="w-4 h-4 text-[#454339]" />
            <span>ID: {project.id}</span>
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#454339] bg-[#ffffff] text-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8] px-4 py-2 font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                GITHUB <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="bg-[#454339] text-[#fdfcf8] px-5 py-2 font-sans text-xs font-bold uppercase tracking-wider border border-[#454339]"
            >
              DISMISS_LOGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
