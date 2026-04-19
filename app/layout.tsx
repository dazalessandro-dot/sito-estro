import type { Metadata } from "next";
import { Geist_Mono, Newsreader, Sora } from "next/font/google";

import "./globals.css";

const displaySans = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

const editorialSerif = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ESTRO",
  description: "Poster-like studio prototype with nine navigable sections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${displaySans.variable} ${mono.variable} ${editorialSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
