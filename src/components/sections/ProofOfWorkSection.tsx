import { achievementsData, openSourceData } from "../../data/portfolioData";
import {
  Award,
  GitPullRequest,
  GitCommit,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export default function ProofOfWorkSection() {
  // Using live GitHub contribution graph instead of mock terminal

  return (
    <section
      id="milestones"
      className="py-20 px-6 lg:px-10 max-w-[1120px] mx-auto"
    >
      {/* Proof of Work Title */}
      <div className="mb-14 border-b-2 border-[#454339] pb-6">
        <span className="font-sans text-[11px] font-bold text-[#454339] uppercase block mb-2 tracking-[0.2em]">
          PLATE 04 // PROOF OF WORK & AUDIT
        </span>
        <h1 className="font-serif text-5xl lg:text-6xl font-black text-[#454339] mb-3">
          Proof of Work
        </h1>
        <p className="font-serif italic text-base text-[#454339]/80 max-w-2xl leading-relaxed">
          A technical audit of engineering milestones, open-source commits, and
          collaborative architectural contributions.
        </p>
      </div>

      {/* Grid Layout for Achievements & Open Source Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        {/* Left: Achievements Timeline (Span 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-[#454339]" />
            <h2 className="font-serif text-3xl font-black text-[#454339]">
              Milestones & Awards
            </h2>
          </div>

          <div className="relative space-y-10 pl-6 border-l-2 border-[#454339]">
            {achievementsData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[31px] top-1.5 w-4 h-4 transition-all duration-300 border-2 border-[#454339] ${
                    item.isActive
                      ? "bg-[#454339]"
                      : "bg-[#ffffff] group-hover:bg-[#454339]"
                  }`}
                ></div>

                <div>
                  <span className="font-sans text-xs text-[#454339] font-black tracking-widest uppercase block mb-1">
                    {item.period}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#454339] mb-2 group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="font-serif text-[#454339]/80 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="font-sans text-[10px] uppercase font-bold px-2.5 py-1 bg-[#454339] text-[#fdfcf8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.verifiedId && (
                    <div className="flex items-center gap-2 text-[#454339] mt-2 font-sans text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{item.verifiedId}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Open Source Bento (Span 5) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-2 mb-6">
            <GitPullRequest className="w-5 h-5 text-[#454339]" />
            <h2 className="font-serif text-3xl font-black text-[#454339]">
              Open Source
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {openSourceData.map((repo) => (
              <div
                key={repo.id}
                className="bg-[#ffffff] border-2 border-[#454339] p-6 shadow-[6px_6px_0px_#454339] transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-3 border-b border-[#454339]/10 pb-2">
                  {repo.type === "commit" ? (
                    <GitCommit className="w-6 h-6 text-[#454339]" />
                  ) : (
                    <Terminal className="w-6 h-6 text-[#454339]" />
                  )}
                  <span className="font-sans text-xs text-[#454339] font-black uppercase tracking-wider">
                    {repo.stats}
                  </span>
                </div>
                <h4 className="font-sans text-xs text-[#454339] mb-1.5 font-bold uppercase tracking-widest">
                  {repo.name}
                </h4>
                <p className="font-serif text-xs text-[#454339]/80 leading-relaxed">
                  {repo.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub Contribution Graph (Full Width) */}
      <div className="bg-[#ffffff] border-2 border-[#454339] shadow-[6px_6px_0px_#454339] overflow-hidden">
        <div className="bg-[#f4f0e6] px-4 py-2.5 flex items-center justify-between border-b-2 border-[#454339]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#454339]"></div>
            <div className="w-3 h-3 rounded-full bg-[#888888]"></div>
            <div className="w-3 h-3 rounded-full bg-[#cccccc]"></div>
            <span className="ml-3 font-sans text-xs text-[#454339] uppercase font-bold tracking-widest">
              github_commits.sys
            </span>
          </div>
          <span className="font-sans text-[10px] text-[#fdfcf8] bg-[#454339] px-2 py-0.5 font-bold uppercase tracking-widest">
            LIVE_DATA
          </span>
        </div>

        <div className="p-5 bg-[#fdfcf8] flex items-center justify-center overflow-hidden">
          <img
            src="https://ghchart.rshah.org/454339/vetriselvan-pv"
            alt="Vetriselvan's GitHub Contribution Graph"
            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
