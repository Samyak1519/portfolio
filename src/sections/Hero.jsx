import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  ChevronDown,
} from "lucide-react";
import { basicInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-[80vh]
        flex flex-col justify-center
        pt-24 md:pt-36
        pb-20
        border-t border-border
      "
    >
      {/* TEXT */}
      <div className="space-y-6">
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]">
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

      {/* BUTTON AREA */}
      <div className="mt-12 md:mt-14 flex flex-col items-start gap-6">
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-all duration-300 flex items-center gap-2 group"
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

      {/* SCROLL TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <a href="#about" className="flex flex-col items-center group">
          {/* Mobile Text */}
          <span className="md:hidden text-[10px] tracking-[0.3em] text-gray-500 mb-3">
            SCROLL DOWN
          </span>

          {/* Vertical line that touches divider */}
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
