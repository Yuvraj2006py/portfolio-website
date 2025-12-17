"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const filters = ["All", "Full-Stack", "Data/ML", "Tooling", "Other"] as const;

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const favoriteProjects = useMemo(
    () => projects.filter((p) => p.favorite),
    []
  );

  const otherProjects = useMemo(
    () =>
      projects.filter(
        (p) => !p.favorite && (activeFilter === "All" || p.category === activeFilter)
      ),
    [activeFilter]
  );

  return (
    <section id="projects">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-purple-950 md:text-xl">
            Projects
          </h2>
          <p className="mt-1 text-sm text-purple-600 md:text-base">
            A selection of full-stack, data/ML, and tooling projects from my
            GitHub.
          </p>
        </div>
        <div className="hidden gap-2 text-xs text-purple-600 md:flex">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-1 transition-colors ${
                activeFilter === filter
                  ? "border-purple-500 bg-purple-100 text-purple-950"
                  : "border-purple-200 hover:border-purple-400 hover:text-purple-950"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
            Favorites
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {favoriteProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col rounded-2xl border border-purple-500/40 bg-purple-50/60 p-4 shadow-card transition hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-100"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-purple-950 md:text-base">
                    {project.name}
                  </h3>
                  <span className="rounded-full bg-purple-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-700">
                    Favorite
                  </span>
                </div>
                <p className="mb-3 text-xs text-purple-800 md:text-sm">
                  {project.shortSummary}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
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
                    href={`/projects/${project.slug}`}
                    className="text-purple-700 hover:text-purple-950"
                  >
                    View details
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
            More projects
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {otherProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col rounded-2xl border border-purple-200 bg-purple-50/40 p-4 transition hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-100/70"
              >
                <h3 className="mb-1 text-sm font-semibold text-purple-950 md:text-base">
                  {project.name}
                </h3>
                <p className="mb-3 text-xs text-purple-800 md:text-sm">
                  {project.shortSummary}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
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
                    href={`/projects/${project.slug}`}
                    className="text-purple-800 hover:text-purple-950"
                  >
                    View details
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


