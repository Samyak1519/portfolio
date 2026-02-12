import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>

            <p className="text-gray-600 mb-4">{p.desc}</p>

            <div className="text-sm text-gray-500 mb-6">
              {p.tech.join(" • ")}
            </div>

            <div className="flex gap-6 text-sm font-medium">
              <a href={p.live}>Live →</a>
              <a href={p.github}>GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
