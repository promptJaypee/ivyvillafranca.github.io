import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import ThemeToggle from "@/components/ThemeToggle";
import "@/app/globals.css";


const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Ivy Villafranca — Virtual Assistant",
  description:
    "Virtual assistant for founders and small teams. Inbox, calendar, and the small stuff, handled.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body text-[17px] leading-relaxed antialiased">
        <PageLoader>{children}</PageLoader>
        <ThemeToggle />
      </body>
    </html>
  );
}