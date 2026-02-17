"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-PH", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime(); // run immediately
    const intervalId = setInterval(updateTime, 1000); // every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
        href="#content"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="/images/neophp-mark.svg"
            alt="NeoPHP logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-lg font-semibold tracking-wide text-white">
            NeoPHP
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm uppercase tracking-[0.2em] text-slate-300 transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            {time}
          </span>
          <div className="hidden md:block">
            <Button href="#contact" variant="outline">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
