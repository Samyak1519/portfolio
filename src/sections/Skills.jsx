import React from "react";
import { Cpu, Sparkles, ShieldCheck, Globe } from "lucide-react";
import { techStack, aiTools } from "../data/portfolioData";

const Skills = () => {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap CSS",
    "Tailwind CSS",
    "React.js",
  ];
  const backend = ["C", "Java", "MySQL", "Node.js", "Express.js", "RestAPI"];
  const devopsTesting = [
    "AWS",
    "GitHub",
    "Vercel",
    "Selenium",
    "TestNG",
    "Appium",
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-12">
        Technical Arsenal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Frontend Box */}
        <div className="bg-card border border-border p-8 rounded-[2rem] hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-accent shrink-0" size={24} />
            <h3 className="text-lg font-bold">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontend.map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Backend & Systems */}
        <div className="bg-card border border-border p-8 rounded-[2rem] hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="text-accent shrink-0" size={24} />
            <h3 className="text-lg font-bold">Backend & Core</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {backend.map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Automation & Tools */}
        <div className="bg-card border border-border p-8 rounded-[2rem] hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-accent shrink-0" size={24} />
            <h3 className="text-lg font-bold">Automation & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {devopsTesting.map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Tools Bar */}
      <div className="bg-card border border-border p-6 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Sparkles className="text-accent shrink-0" size={20} />
          <span className="text-sm font-medium">AI-Enhanced Workflow:</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {aiTools.map((tool) => (
            <span
              key={tool}
              className="text-xs text-white/80 bg-white/5 px-4 py-1 rounded-full border border-white/5"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
