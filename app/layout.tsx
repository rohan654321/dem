import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
// import { usePathname } from "next/navigation";
import { headers } from "next/headers"; // for SSR route detection

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoParts Zone",
  description: "Quality Used Auto Parts Marketplace",
};

// ✅ Pages where Footer should NOT appear
const noFooterPaths = ["/login", "/register", "/dashboard"];

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // ✅ Get current path safely (works during SSR)
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";

  const hideFooter = noFooterPaths.some((path) => pathname.startsWith(path));

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header onMobileMenuToggle={undefined} />
        {children}
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
