import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">NeoPHP</p>
          <p className="mt-1 text-sm text-slate-400">
            Futuristic web development built for growth.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
            📍 Philippines
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              className="text-slate-400 transition hover:text-white"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          © 2026 NeoPHP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
