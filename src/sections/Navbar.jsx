const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-7xl bg-card/50 backdrop-blur-md border border-border px-6 py-3 rounded-full">
        <div className="text-xl font-bold tracking-tighter">
          SN<span className="text-accent">.</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#experience" className="hover:text-accent transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-accent transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-accent transition-colors">
            Skills
          </a>
        </div>

        <a
          href="#contact"
          className="bg-white text-black text-xs font-bold px-5 py-2 rounded-full hover:bg-accent transition-colors uppercase tracking-tight"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
