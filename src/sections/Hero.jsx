import React from "react";
import { basicInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-start pt-32 pb-16">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-accent font-mono text-sm tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
          {basicInfo.name.split(" ")[0]} <br />
          <span className="text-gray-500">{basicInfo.name.split(" ")[1]}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          A <span className="text-white">Frontend Developer</span> based in{" "}
          {basicInfo.location}, specializing in{" "}
          <span className="text-white">Web3</span> and high-performance web
          applications.
        </p>
      </div>

      <div className="mt-12 flex gap-6">
        <a
          href="#projects"
          className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-colors"
        >
          View Projects
        </a>
        <a
          href={basicInfo.socials.linkedin}
          target="_blank"
          className="px-8 py-4 border border-border rounded-full hover:bg-white/5 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
