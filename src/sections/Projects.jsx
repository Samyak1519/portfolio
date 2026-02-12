import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div className="text-left">
          <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">
            Selected Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card border-[0.5px] border-white/10 rounded-[2rem] overflow-hidden transition-all hover:border-accent/30"
          >
            <div className="flex flex-col-reverse md:grid md:grid-cols-2">
              {/* Project Info */}
              <div className="p-8 md:p-12 flex flex-col justify-between bg-card z-10">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono border-[0.5px] border-white/10 px-2 py-1 rounded text-gray-400 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-3xl font-bold mb-4">{project.name}</h4>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold bg-white text-black px-6 py-3 rounded-xl hover:bg-accent transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold border-[0.5px] border-white/10 px-6 py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Source <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Visual Preview Section 
                  Added 'p-4 md:p-6' for that "good enough" padding.
                  Set 'aspect-[16/10]' for mobile views. */}
              <div className="relative bg-[#0a0a0a] aspect-16/10 md:aspect-auto md:min-h-full overflow-hidden p-4 md:p-6 border-b md:border-b-0 md:border-l border-white/10">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                  {/* Scaling Wrapper: Forces iframe to render at 1280px width even on small screens */}
                  <div className="absolute inset-0 w-7xl h-200 origin-top-left scale-[0.25] sm:scale-[0.35] md:scale-[0.4] lg:scale-[0.5] group-hover:opacity-100 transition-all duration-700">
                    <iframe
                      src={project.link}
                      title={project.name}
                      className="w-full h-full border-none pointer-events-none opacity-90"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay to ensure smooth hover and prevent iframe interaction issues */}
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
