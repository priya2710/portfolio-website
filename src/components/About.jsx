import config from "../config";

export default function About() {
  const { name, role, description } = config.about;

  return (
    <section id="about" className="p-6 md:p-12 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        {/* Left Text Block */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Hi, I'm <span className="text-purple-600">{name}</span>
          </h1>
          <h2 className="text-xl text-gray-700 font-medium mb-4">{role}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right Image Block */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
          <img
            src="/profile.jpg"
            alt="Supriya Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}