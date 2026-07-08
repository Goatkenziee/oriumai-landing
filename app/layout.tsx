import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oriumai — Intelligent Business Solutions",
  description:
    "Oriumai delivers cutting-edge AI-powered solutions to transform your business operations, boost productivity, and drive growth.",
  openGraph: {
    title: "Oriumai — Intelligent Business Solutions",
    description:
      "Transform your business with AI-powered solutions from Oriumai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
