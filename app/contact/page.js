import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Abad Ali | Hire MERN Stack & Next.js Developer",
  description: "Get in touch with Abad Ali for freelance projects, software engineering roles, or collaboration inquiries. Available for remote work, internships, and relocation.",
  keywords: [
    "Contact Abad Ali", "Hire Full-Stack Developer", "Hire MERN Developer India", "Abad Ali Email",
    "Freelance Web Developer", "Remote Next.js Developer", "Software Engineer Jobs India", "Collaborate with Abad Ali"
  ],
  authors: [{ name: "Abad Ali", url: "https://abadali.vercel.app/contact" }],
  creator: "Abad Ali",
  alternates: {
    canonical: "https://abadali.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Abad Ali | Collaboration & Freelance Inquiries",
    description: "Reach out to Abad Ali directly for technical consultations, software development collaborations, or job openings.",
    url: "https://abadali.vercel.app/contact",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-contact.png", width: 1200, height: 630, alt: "Contact Abad Ali - Full-Stack Software Developer Channels" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Abad Ali | Full-Stack Web Developer",
    description: "Connect with full-stack developer Abad Ali for technical hiring, freelancing, and open-source contributions.",
    images: ["/opengraph-contact.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactPage() {
  // Injecting custom ContactPage Schema to structure your direct contact channels
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Abad Ali",
      "url": "https://abadali.vercel.app",
      "email": "abadali1707@gmail.com",
      "jobTitle": "Full-Stack Web Developer",
      "sameAs": [
        "https://github.com/Abad-Ali",
        "https://linkedin.com/in/abadali-dev",
        "https://instagram.com/abadali_17"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
