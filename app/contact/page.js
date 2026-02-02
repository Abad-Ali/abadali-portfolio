import ContactClient from './ContactClient'

export const metadata = {
  title: "Contact - Abad Ali | Full-Stack Developer Portfolio",
  description: "Get in touch with Abad Ali, Full-Stack Developer skilled in React, Next.js, Node.js, MERN stack. Open for internships, collaborations, and projects.",
  keywords: "contact Abad Ali, full-stack developer, React, Next.js, Node.js, MERN, portfolio, open to relocation",
  authors: [{ name: "Abad Ali" }],
  creator: "Abad Ali",
  openGraph: {
    title: "Contact - Abad Ali | Full-Stack Developer Portfolio",
    description: "Reach out to Abad Ali to discuss projects, internships, or collaborations.",
    url: "https://abadali.vercel.app/contact",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-contact.jpg", width: 1200, height: 630, alt: "Contact page screenshot" }],
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

export default function ContactPage() {
  return <ContactClient/>
}