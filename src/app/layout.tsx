import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hassan Tariq — Full Stack Developer",
  description:
    "Full Stack Developer at Exact Solutions Poland LTD. Building web applications, backend systems and APIs across the MERN stack and Next.js.",
  keywords: ["Full Stack Developer", "MERN Stack", "Backend Developer", "Node.js", "TypeScript", "Next.js", "Hassan Tariq"],
  authors: [{ name: "Hassan Tariq" }],
  openGraph: {
    title: "Hassan Tariq — Full Stack Developer",
    description: "Full Stack Developer building reliable web applications and APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-[var(--font-geist)]">{children}</body>
    </html>
  );
}
