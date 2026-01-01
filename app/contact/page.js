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
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient/>
}