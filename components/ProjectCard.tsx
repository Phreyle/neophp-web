"use client";

import Image from "next/image";
import { useId, useState } from "react";
import Button from "./Button";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  details: string;
  image: string;
  tags: string[];
  alt: string;
  links?: ProjectLink[];
};

export default function ProjectCard({
  title,
  description,
  details,
  image,
  tags,
  alt,
  links = [],
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  return (
    <>
      <figure className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-neon-purple/50 hover:shadow-[0_18px_40px_rgba(15,23,42,0.45)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <figcaption className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <button
              className="text-sm font-semibold text-neon-cyan transition hover:text-white"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              Learn more
            </button>
          </div>
        </figcaption>
      </figure>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-neon-glow sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Project overview
                </p>
                <h3 id={titleId} className="mt-3 text-2xl text-white">
                  {title}
                </h3>
              </div>
              <button
                className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                x
              </button>
            </div>
            <p id={descriptionId} className="mt-4 text-sm text-slate-300">
              {details}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Button>
              ))}
              <Button href="#contact" variant="primary">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
