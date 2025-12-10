export default function ReviewPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 3 · Matches & Gaps</h2>
      <p className="text-sm text-slate-400">
        Once the AI runs, you&apos;ll see how your CV maps to the job
        competencies, plus suggested bullet rewrites and any gaps.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-slate-200">
            Competency matches
          </h3>
          <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 text-sm text-slate-400">
            AI-generated matches between job requirements and your CV will show
            here.
          </div>
        </section>
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-slate-200">
            Suggested CV rewrites
          </h3>
          <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 text-sm text-slate-400">
            Suggested bullet point improvements tailored to the job will appear
            here.
          </div>
        </section>
      </div>
    </div>
  );
}


