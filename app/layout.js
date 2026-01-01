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
  title: { default: "Abad Ali | Full-Stack Developer", template: "%s | Abad Ali" },
  description: "Portfolio of Abad Ali, a Full-Stack Developer skilled in React, Next.js, Node.js, and the MERN stack. Open to relocation, internships, and collaborations.",
  authors: [{ name: "Abad Ali", url: "https://abadali.vercel.app" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://abadali.vercel.app"),
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
