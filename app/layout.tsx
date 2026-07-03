import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resume Skip — Get back 5 hours a day",
  description:
    "Resume Skip finds jobs that match your dream role, rewrites your resume for each one, and applies for you. Join the waitlist.",
  openGraph: {
    title: "Resume Skip — Get back 5 hours a day",
    description:
      "Stop hunting. Tell us your dream role and we'll find it, tailor your resume, and apply — automatically.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

