import config from "../config";

export default function Resume() {
  return (
    <section id="resume" className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <a
        href={config.resumeLink}
        download
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}