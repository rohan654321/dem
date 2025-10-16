// app/layout.js
import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import ChatBot from "@/components/UI/ChatBot";
import { headers } from "next/headers";
import CallButton from '../components/UI/callButtonFloating';
// Configure Oswald for headings
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
  variable: "--font-heading",
  display: "swap",
});

// Configure Open Sans for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"], // Regular
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoParts Zone",
  description: "Quality Used Auto Parts Marketplace",
};

const noFooterPaths = ["/login", "/register", "/dashboard"];

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";

  const hideFooter = noFooterPaths.some((path) => pathname.startsWith(path));

  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} antialiased`}>
        <Header onMobileMenuToggle={undefined} />
        {children}
        {!hideFooter && <Footer />}
         <CallButton />
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}