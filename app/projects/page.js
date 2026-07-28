import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: "Projects Gallery | MERN Stack & Next.js Applications by Abad Ali",
  description: "Explore a showcase of production-ready full-stack applications, real-time web engines, and custom task management workflows engineered by Abad Ali using the MERN stack and Next.js.",
  keywords: [
    "Abad Ali Projects", "Full-Stack Project Showcase", "MERN Stack Applications", "Next.js Live Projects",
    "Web Development Portfolio Gallery", "React.js Open Source Code", "Node.js REST API Examples", "Real-Time Web Apps"
  ],
  authors: [{ name: "Abad Ali", url: "https://abadali.vercel.app/projects" }],
  creator: "Abad Ali",
  alternates: {
    canonical: "https://abadali.vercel.app/projects",
  },
  openGraph: {
    title: "Abad Ali Project Gallery | Production-Ready Web Apps",
    description: "Review a diverse collection of live web applications featuring assignment systems, real-time sync, and secured REST API backends engineered by Abad Ali.",
    url: "https://abadali.vercel.app/projects",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-projects.png", width: 1200, height: 630, alt: "Abad Ali Full-Stack Software Engineering Projects Showcase" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abad Ali | Full-Stack Projects Gallery",
    description: "Inspect live production web apps, code architectures, and developer workflows built using the Next.js and MERN framework ecosystem.",
    images: ["/opengraph-projects.png"],
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

export default function ProjectsPage() {
  // Injecting custom CollectionPage Schema optimized for portfolio galleries
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Abad Ali Software Development Projects Portfolio",
    "description": "A curated collection of full-stack engineering work, software applications, and technical scripts built by Abad Ali.",
    "url": "https://abadali.vercel.app/projects",
    "about": {
      "@type": "Person",
      "name": "Abad Ali",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}
