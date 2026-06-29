export default function CoursesCard({ courses }) {

    return (

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">

                📚 Recommended Courses

            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                {courses.map((course, index) => (

                    <div
                        key={index}
                        className="border rounded-xl p-5 hover:shadow-md transition"
                    >

                        <h3 className="font-bold text-lg">

                            {course.course}

                        </h3>

                        <p className="text-blue-600 mt-2">

                            {course.platform}

                        </p>

                        <p className="text-gray-600 mt-4">

                            {course.reason}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}