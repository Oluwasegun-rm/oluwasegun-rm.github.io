import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { profile, siteUrl } from "@/lib/content/site";
import { themeScript } from "@/components/ui/theme-toggle";
import "@/styles/main.scss";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profile.name,
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: profile.name,
    description: profile.description,
    images: [{ url: profile.photo, width: 480, height: 480, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: profile.name,
    description: profile.description,
    images: [profile.photo],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0f" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
