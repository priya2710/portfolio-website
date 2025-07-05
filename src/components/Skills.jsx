import config from "../config";

export default function Skills() {
    const { skills } = config;
    return (
        <div className="max-w-7xl mx-auto pl-16 pr-4">
            <section id="skills" className="p-8 bg-white">
                <h2 className="text-2xl font-bold mb-4 ml-3">Skills</h2>
                <div className="space-y-2 ml-6">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="flex items-start gap-4">
                            <h3 className="w-32 text-sm font-semibold capitalize text-gray-700 pt-1">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}