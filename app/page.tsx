import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Suspense } from "react";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://neophp-web.vercel.app/";

export const metadata: Metadata = {
  title: "NeoPHP | Futuristic Web Development Studio",
  description:
    "NeoPHP is a full-stack studio delivering web, app, and game development with practical DevOps support.",
  openGraph: {
    title: "NeoPHP | Futuristic Web Development Studio",
    description:
      "NeoPHP is a full-stack studio delivering web, app, and game development with practical DevOps support.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/images/hero-grid.svg`,
        width: 1200,
        height: 630,
        alt: "NeoPHP neon grid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoPHP | Futuristic Web Development Studio",
    description:
      "NeoPHP is a full-stack studio delivering web, app, and game development with practical DevOps support.",
    images: [`${siteUrl}/images/hero-grid.svg`],
  },
};

const services = [
  {
    title: "Web Design",
    description: "Modern UI systems that turn visits into action.",
    features: [
      "Brand-aligned layouts",
      "Conversion-first UX",
      "Design system handoff",
    ],
  },
  {
    title: "Web Development",
    description: "Fast, scalable sites built with production-grade stacks.",
    features: [
      "Next.js + TypeScript",
      "SEO-ready structure",
      "Performance optimization",
    ],
  },
  {
    title: "App Development",
    description:
      "Mobile and web apps that are intuitive, stable, and future-proof.",
    features: [
      "Cross-platform builds",
      "API + database setup",
      "Testing and QA",
    ],
  },
  {
    title: "Game Development",
    description: "Interactive experiences for brands, launches, and demos.",
    features: [
      "Unity + web builds",
      "Gameplay prototyping",
      "Optimization & polish",
    ],
  },
  {
    title: "DevOps Support",
    description: "Lightweight DevOps to keep launches stable and fast.",
    features: [
      "Deployment pipelines",
      "Monitoring setup",
      "Release checklists",
    ],
    badge: "Add-on",
  },
];

const projects = [
  {
    title: "Nova Commerce",
    description:
      "A neon-infused storefront with instant search and optimized checkout.",
    details:
      "Commerce experience built for speed, featuring optimized product discovery and a mobile-first checkout flow.",
    image: "/images/project-1.svg",
    alt: "Nova Commerce interface preview",
    tags: ["Ecommerce", "Next.js", "SEO"],
    links: [
      { label: "View case study", href: "#" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    title: "Pulse Analytics",
    description:
      "Real-time dashboards and data storytelling for fintech operations.",
    details:
      "Real-time analytics suite with role-based dashboards, KPI alerts, and accessible data visualization.",
    image: "/images/project-2.svg",
    alt: "Pulse Analytics dashboard preview",
    tags: ["SaaS", "Data", "UX"],
    links: [
      { label: "Product demo", href: "#" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    title: "Atlas Studio",
    description:
      "Immersive portfolio for a creative agency with parallax motion.",
    details:
      "Immersive studio site featuring cinematic motion, a modular CMS, and optimized performance.",
    image: "/images/project-3.svg",
    alt: "Atlas Studio portfolio preview",
    tags: ["Brand", "Motion", "Design"],
    links: [
      { label: "Live site", href: "#" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
];

const team = [
  {
    name: "Ghesandra Perlas",
    role: "Social Manager",
    bio: "Handles content, branding, promotions, and lead generation with UI/UX support.",
    image: "/images/team-1.svg",
  },
  {
    name: "Hua Shi Lei Abalos",
    role: "Full-stack Developer",
    bio: "Builds web, app, and game solutions with deployment and testing in mind.",
    image: "/images/team-2.svg",
  },
  {
    name: "Peter Tabrilla",
    role: "Client Solutions",
    bio: "Leads discovery, defines scope and pricing, and manages agreements and payments.",
    image: "/images/team-3.svg",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "NeoPHP",
      url: siteUrl,
      logo: `${siteUrl}/images/neophp-mark.svg`,
      sameAs: [
        "https://github.com",
        "https://www.linkedin.com",
        "https://dribbble.com",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@neophp.dev",
          areaServed: "Worldwide",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Full-stack development",
      provider: {
        "@type": "Organization",
        name: "NeoPHP",
      },
      serviceType:
        "Web design, web development, app development, game development, DevOps support",
    },
    ...projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      image: `${siteUrl}${project.image}`,
      creator: {
        "@type": "Organization",
        name: "NeoPHP",
      },
    })),
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Script
        id="neophp-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="content" className="mx-auto w-full max-w-6xl px-6">
        <section className="relative pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="absolute inset-0 -z-10 opacity-70">
            <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neon-purple/20 blur-[160px]" />
            <div className="absolute right-10 top-24 h-[380px] w-[380px] rounded-full bg-neon-cyan/20 blur-[140px]" />
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
                Full-stack studio
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-6xl">
                NeoPHP builds modern websites, apps, and interactive
                experiences that launch fast and grow with you.
              </h1>
              <p className="mt-6 text-base text-slate-300 md:text-lg">
                We deliver web design, web development, app development, game
                builds, and practical DevOps so your product ships smoothly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
                <Button href="#contact" className="font-bold">
                  Book a Discovery Call
                </Button>
                <Button href="#services" variant="outline">
                  Explore Services
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
                {[
                  { label: "10+", text: "Years of craft" },
                  { label: "5", text: "Core disciplines" },
                  { label: "24h", text: "Response time" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/5 p-4 text-left sm:text-left"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {stat.label}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-neon-purple/30 via-neon-blue/30 to-neon-cyan/20 blur-2xl" />
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-6 neon-ring">
                <Image
                  src="/images/hero-grid.svg"
                  alt="Futuristic neon grid"
                  width={560}
                  height={420}
                  className="animate-float"
                  priority
                />
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Current Focus
                  </p>
                  <p className="mt-2 text-lg text-white">
                    Web, app, game builds + light DevOps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-24 border-t border-white/10 py-20"
          aria-labelledby="services-title"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
                Services
              </p>
              <h2
                id="services-title"
                className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              >
                Full-stack services for digital products and experiences.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              From design to deployment, we cover the spectrum of what a
              full-stack team can deliver.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 border-t border-white/10 py-20"
          aria-labelledby="projects-title"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-pink">
                Case projects
              </p>
              <h2
                id="projects-title"
                className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              >
                Electric digital products that perform in the real world.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              Each project pairs bold visual systems with measurable SEO and
              conversion outcomes
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section
          id="team"
          className="scroll-mt-24 border-t border-white/10 py-20"
          aria-labelledby="team-title"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
                Team
              </p>
              <h2
                id="team-title"
                className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              >
                Three specialists. One full-stack delivery team.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              We stay lean and focused, blending strategy, design, and
              engineering without handoffs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/10 py-20"
          aria-labelledby="contact-title"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-purple">
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              >
                Ready to launch a neon-grade website?
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                Share your goals and timelines. We will craft a tailored plan
                and send next steps within one business day.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Email
                  </p>
                  <a className="text-white" href="mailto:hello@neophp.dev">
                    neophp.solution@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Social
                  </p>
                  <div className="flex gap-4">
                    <a
                      className="text-slate-300 transition hover:text-white"
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="text-slate-300 transition hover:text-white"
                      href="https://www.facebook.com/hercrafts.sk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                    <a
                      className="text-slate-300 transition hover:text-white"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 neon-ring">
              <Suspense fallback={<div className="text-sm text-slate-300">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
