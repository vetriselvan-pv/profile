import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#454339]/70 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10 animate-in fade-in">
      <div className="bg-[#ffffff] border-2 border-[#454339] shadow-[10px_10px_0px_#454339] w-full max-w-4xl overflow-hidden flex flex-col h-[90vh]">
        {/* Modal Toolbar Header */}
        <div className="p-4 bg-[#f4f0e6] border-b-2 border-[#454339] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#454339]"></span>
            <span className="font-sans text-xs text-[#454339] font-black uppercase tracking-widest">
              Vetriselvan_Panneerselvam_Senior_FullStack_Engineer.pdf
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Vetriselvan_Panneerselvam_Senior_FullStack_Engineer.pdf"
              download
              className="bg-[#454339] text-[#fdfcf8] font-sans text-xs px-4 py-1.5 border border-[#454339] hover:bg-[#333333] font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> DOWNLOAD
            </a>
            <button
              onClick={onClose}
              className="p-1 text-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8] border border-[#454339] transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content iframe */}
        <div className="flex-1 bg-[#fdfcf8] w-full h-full relative">
          <iframe
            src="/Vetriselvan_Panneerselvam_Senior_FullStack_Engineer.pdf"
            className="w-full h-full border-none absolute inset-0"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}
