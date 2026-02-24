import { experiences } from "../data/portfolioData";
import { Briefcase, Building2 } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 md:py-20 scroll-mt-28 md:scroll-mt-20 border-t border-border"
    >
      {/* Title with icon */}
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <Briefcase size={16} className="text-accent opacity-80" />
        <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em]">
          Professional Path
        </h2>
      </div>

      <div className="space-y-12 md:space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 group"
          >
            {/* Date */}
            <div className="md:col-span-3 text-gray-400 font-mono text-sm">
              {exp.date}
            </div>

            {/* Content */}
            <div className="md:col-span-9 border-l border-border pl-8 relative pb-4">
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-border group-hover:bg-accent transition-colors"></div>

              {/* Role */}
              <h3 className="text-2xl font-bold">{exp.role}</h3>

              {/* Company with icon */}
              <div className="flex items-center gap-2 text-accent mb-4 font-medium">
                <Building2 size={14} className="opacity-80" />
                {exp.company}
              </div>

              {/* Description */}
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 leading-relaxed grid grid-cols-[auto_1fr] gap-3"
                  >
                    <span className="text-accent">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
