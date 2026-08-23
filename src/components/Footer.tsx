import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full border-t border-grid-line py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface-container-lowest">
      <div className="flex flex-col gap-4">
        <div className="label-caps text-slate-gray">
          VETRIVENDAN T // INDUSTRIAL AUTOMATION UNIT
        </div>
        <div className="technical-data text-robotic-cyan">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://vetriselvan-pv.github.io/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            vetriselvan_panneerselvam.
          </a>
        </div>
        {/* <div className="flex flex-col gap-1 technical-data text-on-surface-variant mt-4">
          <span>
            Email:{" "}
            <a
              className="hover:text-robotic-cyan underline decoration-robotic-cyan decoration-2 transition-all"
              href="mailto:vendandsp@gmail.com"
            >
              vendandsp@gmail.com
            </a>
          </span>
          <span>
            Phone:{" "}
            <a
              className="hover:text-robotic-cyan underline decoration-robotic-cyan decoration-2 transition-all"
              href="tel:+64221615175"
            >
              +64 221615175
            </a>
          </span>
        </div> */}
      </div>
      <div className="flex flex-wrap gap-6 md:justify-end">
        <a
          className="technical-data text-on-surface-variant hover:text-robotic-cyan underline decoration-robotic-cyan decoration-2 transition-all"
          href="https://www.linkedin.com/in/vetrivendan-t-vetri-8814b9101/"
        >
          LinkedIn
        </a>
        {/* <a
          className="technical-data text-on-surface-variant hover:text-robotic-cyan underline decoration-robotic-cyan decoration-2 transition-all"
          href="#"
        >
          GitHub
        </a>
        <a
          className="technical-data text-on-surface-variant hover:text-robotic-cyan underline decoration-robotic-cyan decoration-2 transition-all"
          href="#"
        >
          ResearchGate
        </a>
        <a
          className="technical-data text-on-surface-variant hover:text-robotic-cyan underline decoration-robotic-cyan decoration-2 transition-all"
          href="#"
        >
          Technical Stack
        </a> */}
      </div>
    </footer>
  );
}
