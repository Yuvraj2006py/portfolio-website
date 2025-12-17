import Link from "next/link";
import type { Experience } from "@/data/experience";

interface Props {
  experience: Experience;
}

export function ExperienceDetail({ experience }: Props) {
  return (
    <main className="mx-auto max-w-3xl space-y-2 py-5">
      <div className="space-y-0.5">
        <p className="text-xs uppercase tracking-[0.25em] text-purple-9500">
          Experience
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-purple-950">
          {experience.role}
        </h1>
        <p className="text-sm text-purple-600">{experience.organization}</p>
        {experience.location && (
          <p className="text-xs text-purple-400">{experience.location}</p>
        )}
        <p className="text-xs text-purple-500">
          {experience.startDate || "Start date TBD"} –{" "}
          {experience.endDate === "Present" ? "Present" : experience.endDate}
        </p>
      </div>
      <p className="text-sm text-purple-800">{experience.summary}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {experience.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-purple-50 px-3 py-1 text-purple-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/#experience"
          className="rounded-full border border-purple-300 px-5 py-2 text-purple-200 transition hover:border-purple-400 hover:bg-purple-50"
        >
          Back to Experience
        </Link>
      </div>
      <div className="mt-2 space-y-0.5">
        {experience.detailSections.map((section) => (
          <section
            key={section.heading}
            className="grid gap-y-0.5 gap-x-2 md:grid-cols-[130px,minmax(0,1fr)] md:items-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              {section.heading}
            </p>
            <div className="space-y-1">
              <p className="text-sm leading-snug text-purple-600">
                {section.body}
              </p>
              {section.bullets && (
                <ul className="list-disc space-y-0.5 pl-5 text-sm text-purple-600">
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


