import React from "react";
import { basicInfo } from "../data/portfolioData";
import { Download, MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-7xl bg-card/50 backdrop-blur-md border-[0.5px] border-white/10 px-6 py-4 rounded-full">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter pl-2">
          SN<span className="text-accent">.</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-s font-mono uppercase tracking-widest text-gray-500">
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Download Resume Button */}
          <a
            href="/Samyak Resume.pdf"
            download="Samyak_Nimsarkar_Resume.pdf"
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-full hover:bg-white/10 transition-colors uppercase tracking-tight"
          >
            <Download size={14} className="text-accent" />
            <span className="hidden sm:inline text-gray-300">Resume</span>
          </a>

          {/* Let's Talk Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-black text-[10px] md:text-xs font-bold px-5 py-2 rounded-full hover:bg-accent transition-colors uppercase tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <MessageCircle size={14} />
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
