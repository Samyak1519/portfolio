import React from "react";
import { Cpu, Sparkles } from "lucide-react";

const Skills = () => {
  const techStack = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MySQL",
    "Java",
    "AWS",
    "Selenium",
  ];
  const aiTools = ["ChatGPT", "Google Gemini", "Claude", "Perplexity"];

  return (
    <section id="skills" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Tech */}
        <div className="bg-card border border-border p-8 rounded-4xl">
          <div className="flex items-center gap-3 mb-8 text-accent">
            <Cpu size={24} />
            <h3 className="text-xl font-bold text-white">Core Stack</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:border-accent/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI Workflow */}
        <div className="bg-card border border-border p-8 rounded-4xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8 text-accent">
            <Sparkles size={24} />
            <h3 className="text-xl font-bold text-white">AI-Driven Workflow</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-xl text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
          {/* Decorative Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
