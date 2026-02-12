import React from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em] mb-4">
            Selected Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h3>
        </div>
        <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
          A collection of web applications focused on UI/UX, performance, and
          modern tech stacks.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card border border-border rounded-[2rem] overflow-hidden transition-all hover:border-accent/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Project Info */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono border border-border px-2 py-1 rounded text-gray-400 uppercase"
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
                    className="flex items-center gap-2 text-sm font-bold border border-border px-6 py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Source <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Visual Placeholder / Image */}
              <div className="bg-linear-to-br from-accent/20 to-transparent min-h-75 flex items-center justify-center p-8">
                <div className="w-full aspect-video bg-[#0a0a0a] rounded-xl border border-border shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center italic text-gray-700">
                  {/* You can replace this with an img tag later */}
                  Preview of {project.name}
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
