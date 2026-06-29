import Link from "next/link";

export default function DashboardHeader({ name }) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            AI Career Report
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Welcome, {name}
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Here is your personalized AI Career Analysis generated from your
            assessment. Review your strengths, identify skill gaps, follow the
            recommended learning roadmap, and take the suggested next steps to
            confidently achieve your career goals.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <Link
            href="/"
            className="rounded-xl border border-gray-300 px-5 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-100"
          >
            ← Home
          </Link>

          <Link
            href="/assessment"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          >
            New Assessment →
          </Link>

        </div>

      </div>

    </div>
  );
}