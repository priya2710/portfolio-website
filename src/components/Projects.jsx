import config from "../config";

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {config.projects.map((proj, i) => (
          <div key={i} className="border rounded p-4 bg-white shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{proj.title}</h3>
            <p className="mb-1">{proj.description}</p>
            <p className="text-sm text-gray-600">{proj.stack.join(", ")}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-sm mt-2 inline-block underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}