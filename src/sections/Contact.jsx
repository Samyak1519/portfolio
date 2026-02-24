import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { basicInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="pt-16 md:pt-20 pb-10 border-t border-border scroll-mt-28 md:scroll-mt-20"
    >
      {/* MAIN CTA */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10">
          LET'S BUILD <br />
          <span className="text-accent text-outline">TOGETHER</span>
        </h2>

        {/* EMAIL + PHONE */}
        <div className="flex flex-col items-center gap-5">
          <a
            href={`mailto:${basicInfo.email}`}
            className="flex items-center gap-3 text-2xl md:text-3xl font-light opacity-80 hover:opacity-100 hover:text-accent hover:translate-x-1 transition-all border-b border-white/10 hover:border-accent pb-2"
          >
            <Mail size={20} className="opacity-70" />
            {basicInfo.email}
          </a>

          <a
            href={`tel:${basicInfo.phone}`}
            className="flex items-center gap-3 text-2xl md:text-3xl font-light opacity-80 hover:opacity-100 hover:text-accent hover:translate-x-1 transition-all border-b border-white/10 hover:border-accent pb-2"
          >
            <Phone size={20} className="opacity-70" />
            {basicInfo.phone}
          </a>
        </div>

        {/* SOCIAL LINKS (moved here) */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <a
            href={basicInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/50 hover:text-accent hover:bg-white/5 transition"
          >
            <Github size={18} />
            GitHub
            <ArrowUpRight size={14} />
          </a>

          <a
            href={basicInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/50 hover:text-accent hover:bg-white/5 transition"
          >
            <Linkedin size={18} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* REAL FOOTER */}
      <p className="text-center text-xs text-gray-500/70 font-mono tracking-wider mt-2">
        Built & designed by {basicInfo.name}.
      </p>
    </footer>
  );
};

export default Contact;
