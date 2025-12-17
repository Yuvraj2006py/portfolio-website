export function ContactSection() {
  return (
    <section id="contact">
      <div className="mb-6">
        <h2 className="text-lg font-semibold tracking-tight text-purple-950 md:text-xl">
          Contact
        </h2>
        <p className="mt-1 text-sm text-purple-600 md:text-base">
          Open to roles in software, data, and analytics, especially where I
          can work with real-world datasets and help ship useful products.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <a
          href="mailto:yuvisha06@gmail.com"
          className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white shadow-card transition hover:bg-purple-700"
        >
          Email me
        </a>
        <a
          href="https://github.com/Yuvraj2006py"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-purple-300 px-4 py-2 text-purple-800 transition hover:border-purple-500 hover:bg-purple-50"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yuvrajsharm/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-purple-300 px-4 py-2 text-purple-800 transition hover:border-purple-500 hover:bg-purple-50"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}


