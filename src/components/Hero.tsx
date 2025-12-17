import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-10 pt-16 md:flex-row md:items-center">
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-purple-300 bg-purple-50">
            <Image
              src="/linkedin pfp.jpg"
              alt="Profile photo of Yuvraj Sharma"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-purple-600">
              CS @ Western · Data Science minor
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-purple-950 md:text-2xl">
              Yuvraj Sharma
            </h1>
          </div>
        </div>
        <p className="max-w-xl text-sm text-purple-800 md:text-base">
          I build data-driven products and systems across{" "}
          <span className="font-medium text-purple-950">
            IT, finance, and analytics
          </span>
          , from sports betting bots and ETL pipelines to intelligent
          journaling and recommendation tools.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-purple-800">
          <span className="rounded-full bg-purple-100 px-3 py-1">
            Full-Stack &amp; Data/ML
          </span>
          <span className="rounded-full bg-purple-100 px-3 py-1">
            Sports &amp; Finance Analytics
          </span>
          <span className="rounded-full bg-purple-100 px-3 py-1">
            Tooling &amp; DX
          </span>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="#projects"
            className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white shadow-card transition hover:bg-purple-700"
          >
            View Projects
          </a>
          <a
            href="#resume"
            className="rounded-full border border-purple-300 px-5 py-2 font-medium text-purple-800 transition hover:border-purple-500 hover:bg-purple-50"
          >
            View Resume
          </a>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative mx-auto h-56 max-w-md rounded-3xl bg-gradient-to-br from-brand/40 via-purple-100 to-purple-200/30 p-[1px] shadow-card md:h-72">
          <div className="flex h-full w-full flex-col justify-between rounded-[1.35rem] bg-white p-5 border border-purple-200">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-600">
              Favorite Work
            </p>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-purple-950">
                Algorithmic Trading Model for Sports Betting · Echo · Refine
              </p>
              <p className="text-purple-800">
                Full-stack and data/ML projects that connect real-world
                problems with clean engineering and analytics.
              </p>
            </div>
            <p className="text-[11px] text-purple-500">
              Scroll to explore detailed writeups, reports, and experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


