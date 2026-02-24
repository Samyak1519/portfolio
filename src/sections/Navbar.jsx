import { Briefcase, Cpu, Download, FolderGit2, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowResume(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6">
      <div className="flex items-center justify-between w-full max-w-7xl bg-card/60 backdrop-blur-md border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300">
        {/* Logo → Click to top */}
        <button
          onClick={scrollToTop}
          className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-80 transition cursor-pointer"
        >
          SN<span className="text-accent">.</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-s font-mono uppercase tracking-widest text-gray-500">
          <a
            href="#experience"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Briefcase size={14} className="opacity-70" />
            Experience
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <FolderGit2 size={14} className="opacity-70" />
            Projects
          </a>

          <a
            href="#skills"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Cpu size={14} className="opacity-70" />
            Skills
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Let's Talk */}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-black text-xs md:text-sm font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Mail size={16} />
            <span className="hidden md:inline">Let's Talk</span>
          </a>

          {/* Resume */}
          {showResume && (
            <a
              href="/Samyak Resume.pdf"
              download="Samyak_Nimsarkar_Resume.pdf"
              className="flex items-center gap-2 bg-white/10 border border-white/10 text-white text-xs md:text-sm font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Download size={16} className="text-accent" />
              <span>Resume</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
