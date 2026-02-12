import React from "react";
import { ArrowUpRight } from "lucide-react";
import { basicInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-border">
      <div className="text-center mb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
          LET'S BUILD <br />{" "}
          <span className="text-accent text-outline">TOGETHER</span>
        </h2>

        {/* Updated Contact Detail section in Contact.jsx */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={`mailto:${basicInfo.email}`}
            className="text-2xl md:text-3xl font-light hover:text-accent transition-colors border-b border-white/10 hover:border-accent pb-2"
          >
            {basicInfo.email}
          </a>
          <a
            href={`tel:${basicInfo.phone}`}
            className="text-2xl md:text-3xl font-light hover:text-accent transition-colors border-b border-white/10 hover:border-accent pb-2"
          >
            {basicInfo.phone}
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-mono">
        <div className="flex gap-8">
          <a
            href={basicInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            GITHUB <ArrowUpRight size={14} />
          </a>
          <a
            href={basicInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            LINKEDIN <ArrowUpRight size={14} />
          </a>
        </div>
        <p>© 2026 {basicInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
