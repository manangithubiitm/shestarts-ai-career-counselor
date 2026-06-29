export default function SkillGapCard({
    strengths,
    skillGaps,
}) {
    return (
        <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

                <h2 className="text-2xl font-bold mb-5">
                    💪 Strengths
                </h2>

                <div className="flex flex-wrap gap-3">

                    {strengths.map((strength, index) => (

                        <span
                            key={index}
                            className="rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-medium"
                        >
                            {strength}
                        </span>

                    ))}

                </div>

            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">

                <h2 className="text-2xl font-bold mb-5">
                    📚 Skill Gaps
                </h2>

                <div className="flex flex-wrap gap-3">

                    {skillGaps.map((skill, index) => (

                        <span
                            key={index}
                            className="rounded-full bg-red-100 text-red-700 px-4 py-2 text-sm font-medium"
                        >
                            {skill}
                        </span>

                    ))}

                </div>

            </div>

        </div>
    );
}