import config from "../config";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-purple-700">{config.siteTitle}</h1>
        <nav className="space-x-4 hidden md:block">
          {config.navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}