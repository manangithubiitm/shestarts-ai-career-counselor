export default function RecommendationCard({ career }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h2 className="text-xl font-semibold text-gray-900">
        Recommended Career Path
      </h2>

      <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-6">

        <p className="text-sm uppercase tracking-wide text-green-700">
          Best Match
        </p>

        <h3 className="mt-2 text-3xl font-bold text-green-800">
          {career}
        </h3>

      </div>

      <p className="mt-6 text-gray-600 leading-7">
        Based on your background, experience, career goals and current skills,
        this is the career path that best aligns with your profile.
      </p>

    </div>
  );
}