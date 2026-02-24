import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="py-20 border-t border-border">
      <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em] mb-12">
        Education
      </h2>

      <div className="space-y-16">
        {education.map((edu, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 group"
          >
            {/* YEAR COLUMN */}
            <div className="md:col-span-3 text-gray-400 font-mono text-sm">
              {edu.date}
            </div>

            {/* CONTENT */}
            <div className="md:col-span-9 border-l border-border pl-8 relative pb-4">
              <div className="absolute -left-1.25 top-0 h-2 w-2 rounded-full bg-border group-hover:bg-accent transition-colors"></div>

              <h3 className="text-2xl font-bold">
                {edu.degree}{" "}
                <span className="text-gray-400 font-normal">
                  in {edu.field}
                </span>
              </h3>

              <p className="text-accent mb-1 font-medium">{edu.institute}</p>
              <p className="text-gray-400">{edu.university}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
