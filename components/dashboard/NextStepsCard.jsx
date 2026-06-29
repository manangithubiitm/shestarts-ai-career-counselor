export default function NextStepsCard({ nextSteps }) {

    return (

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">

                ✅ Next Steps

            </h2>

            <div className="space-y-4">

                {nextSteps.map((step, index) => (

                    <div
                        key={index}
                        className="flex gap-4 items-start border rounded-xl p-4"
                    >

                        <div className="text-green-600 text-xl">

                            ✓

                        </div>

                        <p className="text-gray-700">

                            {step}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}