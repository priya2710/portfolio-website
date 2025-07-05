import config from "../config";

export default function Education() {
  const education = config.education;

  return (
    <div className="max-w-7xl mx-auto pl-16 pr-4">
      <section id="education" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-10 ml-4">Education</h2>
        <div className="relative border-l-2 border-purple-600 ml-4 pl-6 space-y-10">
          {education.map((edu, i) => (
            <div key={i} className="relative">
              <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
              <h3 className="text-lg font-semibold text-gray-900">{edu.degree} — {edu.institution}</h3>
              {edu.score && (
                <p className="text-sm italic text-gray-600 mb-2">{edu.score}</p>
              )}
              {edu.details && (
                <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                  {edu.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}