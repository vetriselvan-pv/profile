import { useState, useRef, useEffect, KeyboardEvent, ReactNode } from "react";
import {
  X,
  Terminal as TerminalIcon,
  CornerDownLeft,
  Sparkles,
} from "lucide-react";
import {
  projectsData,
  skillCategoriesData,
  bioData,
} from "../../data/portfolioData";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  cmd: string;
  output: string | ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: "init",
      output: (
        <div>
          <p className="text-[#454339] font-black uppercase tracking-wider">
            VETRI_SELVAN CLI v2.4.0 [EDITORIAL_ENGINE]
          </p>
          <p className="text-[#454339]/70 text-xs font-serif italic">
            Type{" "}
            <span className="text-[#454339] font-bold underline">'help'</span>{" "}
            for a list of available system commands.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: ReactNode = "";

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-xs font-mono text-[#454339]">
            <p className="font-bold mb-1 uppercase tracking-widest text-[#454339]">
              AVAILABLE COMMANDS:
            </p>
            <p>
              <span className="font-bold w-24 inline-block">projects</span> -
              List all architectural developments
            </p>
            <p>
              <span className="font-bold w-24 inline-block">skills</span> -
              Display technical skills and stack
            </p>
            <p>
              <span className="font-bold w-24 inline-block">bio</span> - Print
              executive summary and metrics
            </p>
            <p>
              <span className="font-bold w-24 inline-block">matrix</span> -
              Render ASCII system architecture diagram
            </p>
            <p>
              <span className="font-bold w-24 inline-block">contact</span> -
              Output primary transmission protocol link
            </p>
            <p>
              <span className="font-bold w-24 inline-block">status</span> -
              Inspect current runtime state
            </p>
            <p>
              <span className="font-bold w-24 inline-block">clear</span> - Flush
              terminal screen output
            </p>
            <p>
              <span className="font-bold w-24 inline-block">exit</span> - Close
              terminal shell
            </p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-2 text-xs font-serif text-[#454339]">
            <p className="font-sans text-[11px] font-black uppercase tracking-wider">
              // ARCHITECTURAL EXPERIMENTS INVENTORY:
            </p>
            {projectsData.map((p) => (
              <div key={p.id} className="pl-2 border-l-2 border-[#454339] py-1">
                <p className="font-bold italic">
                  {p.title}{" "}
                  <span className="font-normal font-sans text-xs">
                    [{p.subtitle}]
                  </span>
                </p>
                <p className="text-[#454339]/80">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-2 text-xs font-sans text-[#454339]">
            <p className="font-bold uppercase tracking-widest">
              // TECHNICAL SKILLS BREAKDOWN:
            </p>
            {skillCategoriesData.map((sc) => (
              <div key={sc.file} className="flex gap-2">
                <span className="font-bold w-36 uppercase text-[11px]">
                  {sc.title}:
                </span>
                <span className="font-serif">
                  {sc.items.map((i) => i.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "bio":
      case "whoami":
        response = (
          <div className="space-y-1 text-xs font-serif text-[#454339]">
            <p className="font-bold text-sm italic">
              {bioData.title} {bioData.highlightedTitle}
            </p>
            <p>{bioData.bioText}</p>
            <p className="font-sans font-bold text-[10px] uppercase tracking-widest mt-1">
              LOCATION: {bioData.location} | AVAILABILITY:{" "}
              {bioData.availability}
            </p>
          </div>
        );
        break;

      case "matrix":
        response = (
          <pre className="text-[#454339] font-mono text-[10px] leading-tight overflow-x-auto py-1">
            {`
  +--------------------------------------------------+
  |               VETRI_SELVAN ENGINE                |
  +------------------------+-------------------------+
                           |
            +--------------+--------------+
            |                             |
      [FRONTEND_V8]                [RUST_WASM_CORE]
      (React/TypeScript)           (BVH Spatial Search)
            |                             |
            +--------------+--------------+
                           |
                    [SHARED_MEMORY]
                 (WebGL Direct Compute)
`}
          </pre>
        );
        break;

      case "status":
        response = (
          <div className="text-xs font-mono text-[#454339] space-y-0.5 font-bold">
            <p>HOST: Cloud Run Container (Port 3000)</p>
            <p>MEMORY_HEAP: 14.2 MB [Allocated]</p>
            <p>THREAD_POOL: 8 Workers Active</p>
            <p>SECURITY: SSL/TLS 1.3 Strict Mode</p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs font-mono text-[#454339]">
            <p className="font-bold">EMAIL: vetrivaishu11@gmail.com</p>
            <p>GITHUB: https://github.com/vetriselvan-pv</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        return;

      default:
        response = (
          <p className="text-red-700 text-xs font-mono font-bold">
            Command not recognized: '<span className="underline">{cmd}</span>'.
            Type 'help' for command list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { cmd, output: response }]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#454339]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-[#ffffff] border-2 border-[#454339] shadow-[10px_10px_0px_#454339] w-full max-w-3xl overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Header */}
        <div className="bg-[#f4f0e6] px-4 py-3 border-b-2 border-[#454339] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div
                className="w-3 h-3 rounded-full bg-[#454339] cursor-pointer"
                onClick={onClose}
              ></div>
              <div className="w-3 h-3 rounded-full bg-[#888888]"></div>
              <div className="w-3 h-3 rounded-full bg-[#cccccc]"></div>
            </div>
            <span className="font-sans text-xs text-[#454339] font-black flex items-center gap-1.5 ml-2 uppercase tracking-widest">
              <TerminalIcon className="w-3.5 h-3.5 text-[#454339]" />
              vetriselvan@editorial-cli:~
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8] border border-[#454339] transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="p-5 font-mono text-xs flex-1 overflow-y-auto space-y-4 bg-[#fdfcf8]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.cmd !== "init" && (
                <div className="flex items-center gap-2 text-[#454339] font-black">
                  <span>vs-shell$&gt;</span>
                  <span className="text-[#454339]">{item.cmd}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Field */}
        <div className="p-3 bg-[#f4f0e6] border-t-2 border-[#454339] flex items-center gap-2 font-mono text-xs">
          <span className="text-[#454339] font-black pl-2">ks-shell$&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-[#454339] focus:outline-none font-mono font-bold"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 bg-[#454339] text-[#fdfcf8] hover:bg-[#333333] transition-colors"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
