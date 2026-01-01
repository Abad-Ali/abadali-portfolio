import ProjectsClient from './ProjectsClient'

export const metadata = {
  title: "Projects - Abad Ali | Full-Stack Developer Portfolio",
  description: "Showcase of projects by Abad Ali, built with React, Next.js, Node.js, and the MERN stack.",
  keywords: "Abad Ali projects, full-stack developer, React, Next.js, Node.js, MERN, web development portfolio",
  authors: [{ name: "Abad Ali" }],
  creator: "Abad Ali",
  openGraph: {
    title: "Projects - Abad Ali | Full-Stack Developer Portfolio",
    description: "Explore Abad Ali’s projects demonstrating full-stack web development skills with React, Next.js, Node.js, and MERN stack.",
    url: "https://abadali.vercel.app/projects",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-projects.jpg", width: 1200, height: 630, alt: "Projects page screenshot" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient/>
}