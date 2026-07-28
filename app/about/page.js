import AboutClient from './AboutClient';

export const metadata = {
  title: "About Abad Ali | Full-Stack Developer",
  description: "Discover the professional background, core technical skills, and educational qualifications of Abad Ali. Specializing in Next.js, real-time MERN applications, and REST API architectures.",
  keywords: [
    "About Abad Ali", "Abad Ali Education", "BCA Student Shahjahanpur", "MERN Stack Skills",
    "Next.js Developer India", "Abad Ali Experience", "Web Developer Biography", "Software Engineering Profile"
  ],
  authors: [{ name: "Abad Ali", url: "https://abadali.vercel.app/about" }],
  creator: "Abad Ali",
  alternates: {
    canonical: "https://abadali.vercel.app/about",
  },
  openGraph: {
    title: "About Abad Ali | Full-Stack Developer Biography",
    description: "Learn about Abad Ali's background, core tech stack competencies, and academic timeline at Sun Institute of Management and Technology.",
    url: "https://abadali.vercel.app/about",
    siteName: "Abad Ali Portfolio",
    images: [{ url: "/opengraph-about.png", width: 1200, height: 630, alt: "About Abad Ali - Full-Stack Developer Technical Profile" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Abad Ali | Full-Stack Web Developer",
    description: "Explore the technical expertise, certifications, and educational background of developer Abad Ali.",
    images: ["/opengraph-about.png"],
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

export default function AboutPage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Abad Ali",
      "url": "https://abadali.vercel.app/about",
      "jobTitle": "Full-Stack Software Developer",
      "nationality": "Indian",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Sun Institute of Management and Technology (MJPRU)",
        "location": {
          "@type": "Place",
          "name": "Shahjahanpur, India"
        }
      },
      "knowsAbout": [
        "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", 
        "REST API Design", "Task Workflows", "JavaScript Architecture"
      ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
