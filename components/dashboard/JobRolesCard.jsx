export default function JobRolesCard({ jobRoles }) {

    return (

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">

                💼 Recommended Job Roles

            </h2>

            <div className="flex flex-wrap gap-3">

                {jobRoles.map((role, index) => (

                    <span
                        key={index}
                        className="rounded-full bg-indigo-100 text-indigo-700 px-5 py-2 font-medium"
                    >

                        {role}

                    </span>

                ))}

            </div>

        </div>

    );

}