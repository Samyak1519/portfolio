import { ArrowRight, Download, ExternalLink, Github } from "lucide-react";
import { basicInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-28 md:pt-32 pb-10 md:pb-16 border-t border-border">
      {/* TEXT */}
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

      <div className="mt-14 flex flex-col items-start gap-6">
        {/* PRIMARY */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-full 
  hover:bg-accent transition-all duration-300 
  flex items-center gap-2 group"
          >
            View Projects
            <ArrowRight
              size={18}
              className="hidden md:inline transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="/Samyak Resume.pdf"
            download="Samyak_Nimsarkar_Resume.pdf"
            className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(0,200,255,0.25)]"
          >
            Resume <Download size={18} />
          </a>
        </div>

        {/* SECONDARY */}
        <div className="flex items-center gap-5 text-sm text-gray-400 pl-1.5">
          <a
            href={basicInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>

          <span className="text-gray-600">|</span>

          <a
            href={basicInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
