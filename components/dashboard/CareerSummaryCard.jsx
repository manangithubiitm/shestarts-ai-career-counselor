export default function CareerSummaryCard({ summary }) {
  const sentences = summary.split(". ").filter(Boolean);

  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 2) {
    paragraphs.push(sentences.slice(i, i + 2).join(". "));
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl">📝</span>

        <h2 className="text-2xl font-bold text-gray-900">
          Career Summary
        </h2>
      </div>

      <div className="space-y-5 text-gray-700 leading-8">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph.trim()}
            {paragraph.endsWith(".") ? "" : "."}
          </p>
        ))}
      </div>
    </div>
  );
}