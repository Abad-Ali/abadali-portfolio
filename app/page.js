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
    images: [{ url: "/opengraph-home.png", width: 1200, height: 630, alt: "Portfolio screenshot" }],
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

export default function HomePage() {
  return <HomeClient />
}