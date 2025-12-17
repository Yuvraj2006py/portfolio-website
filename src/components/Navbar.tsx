"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Home", anchor: "hero" },
  { href: "#projects", label: "Projects", anchor: "projects" },
  { href: "#reports", label: "Reports", anchor: "reports" },
  { href: "#experience", label: "Experience", anchor: "experience" },
  { href: "#about", label: "About", anchor: "about" },
  { href: "#resume", label: "Resume", anchor: "resume" },
  { href: "#playground", label: "Playground", anchor: "playground" },
  { href: "#contact", label: "Contact", anchor: "contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="sticky top-0 z-20 border-b border-purple-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-purple-950 md:text-base hover:text-purple-700 transition-colors"
          >
            Yuvraj Sharma
          </Link>
          <ul className="hidden gap-3 text-xs font-medium text-purple-600 md:flex md:text-sm">
            {navItems.map((item) => {
              const linkHref = isHomePage ? item.href : `/#${item.anchor}`;
              return (
                <li key={item.href}>
                  {isHomePage ? (
                    <a
                      href={item.href}
                      className="rounded-full px-3 py-1 text-purple-600 transition-colors hover:bg-purple-100 hover:text-purple-700"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={linkHref}
                      className="rounded-full px-3 py-1 text-purple-600 transition-colors hover:bg-purple-100 hover:text-purple-700"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}


