import React from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="mb-10">
        <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em] mb-2">
          Selected Work
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
          Featured Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card border-[0.5px] border-white/10 rounded-[1.5rem] overflow-hidden shadow-sm"
          >
            {/* 55/45 Split using a 20-column grid for pixel-perfect precision */}
            <div className="flex flex-col-reverse md:grid md:grid-cols-20 w-full items-stretch">
              {/* Project Info (11/20 = 55% width) */}
              <div className="md:col-span-11 p-6 md:p-10 flex flex-col justify-center bg-card z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono border-[0.5px] border-white/10 px-2 py-1 rounded text-gray-400 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-3xl md:text-4xl font-bold mb-3">
                  {project.name}
                </h4>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold bg-white text-black px-6 py-2.5 rounded-xl hover:bg-accent transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold border-[0.5px] border-white/10 px-6 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Source <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Visual Preview (9/20 = 45% width) */}
              <div className="md:col-span-9 relative bg-[#0a0a0a] p-6 flex items-center justify-center border-b md:border-b-0 md:border-l border-white/10">
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/5 shadow-2xl bg-[#050505]">
                  <div className="absolute inset-0 w-[1280px] h-[800px] origin-top-left scale-[0.28] sm:scale-[0.35] md:scale-[0.28] lg:scale-[0.4] xl:scale-[0.5]">
                    <iframe
                      src={project.link}
                      title={project.name}
                      className="w-full h-full border-none pointer-events-none opacity-100"
                      loading="lazy"
                    />
                  </div>
                  {/* Interaction guard to prevent accidental iframe scrolling */}
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
