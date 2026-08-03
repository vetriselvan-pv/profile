import { useState, useRef, MouseEvent, useEffect } from 'react';
import { bioData } from '../../data/portfolioData';
import { Edit3, Check, Copy, MapPin, Radio, Activity, Code2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenTerminal: () => void;
}

export default function AboutSection({ onOpenTerminal }: AboutSectionProps) {
  const [bioText, setBioText] = useState(bioData.bioText);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [liveCommits, setLiveCommits] = useState<string | number>('...');
  const [liveRepos, setLiveRepos] = useState<string | number>('...');

  useEffect(() => {
    // Fetch public repos
    fetch('https://api.github.com/users/vetriselvan-pv')
      .then(res => res.json())
      .then(data => {
        if (data.public_repos !== undefined) {
          setLiveRepos(data.public_repos);
        } else {
          setLiveRepos(bioData.projectShips);
        }
      })
      .catch(() => setLiveRepos(bioData.projectShips));

    // Fetch total commits
    fetch('https://api.github.com/search/commits?q=author:vetriselvan-pv', {
      headers: { 'Accept': 'application/vnd.github.cloak-preview' }
    })
      .then(res => res.json())
      .then(data => {
        if (data.total_count !== undefined) {
          setLiveCommits(data.total_count);
        } else {
          setLiveCommits(bioData.commitsPerWk);
        }
      })
      .catch(() => setLiveCommits(bioData.commitsPerWk));
  }, []);

  // Tilt effect state & ref
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 18;
    const rotateY = (centerX - x) / 18;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCopyBio = () => {
    navigator.clipboard.writeText(bioText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-32 pb-16 lg:pt-36 lg:pb-24 max-w-[1120px] mx-auto px-6 lg:px-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Image Canvas with Tilt & Crisp Editorial Frame */}
        <div className="lg:col-span-5 perspective-container">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            className="relative tilt-card border-2 border-[#454339] p-3 bg-[#ffffff] shadow-[8px_8px_0px_#454339] group transition-transform duration-200"
          >
            {/* Top-Left Corner Bracket */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#454339] z-10 pointer-events-none"></div>

            {/* Profile Media with subtle contrast filter hover effect */}
            <div className="relative overflow-hidden aspect-[4/5] bg-[#e5e1d8] border border-[#454339]">
              {bioData.imageUrl.endsWith('.mp4') ? (
                <video
                  src={`${import.meta.env.BASE_URL}${bioData.imageUrl.replace(/^[\.\/]*/, '')}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}${bioData.imageUrl.replace(/^[\.\/]*/, '')}`}
                  alt="Professional Portrait - Senior Full-Stack Architect"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Bottom-Right Corner Bracket */}
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#454339] z-10 pointer-events-none"></div>

            {/* Floating ID Tag */}
            <div className="absolute top-5 right-5 bg-[#454339] text-[#fdfcf8] px-3 py-1 z-20 shadow-sm">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold">
                {bioData.idBadge}
              </p>
            </div>

            {/* Status Indicator Overlay at bottom */}
            <div className="absolute bottom-5 left-5 right-5 bg-[#fdfcf8] border border-[#454339] p-2.5 flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#454339] animate-pulse"></span>
                <span className="text-[#454339] uppercase font-bold text-[10px] tracking-widest">ACTIVE ARCHITECT</span>
              </div>
              <button
                onClick={onOpenTerminal}
                className="text-[#454339] hover:underline text-[10px] tracking-widest font-bold uppercase flex items-center gap-1"
              >
                <Code2 className="w-3 h-3" /> CLI
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Subheader */}
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#454339]"></div>
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#454339] uppercase">
              {bioData.whoAmI}
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-serif text-5xl lg:text-6xl font-black text-[#454339] leading-[1.05] tracking-tight">
            {bioData.title} <br />
            <span className="italic font-serif font-normal text-[#454339]/80">
              {bioData.highlightedTitle}
            </span>
          </h1>

          {/* Bio Container with Interactive Editing */}
          <div className="flex flex-col gap-6 border-l-2 border-[#454339] pl-6 my-2">
            <div className="relative group/bio">
              {isEditing ? (
                <div className="space-y-2">
                  <textarea
                    value={bioText}
                    onChange={(e) => setBioText(e.target.value)}
                    className="w-full bg-[#ffffff] border-2 border-[#454339] p-3 font-serif text-[#454339] text-base focus:outline-none min-h-[110px]"
                    rows={3}
                  />
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-[#454339] text-[#fdfcf8] px-3 py-1.5 text-xs font-sans tracking-widest font-bold uppercase flex items-center gap-1 border border-[#454339]"
                  >
                    <Check className="w-3.5 h-3.5" /> SAVE_BIO
                  </button>
                </div>
              ) : (
                <p className="font-serif text-lg text-[#454339]/90 leading-relaxed relative">
                  {bioText}
                </p>
              )}

              {!isEditing && (
                <div className="flex items-center gap-2 mt-3 text-xs font-sans uppercase tracking-wider font-bold">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-[#454339]/60 hover:text-[#454339] flex items-center gap-1"
                    title="Edit biography summary"
                  >
                    <Edit3 className="w-3 h-3" /> Edit
                  </button>
                  <span className="text-[#454339]/30">|</span>
                  <button
                    onClick={handleCopyBio}
                    className="text-[#454339]/60 hover:text-[#454339] flex items-center gap-1"
                    title="Copy biography"
                  >
                    {copied ? (
                      <span className="text-[#454339] font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy Bio
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Metadata Badges Grid */}
            <div className="grid grid-cols-2 gap-6 py-4 border-y-2 border-[#454339]">
              <div>
                <h4 className="font-sans text-[10px] tracking-[0.2em] text-[#454339]/60 mb-1 flex items-center gap-1.5 font-bold uppercase">
                  <MapPin className="w-3 h-3 text-[#454339]" /> LOCATION
                </h4>
                <p className="font-serif text-base text-[#454339] font-bold tracking-wide">
                  {bioData.location}
                </p>
              </div>
              <div>
                <h4 className="font-sans text-[10px] tracking-[0.2em] text-[#454339]/60 mb-1 flex items-center gap-1.5 font-bold uppercase">
                  <Radio className="w-3 h-3 text-[#454339]" /> AVAILABILITY
                </h4>
                <p className="font-serif text-base text-[#454339] font-bold tracking-wide">
                  {bioData.availability}
                </p>
              </div>
            </div>

            {/* Metric Metrics Stats */}
            <div className="grid grid-cols-3 gap-6 pt-1">
              <div className="flex flex-col">
                <span className="font-serif text-4xl lg:text-5xl font-black text-[#454339]">
                  {bioData.yearsExp}
                </span>
                <span className="font-sans text-[10px] text-[#454339]/60 uppercase tracking-[0.2em] font-bold mt-1">
                  Years Exp
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-4xl lg:text-5xl font-black text-[#454339]">
                  {liveCommits}
                </span>
                <span className="font-sans text-[10px] text-[#454339]/60 uppercase tracking-[0.2em] font-bold mt-1">
                  Total Commits
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-4xl lg:text-5xl font-black text-[#454339]">
                  {liveRepos}
                </span>
                <span className="font-sans text-[10px] text-[#454339]/60 uppercase tracking-[0.2em] font-bold mt-1">
                  Public Repos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
