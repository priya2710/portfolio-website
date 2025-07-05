import config from "../config";

export default function Experience() {
  const jobs = config.experience;

  return (
    <section id="experience" className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {jobs.map((job, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <p className="text-sm text-gray-600 italic mb-1">
              {job.role} — {job.location} • {job.duration}
            </p>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              {job.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}