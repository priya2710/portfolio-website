import config from "../config";

export default function Header() {
  return (
    <header className="w-full bg-white fixed top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-end items-center px-6 py-4">
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
        <a
          href="./resume.pdf" // Replace with the actual path to your resume file
          className="ml-4 bg-purple-600 text-white font-medium py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}