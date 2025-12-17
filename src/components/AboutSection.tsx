export function AboutSection() {
  return (
    <section id="about">
      <div className="mb-6">
        <h2 className="text-lg font-semibold tracking-tight text-purple-950 md:text-xl">
          About
        </h2>
        <p className="mt-1 text-sm text-purple-600 md:text-base">
          A bit more about who I am and what I like working on.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-purple-800 md:text-base">
          <p>
            I&apos;m a Computer Science student at Western University, but a lot of how I think comes from outside the classroom. I&apos;ve always enjoyed watching and playing sports and spending time with games, not just for fun, but because I like understanding{" "}
            <span className="font-medium text-purple-950">
              patterns, strategies, and why certain decisions work better than others
            </span>
            .
          </p>
          <p>
            Whether it&apos;s sports, games, or everyday systems, I&apos;m naturally curious about how things fit together and how small changes can have a big impact. I enjoy{" "}
            <span className="font-medium">breaking things down</span>,{" "}
            <span className="font-medium">spotting inefficiencies</span>, and{" "}
            <span className="font-medium">finding smarter ways to approach problems</span>. That curiosity is what usually pulls me into building things in my free time.
          </p>
          <p>
            I&apos;m most energized when I&apos;m working on something that feels{" "}
            <span className="font-medium text-purple-950">
              real and useful, where there&apos;s room to think, experiment, and improve over time
            </span>
            . I value clarity, thoughtful decision-making, and work that actually matters to the people using it.
          </p>
        </div>
        <div className="space-y-4 text-sm text-purple-800">
          <div className="rounded-2xl border border-purple-200 bg-purple-50/40 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              Highlights
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>CS @ Western University · Data Science minor.</li>
              <li>
                Experience across IT, finance, and data-driven projects.
              </li>
              <li>
                Comfortable with Python, TypeScript/JavaScript, SQL, and modern
                data/ML tooling.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


