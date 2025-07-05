import config from "../config";

export default function Experience() {
    const jobs = config.experience;

    return (
        <div className="max-w-7xl mx-auto pl-16 pr-4">
            <section id="experience" className="p-8 bg-white">
                <h2 className="text-2xl font-bold mb-10 ml-4">Experience</h2>
                <div className="relative border-l-2 border-purple-600 ml-4 pl-6 space-y-10">
                    {jobs.map((job, i) => (
                        <div key={i} className="relative">
                            {/* Content */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">{job.duration}</p>
                                <h3 className="text-lg font-semibold text-gray-900">{job.role} — {job.company}</h3>
                                <p className="text-sm italic text-gray-600 mb-2">{job.location}</p>
                                <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                                    {job.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}