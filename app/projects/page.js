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
    locale: "en",
    type: "website",
  },
  robots: {
    index: true,              // allow search engines to index the page
    follow: true,             // allow search engines to follow links
    nocache: false,           // allow search engines to cache the page
    noimageindex: false,      // allow images to be indexed
    nosnippet: false,         // allow search engines to show snippets in search results
    maxSnippet: -1,           // no limit on snippet length
    maxImagePreview: "large", // show large image previews in search results
    maxVideoPreview: -1,      // no limit on video previews
  },
};

export default function ProjectsPage() {
  return <ProjectsClient/>
}