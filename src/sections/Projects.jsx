import { ExternalLink, Folder, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-14 md:py-20 border-t border-border scroll-mt-28 md:scroll-mt-16"
    >
      {/* HEADER */}
      <div className="mb-10 md:mb-14">
        <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
          <Folder size={14} className="text-accent opacity-70 shrink-0" />
          Selected Work
        </h2>

        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
          Featured Projects
        </h3>
      </div>

      {/* PROJECT LIST */}
      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card border border-white/10 rounded-4xl overflow-hidden transition hover:border-accent/30"
          >
            <div className="flex flex-col-reverse md:grid md:grid-cols-20 w-full items-stretch">
              {/* LEFT SIDE */}
              <div className="md:col-span-11 p-6 md:p-8 flex flex-col justify-center bg-card z-10">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[11px] font-mono text-gray-300 bg-white/5 border border-white/10 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h4 className="text-3xl md:text-4xl font-bold mb-3">
                  {project.name}
                </h4>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-4 max-w-xl">
                  {project.description}
                </p>

                {/* DETAILS */}
                <ul className="space-y-2 mb-6 max-w-md">
                  {project.details?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[14px] text-gray-500 leading-relaxed"
                    >
                      <span className="text-accent">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-accent transition"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 transition"
                  >
                    Source <Github size={16} />
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE PREVIEW */}
              <div className="md:col-span-9 relative bg-[#0a0a0a] p-6 flex items-center justify-center border-b md:border-b-0 md:border-l border-white/10">
                <div className="relative w-full aspect-16/10 rounded-lg overflow-hidden border border-white/5 shadow-2xl bg-background">
                  <div
                    className="absolute inset-0 w-[1280px] h-[800px] origin-top-left 
                    scale-[0.25] sm:scale-[0.32] md:scale-[0.26] lg:scale-[0.38] xl:scale-[0.48]"
                  >
                    <iframe
                      src={project.link}
                      title={project.name}
                      className="w-full h-full border-none pointer-events-none"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 bg-transparent z-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
