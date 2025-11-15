// app/layout.js
import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from './ClientLayout';

// Configure Oswald for headings
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-heading",
  display: "swap",
});

// Configure Open Sans for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
  display: "swap",
});

// ✅ GLOBAL SEO (taken from your PDF)
export const metadata: Metadata = {
  title: "Used Engines & Transmissions Nationwide | US Auto Parts Zone",
  description:
    "Buy OEM-tested used engines and transmissions with low mileage, VIN-matched fitment, warranty included, and fast nationwide delivery. Get a free quote in minutes.",
  keywords: [
    "used engines for sale",
    "used transmissions for sale",
    "OEM used engines",
    "low mileage engine",
    "engine replacement cost",
    "used engine near me",
    "used transmission near me",
    "nationwide auto parts shipping",
    "VIN matched engine fitment",
  ],
  openGraph: {
    title: "Used Engines & Transmissions Nationwide | US Auto Parts Zone",
    description:
      "Buy OEM-tested used engines and transmissions with low mileage, VIN-matched fitment, warranty included, and fast nationwide delivery.",
    type: "website",
    locale: "en_US",
    siteName: "US Auto Parts Zone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Used Engines & Transmissions Nationwide | US Auto Parts Zone",
    description:
      "Buy OEM-tested used engines and transmissions with low mileage and fast nationwide delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
