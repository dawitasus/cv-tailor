export default function CoverLetterPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 4 · Cover Letter</h2>
      <p className="text-sm text-slate-400">
        The AI will generate a tailored cover letter based on the job
        description and your strongest matches. You can then fine-tune the text
        before exporting.
      </p>
      <section className="space-y-2">
        <h3 className="text-sm font-medium text-slate-200">Cover letter</h3>
        <textarea
          className="min-h-[260px] w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm outline-none ring-0 ring-sky-500/60 transition focus:border-sky-500 focus:ring"
          placeholder="Your tailored cover letter draft will appear here…"
        />
      </section>
    </div>
  );
}


