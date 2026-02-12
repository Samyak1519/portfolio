import React from "react";
import { Github, ExternalLink, Download } from "lucide-react";
import { basicInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start pt-32 pb-16">
      <div className="space-y-6">
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.9]">
          {basicInfo.name.split(" ")[0]} <br />
          <span className="text-gray-500 opacity-50">
            {basicInfo.name.split(" ")[1]}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          A <span className="text-white">Frontend Developer</span> based in{" "}
          {basicInfo.location}, specializing in{" "}
          <span className="text-white font-medium">Web3</span> and
          high-performance web applications.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        {/* Primary CTA */}
        <a
          href="#projects"
          className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-all duration-300"
        >
          View Projects
        </a>

        {/* GitHub Button */}
        <a
          href={basicInfo.socials.github}
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group"
        >
          GitHub{" "}
          <Github
            size={18}
            className="group-hover:text-accent transition-colors"
          />
        </a>

        {/* LinkedIn Button */}
        <a
          href={basicInfo.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group"
        >
          LinkedIn{" "}
          <ExternalLink
            size={18}
            className="group-hover:text-accent transition-colors"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
