export default function ExportPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 5 · Export</h2>
      <p className="text-sm text-slate-400">
        Choose your style preset and export your tailored CV and cover letter as
        DOCX or PDF files.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-[2fr,3fr]">
        <section className="space-y-3">
          <h3 className="text-sm font-medium text-slate-200">Style preset</h3>
          <div className="space-y-2 text-sm text-slate-300">
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2">
              Minimalist (default)
            </div>
            <div className="rounded-lg border border-slate-900 bg-slate-950/20 px-3 py-2 text-slate-500">
              Modern (coming soon)
            </div>
            <div className="rounded-lg border border-slate-900 bg-slate-950/20 px-3 py-2 text-slate-500">
              Corporate (coming soon)
            </div>
          </div>
        </section>
        <section className="space-y-3">
          <h3 className="text-sm font-medium text-slate-200">Export</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <button className="rounded-lg border border-sky-500/60 bg-sky-500/10 px-4 py-2 font-medium text-sky-100 transition hover:bg-sky-500/20">
              Download CV (DOCX)
            </button>
            <button className="rounded-lg border border-sky-500/60 bg-sky-500/10 px-4 py-2 font-medium text-sky-100 transition hover:bg-sky-500/20">
              Download CV (PDF)
            </button>
            <button className="rounded-lg border border-sky-500/60 bg-sky-500/10 px-4 py-2 font-medium text-sky-100 transition hover:bg-sky-500/20">
              Download Cover Letter (DOCX)
            </button>
            <button className="rounded-lg border border-sky-500/60 bg-sky-500/10 px-4 py-2 font-medium text-sky-100 transition hover:bg-sky-500/20">
              Download Cover Letter (PDF)
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}


