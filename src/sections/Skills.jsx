import { Cpu, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { aiTools } from "../data/portfolioData";

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
      <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em] mb-12">
        Technical Arsenal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Frontend Box */}
        <div className="bg-card border border-border p-8 rounded-4xl hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-accent shrink-0" size={24} />
            <h3 className="text-lg font-bold">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontend.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[13px] font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Backend & Systems */}
        <div className="bg-card border border-border p-8 rounded-4xl hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="text-accent shrink-0" size={24} />
            <h3 className="text-lg font-bold">Backend & Core</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {backend.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[13px] font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Automation & Tools */}
        <div className="bg-card border border-border p-8 rounded-4xl hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-accent shrink-0" size={24} />
            <h3 className="text-lg font-bold">Automation & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {devopsTesting.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[13px] font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Tools Bar */}
      <div className="bg-card border border-border p-8 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-7">
        <div className="flex items-center gap-3">
          <Sparkles className="text-accent shrink-0" size={20} />
          <span className="text-md font-medium">AI-Enhanced Workflow:</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-1">
          {aiTools.map((tool) => (
            <span
              key={tool}
              className="text-[13px] text-white/85 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 hover:border-accent/40 hover:bg-white/10 transition"
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
