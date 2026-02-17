"use client";

import Button from "./Button";
type ServiceCardProps = {
  title: string;
  description: string;
  price?: string;
  features: string[];
  badge?: string;
};

export default function ServiceCard({
  title,
  description,
  price,
  features,
  badge,
}: ServiceCardProps) {
  const handleBook = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("service", title);
    url.hash = "contact";
    window.location.href = url.toString();
  };

  return (
    <article
      className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 transition hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-[0_18px_40px_rgba(15,23,42,0.45)]"
      aria-label={`${title} service package`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {badge ? (
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-slate-300">{description}</p>
      {price ? (
        <p className="text-3xl font-semibold text-white">
          {price}
          <span className="text-sm font-normal text-slate-400"> / project</span>
        </p>
      ) : null}
      <ul className="flex flex-col gap-3 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-neon-cyan"
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>
      <div className="pt-2">
        <Button type="button" variant="outline" onClick={handleBook}>
          Book this service
        </Button>
      </div>
    </article>
  );
}
