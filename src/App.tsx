import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogsSection from "./components/BlogsSection";
import ProofOfWorkSection from "./components/ProofOfWorkSection";
import ContactSection from "./components/ContactSection";
import RecommendationsSection from "./components/RecommendationsSection";
import Footer from "./components/Footer";
import TerminalModal from "./components/TerminalModal";
import InspectLogsModal from "./components/InspectLogsModal";
import ResumeModal from "./components/ResumeModal";
import { Project } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [inspectingProject, setInspectingProject] = useState<Project | null>(
    null,
  );
  const [accentTheme, setAccentTheme] = useState<
    "cyan" | "emerald" | "amber" | "purple"
  >("cyan");

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "blogs", "recommendations", "contact"];
      
      let currentSection = "about"; // Default fallback
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section's top is past the middle of the viewport, it's active
          if (rect.top <= window.innerHeight / 2) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccentTheme = () => {
    const themes: Array<"cyan" | "emerald" | "amber" | "purple"> = [
      "cyan",
      "emerald",
      "amber",
      "purple",
    ];
    const nextIdx = (themes.indexOf(accentTheme) + 1) % themes.length;
    setAccentTheme(themes[nextIdx]);
  };

  return (
    <div
      className={`min-h-screen bg-[#fdfcf8] text-[#454339] font-body-md overflow-x-hidden theme-${accentTheme}`}
    >
      {/* Fixed Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onToggleAccentTheme={toggleAccentTheme}
        accentTheme={accentTheme}
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Screen 1: About & Portrait */}
        <AboutSection onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Screen 1 (Bottom): Capability Matrix Skills Bento */}
        <SkillsSection />

        {/* Work Experience */}
        <ExperienceSection />

        {/* Screen 2: Portfolio.sys & Architectural Experiments */}
        <ProjectsSection
          onInspectLogs={(project) => setInspectingProject(project)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* Screen 2 (Bottom): Engineering Logs */}
        <BlogsSection />

        {/* Screen 3: Proof of Work (Achievements & Open Source) */}
        <ProofOfWorkSection />

        {/* Screen 3 (Bottom): Contact Form */}
        <RecommendationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <InspectLogsModal
        project={inspectingProject}
        onClose={() => setInspectingProject(null)}
      />

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
