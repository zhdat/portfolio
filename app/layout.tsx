import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Calliste RAVIX ⋅ Software Engineer Student ⋅ Portfolio",
  description: "Student in Software Engineering at ENSICAEN, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugu.variable} font-sans antialiased h-full bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
