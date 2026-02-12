export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-semibold">Samyak</h1>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
