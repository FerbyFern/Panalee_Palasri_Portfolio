import type { Metadata } from "next";
import { DM_Mono, Bodoni_Moda, Syne } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panalee Palasri — UX/UI Designer",
  description: "Portfolio of Panalee Palasri, a UX/UI Designer based in Bangkok.",
};

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${syne.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
