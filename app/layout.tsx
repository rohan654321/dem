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

export const metadata: Metadata = {
  title: "AutoParts Zone",
  description: "Quality Used Auto Parts Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}