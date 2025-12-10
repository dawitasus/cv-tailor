export default function StepsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              CV & Cover Letter Tailoring
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Upload your job description and CV, then tailor them in minutes.
            </p>
          </div>
        </header>
        <main className="flex-1 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}


