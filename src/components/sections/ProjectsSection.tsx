import { useRef, useEffect, useState } from "react";
import { Project } from "../../types";
import { projectsData } from "../../data/portfolioData";
import { Code2, ExternalLink, Eye } from "lucide-react";

interface ProjectsSectionProps {
  onInspectLogs: (project: Project) => void;
  onOpenTerminal: () => void;
}

export default function ProjectsSection({
  onInspectLogs,
}: ProjectsSectionProps) {
  const targetRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [xTransform, setXTransform] = useState(0);
  const [containerHeight, setContainerHeight] = useState("300vh"); // fallback

  useEffect(() => {
    const updateDimensionsAndScroll = () => {
      if (!targetRef.current || !trackRef.current) return;

      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const trackWidth = trackRef.current.scrollWidth;

      // The maximum distance we need to translate horizontally
      const maxTranslate = trackWidth - windowWidth + 64; // 64px for right padding offset

      // Dynamic height ensures exactly 1:1 scroll speed (1px vertical scroll = 1px horizontal scroll)
      setContainerHeight(`${maxTranslate + windowHeight}px`);

      // Current scroll position logic
      const { top } = targetRef.current.getBoundingClientRect();

      if (top > 0) {
        setXTransform(0);
      } else if (top < -maxTranslate) {
        setXTransform(-Math.max(0, maxTranslate));
      } else {
        setXTransform(-Math.max(0, Math.abs(top)));
      }
    };

    window.addEventListener("scroll", updateDimensionsAndScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateDimensionsAndScroll, {
      passive: true,
    });

    // Initial calculation
    // Need a tiny delay on mount to ensure fonts/images have rendered for accurate scrollWidth
    const timeout = setTimeout(updateDimensionsAndScroll, 100);

    return () => {
      window.removeEventListener("scroll", updateDimensionsAndScroll);
      window.removeEventListener("resize", updateDimensionsAndScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative bg-transparent"
      style={{ height: containerHeight }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10 mb-6 shrink-0">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b-2 border-[#454339] pb-6">
            <div>
              <span className="font-sans text-[11px] font-bold text-[#454339] uppercase block mb-2 tracking-[0.2em]">
                PLATE 02 // FEATURED DEVELOPMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#454339]">
                Public Projects
              </h2>
            </div>
            <div className="font-sans text-xs text-[#454339] font-bold bg-[#ffffff] border-2 border-[#454339] px-4 py-2 uppercase tracking-widest shadow-[3px_3px_0px_#454339]">
              Total Index: {projectsData.length} / Active: {projectsData.length}
            </div>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-8 px-6 lg:px-10 w-max"
          style={{
            transform: `translateX(${xTransform}px)`,
            willChange: "transform",
          }}
        >
          {projectsData.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden bg-[#ffffff] border-2 border-[#454339] shadow-[8px_8px_0px_#454339] flex flex-col shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] lg:w-[600px] h-[60vh] min-h-[450px] max-h-[550px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#e5e1d8]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover filter contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-serif text-[#454339]/40 italic">
                    No preview available
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-10 transition-transform duration-500 transform group-hover:-translate-y-full">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
                  {p.title}
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-[#fdfcf8] p-6 sm:p-8 flex flex-col justify-between z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full">
                <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden mt-8">
                  <h3 className="font-serif text-2xl font-black text-[#454339] mb-1 line-clamp-1">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <span className="font-sans text-[10px] text-[#454339]/80 mb-3 block uppercase tracking-[0.2em] font-black line-clamp-1">
                      {p.subtitle}
                    </span>
                  )}
                  <p className="font-serif text-sm sm:text-base text-[#454339]/80 leading-relaxed">
                    {p.description ||
                      "Project details and overview available in the inspection logs."}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#454339] mt-4 shrink-0">
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
                    className="bg-[#454339] text-[#fdfcf8] hover:bg-[#333333] border border-[#454339] px-4 py-2 font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors"
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
