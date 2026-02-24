import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-s font-mono text-gray-500 uppercase tracking-[0.3em]">
            About Me
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">
            Front-End Developer with around 2 years of experience building{" "}
            <span className="text-accent">scalable, high-performance</span> web
            applications. Skilled in React.js with expertise in blockchain
            dashboards and{" "}
            <span className="text-gray-500">performance optimization</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
