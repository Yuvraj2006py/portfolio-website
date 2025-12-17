export function ResumeSection() {
  return (
    <section id="resume">
      <div className="mb-6">
        <h2 className="text-lg font-semibold tracking-tight text-purple-950 md:text-xl">
          Resume
        </h2>
        <p className="mt-1 text-sm text-purple-600 md:text-base">
          View my resume directly below or download a PDF copy.
        </p>
      </div>
      <div className="mb-4 flex flex-wrap gap-3 text-sm">
        <a
          href="/Yuvraj Sharma.pdf"
          target="_blank"
          rel="noreferrer"
          download
          className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white shadow-card transition hover:bg-purple-700"
        >
          Download Resume (PDF)
        </a>
      </div>
      <div className="overflow-hidden rounded-2xl border border-purple-200 bg-purple-50/40">
        <object
          data="/Yuvraj Sharma.pdf"
          type="application/pdf"
          className="h-[600px] w-full"
        >
          <p className="p-4 text-sm text-purple-700">
            Your browser can&apos;t display embedded PDFs.{" "}
            <a
              href="/Yuvraj Sharma.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 hover:text-purple-800"
            >
              Open the resume in a new tab
            </a>
            .
          </p>
        </object>
      </div>
    </section>
  );
}


