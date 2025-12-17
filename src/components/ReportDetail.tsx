import Link from "next/link";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export function ReportDetail({ report }: Props) {
  return (
    <main className="mx-auto max-w-3xl space-y-2 py-5">
      <div className="space-y-0.5">
        <p className="text-xs uppercase tracking-[0.25em] text-purple-500">
          Report
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-purple-950">
          {report.title}
        </h1>
        <p className="text-sm text-purple-800">{report.summary}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-800">
          {report.context}
        </span>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-800">
          {report.domain}
        </span>
        {report.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-purple-50 px-3 py-1 text-purple-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {report.githubUrl && (
          <a
            href={report.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white shadow-card transition hover:bg-purple-700"
          >
            View on GitHub
          </a>
        )}
        {report.pdfUrl && (
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-purple-300 px-5 py-2 text-purple-800 transition hover:border-purple-400 hover:bg-purple-50"
          >
            Open PDF
          </a>
        )}
        <Link
          href="/#reports"
          className="rounded-full border border-purple-300 px-5 py-2 text-purple-800 transition hover:border-purple-400 hover:bg-purple-50"
        >
          Back to Reports
        </Link>
      </div>
      <div className="mt-2 space-y-0.5">
        {report.detailSections.map((section) => (
          <section
            key={section.heading}
            className="grid gap-y-0.5 gap-x-2 md:grid-cols-[130px,minmax(0,1fr)] md:items-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
              {section.heading}
            </p>
            <div className="space-y-1">
              <p className="text-sm leading-snug text-purple-800">
                {section.body}
              </p>
              {section.bullets && (
                <ul className="list-disc space-y-0.5 pl-5 text-sm text-purple-800">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}


