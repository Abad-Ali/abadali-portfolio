import HomeClient from './HomeClient';

export const metadata = {
  title: "Abad Ali | Full-Stack Web Developer & MERN Engineer Portfolio",
  description: "Portfolio of Abad Ali, a Full-Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Explore MERN stack projects, real-time web applications, and developer workflows.",
  keywords: [
    "Abad Ali", "Full-Stack Developer", "MERN Stack Engineer", "Next.js Developer", 
    "React.js Developer", "Node.js Developer", "MongoDB Developer", "Software Engineer Portfolio", 
    "Web Developer Shahjahanpur", "BCA Developer India", "JavaScript Developer"
  ],
  authors: [{ name: "Abad Ali", url: "https://abadali.vercel.app" }],
  creator: "Abad Ali",
  alternates: {
    canonical: "https://abadali.vercel.app",
  },
  openGraph: {
    title: "Abad Ali | Full-Stack Web Developer Portfolio",
    description: "Explore production-ready MERN stack applications, clean developer workflows, and real-time systems built by Abad Ali.",
    url: "https://abadali.vercel.app",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-home.png", width: 1200, height: 630, alt: "Abad Ali Full-Stack Developer Portfolio Home Screen" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abad Ali | Full-Stack Developer",
    description: "Portfolio of Abad Ali showcasing modern web applications built with Next.js, Express, and MongoDB.",
    images: ["/opengraph-home.png"],
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

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abad Ali",
    "url": "https://abadali.vercel.app",
    "email": "abadali1707@gmail.com",
    "jobTitle": "Full-Stack Web Developer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Sun Institute of Management and Technology (MJPRU)"
    },
    "knowsAbout": ["Full-Stack Development", "MERN Stack", "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    "sameAs": [
      "https://github.com/Abad-Ali",
      "https://linkedin.com/in/abadali-dev",
      "https://instagram.com/abadali_17"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
