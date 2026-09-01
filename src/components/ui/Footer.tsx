import { Github, Linkedin, PenTool } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fdfcf8] border-t-2 border-[#454339] w-full py-8">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-6 max-w-[1200px] mx-auto gap-4">
        <div className="font-sans text-xs text-[#454339] font-black uppercase tracking-[0.25em]">
          VETRISELVAN_PANNEERSELVAM // ENGINEER
        </div>

        <p className="font-serif italic text-sm text-[#454339]/80 text-center">
          © 2024 Vetriselvan Panneerselvam — Senior Full Stack Engineer
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/vetriselvan-pv"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#454339] hover:underline uppercase tracking-wider"
          >
            <Github className="w-3.5 h-3.5" />
            Github
          </a>
          <a
            href="https://linkedin.com/in/vetriselvan-panneerselvam"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#454339] hover:underline uppercase tracking-wider"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a
            href="https://medium.com/@vetriselvan_11"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#454339] hover:underline uppercase tracking-wider"
          >
            <PenTool className="w-3.5 h-3.5" />
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
