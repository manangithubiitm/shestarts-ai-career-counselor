export default function RoadmapCard({ roadmap }) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
                🗺️ Learning Roadmap
            </h2>

            <div className="space-y-5">

                {roadmap.map((step, index) => (

                    <div
                        key={index}
                        className="flex gap-5 items-start"
                    >

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">

                            {index + 1}

                        </div>

                        <div className="flex-1 rounded-xl bg-gray-50 p-4">

                            <h3 className="font-semibold text-blue-700">

                                {step.phase}

                            </h3>

                            <p className="text-gray-700 mt-2">

                                {step.goal}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}