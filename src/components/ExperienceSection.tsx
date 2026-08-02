import { experienceData } from "../data/portfolioData";
import { ChevronRight, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="px-6 lg:px-10 max-w-[1120px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4 border-b-2 border-[#454339] pb-6">
          <div>
            <span className="font-sans text-[11px] font-bold text-[#454339] uppercase block mb-2 tracking-[0.2em]">
              CAREER // CHRONOLOGY
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#454339]">
              Work Experience
            </h2>
          </div>
          <div className="font-sans text-xs text-[#454339] font-bold bg-[#ffffff] border-2 border-[#454339] px-4 py-2 uppercase tracking-widest shadow-[3px_3px_0px_#454339]">
            Total Entries: {experienceData.length}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {experienceData.map((job, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border-2 border-[#454339] shadow-[6px_6px_0px_#454339] p-6 sm:p-8 flex flex-col md:flex-row gap-8 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#454339]"
            >
              {/* Left sidebar: Company, Dates, Location */}
              <div className="md:w-1/3 shrink-0 flex flex-col gap-4 border-b-2 md:border-b-0 md:border-r-2 border-[#454339] pb-6 md:pb-0 md:pr-6">
                <div>
                  <h3 className="font-serif text-2xl font-black text-[#454339] leading-tight mb-3">
                    {job.company}
                  </h3>
                  <div className="font-sans text-xs font-bold text-[#454339] uppercase tracking-widest bg-[#f4f0e6] inline-block px-3 py-1.5 border border-[#454339]">
                    {job.role}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2 font-sans text-xs font-bold text-[#454339]/70 uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </div>
                  <div className="flex items-center gap-2 font-sans text-xs font-bold text-[#454339]/70 uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </div>
                </div>
              </div>

              {/* Right content: Projects & Highlights */}
              <div className="md:w-2/3 flex flex-col gap-8">
                {job.projects.map((project, pIdx) => (
                  <div key={pIdx}>
                    <div className="mb-3">
                      <h4 className="font-sans text-sm font-bold text-[#454339] uppercase tracking-[0.1em] mb-1">
                        {project.name}
                      </h4>
                      <p className="font-serif italic text-sm text-[#454339]/80">
                        {project.role}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="font-sans text-xs text-[#454339] font-semibold tracking-wide flex items-start gap-2"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-[#454339] shrink-0 mt-0.5" />
                          <span className="leading-relaxed opacity-90">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
