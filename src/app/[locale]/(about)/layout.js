import InsightRoll from "../components/About/InsightRoll";

const insights = [
  "projectsCompleted",
  "yearsFreelancing",
  "clientSatisfaction",
  "subscribers",
  "educativeCourse",
  "technicalReviewer",
  "hackernoonAward",
];

export default function AboutLayout({ children, params }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} locale={params.locale} />
      {children}
    </main>
  );
}
