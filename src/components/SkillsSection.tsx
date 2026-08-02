import { useState } from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import { Cpu, Database, Cloud, Shield, Wrench, CheckCircle2, Globe, Server, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const mosaicSkills = [
    { name: 'Systems Architecture', icon: Cpu, desc: 'Microservices, Distributed Actor Models, Event Sourcing' },
    { name: 'DB Optimization', icon: Database, desc: 'Index Tuning, Connection Pooling, Query Plan Analysis' },
    { name: 'Cloud Native', icon: Cloud, desc: 'Kubernetes, Serverless Edge Runtimes, Terraform IaC' },
    { name: 'Cryptographic Sec', icon: Shield, desc: 'Elliptic Curve Cryptography, Zero-Trust Architecture' }
  ];

  return (
    <section id="skills" className="bg-[#f4f0e6] py-20 lg:py-20 border-y-2 border-[#454339]">
      <div className="px-6 lg:px-10 max-w-[1120px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 border-b-2 border-[#454339] pb-6">
          <div>
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-10 bg-[#454339]"></div>
                <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#454339] uppercase">
                  PLATE 01 // TECHNICAL SKILLS
                </span>
              </div>
              
              <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#454339] leading-[1.05] tracking-tight mb-2">
                Technical Skills & Tech Stack
              </h2>
          </div>
          <p className="font-serif italic text-base text-[#454339]/80 max-w-sm text-left md:text-right">
            Systematic engineering discipline applied across full-stack distributed topologies.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategoriesData.map((category, index) => {
            let Icon;
            if (category.icon === 'web') Icon = Globe;
            else if (category.icon === 'dns') Icon = Server;
            else if (category.icon === 'terminal') Icon = Terminal;
            else Icon = Wrench;

            return (
              <div key={category.file} className="bg-[#ffffff] border-2 border-[#454339] p-6 shadow-[6px_6px_0px_#454339] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="code-window-header mb-6 flex items-center justify-between border-b border-[#454339]/10 pb-3">
                    <span className="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#454339]/60 ml-8">{category.file}</span>
                    <Icon className="w-4 h-4 text-[#454339]" />
                  </div>
                  <h4 className="font-sans text-xs font-bold text-[#454339] mb-5 tracking-[0.2em] uppercase">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => {
                      const isSelected = selectedTag === item.name;
                      return (
                        <span
                          key={item.name}
                          onClick={() => setSelectedTag(isSelected ? null : item.name)}
                          className={`font-sans text-xs border px-3 py-1.5 transition-all cursor-pointer select-none font-semibold ${
                            isSelected
                              ? 'border-[#454339] bg-[#454339] text-[#fdfcf8] font-bold'
                              : 'border-[#454339]/30 bg-[#fdfcf8] text-[#454339] hover:border-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8]'
                          }`}
                        >
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
