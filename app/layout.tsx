import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Metrics Weekly Digest — Automated Reports for Founders",
  description: "Connects to Stripe, Google Analytics, and your database to generate automated weekly metric reports with AI-powered insights and recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d4b99513-68c7-4056-bb84-9d7fa241cd2f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
