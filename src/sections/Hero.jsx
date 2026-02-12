import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-40 pb-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mb-6"
      >
        {portfolioData.name}
      </motion.h1>

      <p className="text-2xl text-gray-600 mb-4">
        {portfolioData.role} — React & Web Applications
      </p>

      <p className="text-gray-500 mb-10">{portfolioData.location}</p>

      <div className="flex justify-center gap-4 mb-8">
        <a
          href="#projects"
          className="px-8 py-4 bg-black text-white rounded-xl shadow-lg hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-8 py-4 border rounded-xl hover:bg-gray-100 transition"
        >
          Download Resume
        </a>
      </div>

      <div className="flex justify-center gap-8 text-gray-600">
        <a href={portfolioData.github}>GitHub</a>
        <a href={portfolioData.linkedin}>LinkedIn</a>
      </div>
    </section>
  );
}
