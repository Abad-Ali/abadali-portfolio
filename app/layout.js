import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeWrapper from "@/components/ThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // 1. Tells Next.js to auto-resolve relative images/paths across all routes
  metadataBase: new URL("https://vercel.app"),

  // 2. Fallback title structure for unexpected new sub-routes
  title: {
    default: "Abad Ali | Full-Stack Web Developer & MERN Engineer",
    template: "%s | Abad Ali",
  },

  description:
    "Portfolio of Abad Ali, a Full-Stack Developer skilled in React, Next.js, Node.js, and the MERN stack. Open to internships, collaborations, and software development opportunities.",

  authors: [{ name: "Abad Ali", url: "https://vercel.app" }],
  creator: "Abad Ali",

  // 3. Excellent search crawler instructions for rich visual results
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  // 4. Global open-graph structural definitions
  openGraph: {
    siteName: "Abad Ali Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* Move all client logic into ThemeWrapper */}
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>

      </body>
    </html>
  );
}
