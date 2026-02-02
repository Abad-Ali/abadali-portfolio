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

export default function AboutPage() {
  return <AboutClient/>
}