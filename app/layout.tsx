import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://neophp-web.vercel.app/"
  ),
  title: {
    default: "NeoPHP",
    template: "%s | NeoPHP",
  },
  description:
    "NeoPHP builds modern, lightning-fast web experiences with neon-fueled design and conversion-ready engineering.",
  openGraph: {
    title: "NeoPHP",
    description:
      "NeoPHP builds modern, lightning-fast web experiences with neon-fueled design and conversion-ready engineering.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/hero-grid.svg",
        width: 1200,
        height: 630,
        alt: "NeoPHP neon grid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoPHP",
    description:
      "NeoPHP builds modern, lightning-fast web experiences with neon-fueled design and conversion-ready engineering.",
    images: ["/images/hero-grid.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
