import Link from "next/link";
import { reports } from "@/data/reports";

export function ReportsSection() {
  return (
    <section id="reports">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-purple-950 md:text-xl">
            Reports &amp; Writing
          </h2>
          <p className="mt-1 text-sm text-purple-600 md:text-base">
            Technical reports, analyses, and notebooks that go deeper into how
            I think about data and systems.
          </p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {reports.map((report) => (
          <article
            key={report.slug}
            className="flex flex-col rounded-2xl border border-purple-200 bg-purple-50/40 p-4 transition hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-100/70"
          >
            <h3 className="mb-1 text-sm font-semibold text-purple-950 md:text-base">
              {report.title}
            </h3>
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-purple-500">
              {report.context} · {report.domain}
            </p>
            <p className="mb-3 text-xs text-purple-700 md:text-sm">
              {report.summary}
            </p>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {report.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-purple-100 px-2 py-0.5 text-[11px] text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between text-xs">
              <Link
                href={`/reports/${report.slug}`}
                className="text-purple-700 hover:text-purple-950"
              >
                View details
              </Link>
              <div className="flex gap-3">
                {report.githubUrl && (
                  <a
                    href={report.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    GitHub →
                  </a>
                )}
                {report.pdfUrl && (
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    PDF →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


