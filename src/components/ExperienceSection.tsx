import Link from "next/link";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="mb-6">
          <h2 className="text-lg font-semibold tracking-tight text-purple-950 md:text-xl">
            Experience
          </h2>
          <p className="mt-1 text-sm text-purple-600 md:text-base">
            A quick view of my experience in IT, finance, and data-driven roles.
          </p>
        </div>
      <div className="space-y-5">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="rounded-2xl border border-purple-200 bg-purple-50/40 p-4 transition hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-100/70"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-purple-950 md:text-base">
                  {exp.role}
                </h3>
                <p className="text-xs text-purple-600">{exp.organization}</p>
              </div>
              <p className="text-xs text-purple-500">
                {exp.startDate || "Start date TBD"} –{" "}
                {exp.endDate === "Present" ? "Present" : exp.endDate}
              </p>
            </div>
            <p className="mt-2 text-xs text-purple-700 md:text-sm">
              {exp.summary}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-purple-700 md:text-sm">
              {exp.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {exp.relatedProjectSlugs && exp.relatedProjectSlugs.length > 0 && (
              <p className="mt-2 text-[11px] text-purple-600 md:text-xs">
                See also:{" "}
                {exp.relatedProjectSlugs.map((slug, idx) => (
                  <span key={slug}>
                    {idx > 0 && ", "}
                    <Link
                      href={`/projects/${slug}`}
                      className="text-purple-700 hover:text-purple-950"
                    >
                      {slug}
                    </Link>
                  </span>
                ))}
              </p>
            )}
            <div className="mt-3 text-xs">
              <Link
                href={`/experience/${exp.id}`}
                className="text-purple-700 hover:text-purple-950"
              >
                View more detail →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


