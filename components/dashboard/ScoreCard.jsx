export default function ScoreCard({
  score,
  reason,
  transitionTime,
}) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h2 className="text-xl font-semibold text-gray-900">
        Career Readiness Score
      </h2>

      <div className="mt-6 flex items-center justify-center">

        <div className="h-40 w-40 rounded-full border-8 border-blue-500 flex items-center justify-center">

          <span className="text-6xl font-extrabold text-blue-600">
            {score}
          </span>

        </div>

      </div>

      <p className="text-center text-base text-gray-500 mt-3">
        out of 100
      </p>

      <div className="mt-6">

        <h3 className="font-semibold text-gray-900">
          Why this score?
        </h3>

        <p className="mt-2 text-gray-600 leading-7">
          {reason}
        </p>

      </div>

      <div className="mt-6 p-5 rounded-xl bg-blue-50">

        <p className="text-sm text-gray-600">
          Estimated Transition Time
        </p>

        <p className="font-bold text-blue-700 mt-2 text-2xl">
          {transitionTime}
        </p>

      </div>

    </div>
  );
}