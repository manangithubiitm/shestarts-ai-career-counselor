export default function ProjectsCard({ projects }) {

    return (

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">

                🚀 Recommended Projects

            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                {projects.map((project, index) => (

                    <div
                        key={index}
                        className="border rounded-xl p-5 hover:shadow-md transition"
                    >

                        <h3 className="font-bold text-lg">

                            {project.title}

                        </h3>

                        <p className="mt-3 text-gray-700">

                            {project.description}

                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">

                            {project.skills.map((skill, i) => (

                                <span
                                    key={i}
                                    className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm"
                                >

                                    {skill}

                                </span>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}