import { recommendationsData } from "../../data/portfolioData";
import { Quote, CheckCircle2 } from "lucide-react";

export default function RecommendationsSection() {
  return (
    <section
      id="recommendations"
      className="py-20 bg-[#ffffff] border-b-2 border-[#454339]"
    >
      <div className="max-w-[1120px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4 border-b-2 border-[#454339] pb-6">
          <div>
            <span className="font-sans text-[11px] font-bold text-[#454339] uppercase block mb-2 tracking-[0.2em]">
              PLATE 04 // PEER ENDORSEMENTS
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#454339]">
              Recommendations
            </h2>
          </div>
          <div className="font-sans text-xs text-[#454339] font-bold bg-[#f4f0e6] border-2 border-[#454339] px-4 py-2 uppercase tracking-widest shadow-[3px_3px_0px_#454339]">
            Verified: {recommendationsData.length}
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {recommendationsData.map((rec) => (
            <div
              key={rec.id}
              className="w-[85vw] md:w-[600px] shrink-0 snap-center bg-[#f4f0e6] border-2 border-[#454339] shadow-[8px_8px_0px_#454339] p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#454339]/20 mb-4" />
                <p className="font-serif text-lg md:text-xl text-[#454339] italic leading-relaxed mb-8">
                  "{rec.text}"
                </p>
              </div>

              <div className="border-t-2 border-[#454339] pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {rec.image && (
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-10 h-10 object-cover border border-[#454339] bg-[#ffffff] grayscale contrast-125"
                    />
                  )}
                  <div>
                    <h4 className="font-sans text-sm font-bold text-[#454339] uppercase tracking-wider">
                      {rec.name}
                    </h4>
                    <p className="font-serif text-xs text-[#454339]/80 italic mt-0.5 max-w-[200px] sm:max-w-xs truncate">
                      {rec.title}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#454339]/60">
                    {rec.date}
                  </span>
                  <div className="flex items-center gap-1 mt-1 font-sans text-[10px] font-bold text-green-700 uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" /> Linked
                    <span className="font-serif italic font-normal normal-case">
                      in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
