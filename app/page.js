import HomeClient from './HomeClient'

export const metadata = {
  title: "Abad Ali - Full-Stack Developer Portfolio",
  description: "Full-Stack Developer portfolio showcasing projects in React, Next.js, Node.js, and MERN stack. Open for internships, jobs, and collaborations.",
  keywords: "full-stack developer, React, Next.js, Node.js, MERN, JavaScript, portfolio",
  authors: [{ name: "Abad Ali" }],
  creator: "Abad Ali",
  openGraph: {
    title: "Abad Ali - Full-Stack Developer Portfolio",
    description: "Portfolio of Abad Ali, featuring projects built with React, Next.js, Node.js, and MERN stack.",
    url: "https://abadali.vercel.app",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-home.jpg", width: 1200, height: 630, alt: "Portfolio screenshot" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />
}