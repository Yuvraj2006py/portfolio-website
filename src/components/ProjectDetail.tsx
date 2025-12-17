import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function ProjectDetail({ project }: Props) {
  return (
    <main className="mx-auto max-w-3xl space-y-2 py-5">
      <div className="space-y-0.5">
        <p className="text-xs uppercase tracking-[0.25em] text-purple-9500">
          Project
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-purple-950">
          {project.name}
        </h1>
        <p className="text-sm text-purple-800">{project.longSummary}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-purple-800">
        <span className="rounded-full bg-purple-100 px-3 py-1">
          Role: {project.role}
        </span>
        <span className="rounded-full bg-purple-100 px-3 py-1">
          Category: {project.category}
        </span>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-purple-50 px-3 py-1 text-purple-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white shadow-card transition hover:bg-purple-700"
        >
          View on GitHub
        </a>
        <Link
          href="/#projects"
          className="rounded-full border border-purple-300 px-5 py-2 text-purple-800 transition hover:border-purple-400 hover:bg-purple-50"
        >
          Back to Projects
        </Link>
      </div>
      <div className="mt-2 space-y-0.5">
        {project.detailSections.map((section) => (
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


