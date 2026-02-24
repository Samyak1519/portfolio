import { Building2, GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section
      id="education"
      className="py-14 md:py-20 border-t border-border scroll-mt-28 md:scroll-mt-32"
    >
      {/* SECTION TITLE */}
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <GraduationCap size={16} className="text-accent opacity-80" />
        <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em]">
          Education
        </h2>
      </div>

      <div className="space-y-12 md:space-y-16">
        {education.map((edu, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 group"
          >
            {/* DATE */}
            <div className="md:col-span-3 text-gray-400 font-mono text-sm">
              {edu.date}
            </div>

            {/* CONTENT */}
            <div className="md:col-span-9 border-l border-border pl-8 relative pb-4">
              {/* timeline dot */}
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-border group-hover:bg-accent transition-colors"></div>

              {/* DEGREE */}
              <h3 className="text-2xl font-bold leading-snug">
                {edu.degree}{" "}
                <span className="text-gray-400 font-normal">
                  in {edu.field}
                </span>
              </h3>

              {/* INSTITUTE */}
              <div className="flex items-start gap-2 text-accent mt-1 font-medium">
                <Building2 size={14} className="mt-1 shrink-0 opacity-80" />
                <span>{edu.institute}</span>
              </div>

              {/* UNIVERSITY */}
              <p className="text-gray-400 mt-1">{edu.university}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
