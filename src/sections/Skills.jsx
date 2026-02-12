export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-3">Languages</h3>
            <p className="text-gray-600">C, Java, JavaScript</p>
          </div>

          {/* Frontend */}
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-3">Frontend</h3>
            <p className="text-gray-600">
              React.js, HTML, CSS, Tailwind, Bootstrap, Material UI
            </p>
          </div>

          {/* Backend & Tools */}
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-3">Backend & Tools</h3>
            <p className="text-gray-600">
              Node.js, Express, MySQL, GitHub, AWS, Vercel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
