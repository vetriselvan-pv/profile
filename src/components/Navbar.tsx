import { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onToggleAccentTheme: () => void;
  accentTheme: string;
}

export default function Navbar({
  activeSection,
  onOpenTerminal,
  onOpenResume,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex justify-center w-full ${
        isScrolled
          ? 'top-4 px-4'
          : 'top-0 px-6 py-4 border-b border-[#454339]/20 bg-[#fdfcf8]'
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'w-full max-w-[900px] bg-[#fdfcf8]/80 backdrop-blur-xl border border-[#454339]/15 shadow-[0_8px_32px_-8px_rgba(69,67,57,0.15)] rounded-full px-4 py-2'
            : 'w-full max-w-[1120px]'
        }`}
      >
        {/* Left: Empty Spacer for balance */}
        <div className="flex-1 hidden md:block"></div>

        {/* Center: Desktop Navigation Links (Modern Pill Group) */}
        <div className="hidden md:flex items-center p-1 bg-[#454339]/5 rounded-full border border-[#454339]/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans uppercase tracking-widest text-[10px] font-bold transition-all duration-300 relative px-4 py-2 rounded-full ${
                  isActive
                    ? 'text-[#fdfcf8] bg-[#454339] shadow-md'
                    : 'text-[#454339]/70 hover:text-[#454339] hover:bg-[#454339]/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right: Action Controls */}
        <div className="flex-1 flex justify-end items-center gap-2 lg:gap-3">
          {/* Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            title="Open Interactive Developer Terminal (CLI)"
            className="w-9 h-9 rounded-full text-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8] bg-[#454339]/5 border border-[#454339]/20 transition-all flex items-center justify-center cursor-pointer shadow-sm"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="bg-[#454339] text-[#fdfcf8] font-sans text-[10px] tracking-widest px-4 py-2.5 rounded-full font-bold hover:bg-[#333333] hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase flex items-center gap-1.5 shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            RESUME
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full text-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8] bg-[#454339]/5 border border-[#454339]/20 transition-all flex items-center justify-center shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[80px] left-4 right-4 bg-[#fdfcf8]/95 backdrop-blur-xl border border-[#454339]/20 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-sans uppercase tracking-[0.2em] text-xs font-bold transition-all px-4 py-3 rounded-xl flex items-center justify-between ${
                  isActive
                    ? 'bg-[#454339] text-[#fdfcf8]'
                    : 'text-[#454339] hover:bg-[#454339]/10'
                }`}
              >
                <span>{item.label}</span>
                {!isActive && (
                  <span className="font-serif italic text-sm text-[#454339]/40">
                    N° 0{navItems.indexOf(item) + 1}
                  </span>
                )}
              </button>
            );
          })}
          <div className="mt-2 pt-4 border-t border-[#454339]/10 flex justify-between items-center text-[10px] font-sans tracking-widest text-[#454339]/70 uppercase font-bold px-2">
            <span>SYSTEM // ONLINE</span>
            <button
              onClick={onOpenTerminal}
              className="text-[#454339] underline flex items-center gap-1 font-bold hover:text-[#454339]/70"
            >
              <Terminal className="w-3 h-3" /> LAUNCH_CLI
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
