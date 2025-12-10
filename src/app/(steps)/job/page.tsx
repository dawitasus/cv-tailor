export default function JobPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 1 · Job TOR</h2>
      <p className="text-sm text-slate-400">
        Paste the job description or upload the Terms of Reference (TOR). We’ll
        extract the role, responsibilities, and key competencies.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-slate-200">
            Paste job description
          </h3>
          <textarea
            className="min-h-[260px] w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm outline-none ring-0 ring-sky-500/60 transition focus:border-sky-500 focus:ring"
            placeholder="Paste the full job description or TOR here..."
          />
        </section>
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-slate-200">
            Or upload a file
          </h3>
          <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-slate-800 bg-slate-950/40 p-6 text-center text-sm text-slate-400">
            File upload coming next (PDF / DOCX)
          </div>
        </section>
      </div>
    </div>
  );
}


