import { useState, FormEvent } from "react";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [identity, setIdentity] = useState("");
  const [returnPath, setReturnPath] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!identity || !returnPath || !message) return;

    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setIdentity("");
        setReturnPath("");
        setMessage("");
      }, 3500);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className=" pt-20 pb-16 border-[#454339] bg-[#f4f0e6]"
    >
      <div className="max-w-[1120px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 border-b-2 border-[#454339] pb-6">
          <span className="font-sans text-[11px] font-bold text-[#454339] uppercase block mb-2 tracking-[0.2em]">
            PLATE 06 // TRANSMISSION & INQUIRIES
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#454339] mb-3">
            Initialize Communication
          </h2>
          <p className="font-serif italic text-base text-[#454339]/80 max-w-2xl leading-relaxed">
            Interested in high-concurrency systems engineering or complex
            software architecture? Send a direct dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Signal Info */}
          <div>
            <div className="space-y-6">
              {/* Email Direct Trigger */}
              <a
                href="mailto:vetrivaishu11@gmail.com"
                className="flex items-center gap-4 group p-3.5 bg-[#ffffff] border-2 border-[#454339] shadow-[4px_4px_0px_#454339] hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 bg-[#454339] text-[#fdfcf8] flex items-center justify-center shrink-0 border border-[#454339]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#454339]/60">
                    DISPATCH EMAIL
                  </p>
                  <p className="font-serif text-base text-[#454339] font-black group-hover:underline">
                    vetrivaishu11@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Protocol Form Container */}
          <div className="bg-[#ffffff] p-2 border-2 border-[#454339] shadow-[8px_8px_0px_#454339]">
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5 bg-[#ffffff]"
            >
              <div className="space-y-1.5">
                <label className="font-sans text-xs uppercase font-bold tracking-[0.2em] text-[#454339] block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="your_name"
                  className="w-full bg-[#fdfcf8] border-2 border-[#454339] p-3 text-[#454339] font-serif text-sm focus:outline-none glow-border transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-sans text-xs uppercase font-bold tracking-[0.2em] text-[#454339] block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={returnPath}
                  onChange={(e) => setReturnPath(e.target.value)}
                  placeholder="engineer@domain.com"
                  className="w-full bg-[#fdfcf8] border-2 border-[#454339] p-3 text-[#454339] font-serif text-sm focus:outline-none glow-border transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-sans text-xs uppercase font-bold tracking-[0.2em] text-[#454339] block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Request details..."
                  className="w-full bg-[#fdfcf8] border-2 border-[#454339] p-3 text-[#454339] font-serif text-sm focus:outline-none glow-border transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full font-sans text-xs py-4 flex items-center justify-center gap-2 transition-all uppercase font-bold tracking-[0.2em] mt-4 border-2 border-[#454339] ${
                  status === "success"
                    ? "bg-[#454339] text-[#fdfcf8]"
                    : "bg-[#454339] text-[#fdfcf8] hover:bg-[#333333] shadow-[4px_4px_0px_#454339]"
                }`}
              >
                {status === "sending" && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Protocol
                    Active...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Transmission Complete
                  </>
                )}
                {status === "idle" && (
                  <>
                    Execute Send <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
