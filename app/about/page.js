import AboutClient from './AboutClient'

export const metadata = {
  title: "About - Abad Ali | Full-Stack Developer Portfolio",
  description: "Learn more about Abad Ali, Full-Stack Developer skilled in React, Next.js, Node.js, MERN stack, and web technologies.",
  keywords: "about Abad Ali, full-stack developer, React, Next.js, Node.js, MERN, web development, portfolio",
  authors: [{ name: "Abad Ali" }],
  creator: "Abad Ali",
  openGraph: {
    title: "About - Abad Ali | Full-Stack Developer Portfolio",
    description: "About Abad Ali — skills, experience, and projects in web development using React, Next.js, Node.js, and MERN stack.",
    url: "https://abadali.vercel.app/about",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-about.jpg", width: 1200, height: 630, alt: "About page screenshot" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient/>
}