import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Centauryy Project | Articles & Resources",
  description: "Your dreams aren't too big — just unexplored. Discover articles and resources to guide your steps to the world out there.",
  keywords: ["articles", "resources", "technology", "design", "learning"],
  authors: [{ name: "Centauryy" }],
  openGraph: {
    title: "Centauryy Project | Articles & Resources",
    description: "Your dreams aren't too big — just unexplored. Discover articles and resources.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centauryy Project",
    description: "Articles & Resources for the curious mind",
  },
  icons: {
    icon: "/asset/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-space antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
