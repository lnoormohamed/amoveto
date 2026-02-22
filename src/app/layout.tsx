import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "AMoveTo — International Relocation Advisory",
  description:
    "AMoveTo helps affluent individuals and families plan international moves with destination strategy, residency planning, and white-glove relocation support.",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
