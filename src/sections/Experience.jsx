import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em] mb-12">
        Professional Path
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 group"
          >
            <div className="md:col-span-3 text-gray-400 font-mono text-sm">
              {exp.date}
            </div>

            <div className="md:col-span-9 border-l border-border pl-8 relative pb-4">
              {/* Timeline Dot */}
              <div className="absolute -left-1.25 top-0 h-2 w-2 rounded-full bg-border group-hover:bg-accent transition-colors"></div>

              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-accent mb-4 font-medium">{exp.company}</p>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 leading-relaxed flex gap-2"
                  >
                    <span className="text-accent">—</span> {item}
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
