# Abad Ali Portfolio

<p align="center">

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 16" />

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />

<img src="https://img.shields.io/badge/TailwindCSS-Used-38BDF8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />

<img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel Deployment" />

</p>

A modern, responsive, and SEO-optimized developer portfolio built with **Next.js 16** and **React 19** using the **App Router**. This portfolio showcases my projects, technical skills, certifications, education, and provides an easy way for visitors to get in touch through an integrated contact form.

The application is designed with a strong focus on performance, accessibility, user experience, and search engine optimization. It includes smooth animations, dynamic routing, dark/light theme support, and is deployed on Vercel.

---

## Live Demo

<p align="center">
  <a href="https://abadali.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
  <a href="https://github.com/Abad-Ali/abadali-portfolio">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/abadali-dev">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

---

## Preview

<details>
<summary><b>Click to view screenshots</b></summary>

<br>

<div align="center">

<img src="./public/screenshots/home.png" alt="Home Page" width="900" />

<br />

<img src="./public/screenshots/about.png" alt="About Page" width="900" />

<br />

<img src="./public/screenshots/projects.png" alt="Projects Page" width="900" />

<br />

<img src="./public/screenshots/contact.png" alt="Contact Page" width="900" />

<br />

<img src="./public/screenshots/lighttheme.png" alt="Light Theme" width="900" />

<table>
<tr>
<td>
<img src="./public/screenshots/responsive.png" alt="Responsive Design" width="300"/>
</td>
<td>
<img src="./public/screenshots/lightThemeResp.png" alt="Light Theme Responsive Design" width="300"/>
</td>
</tr>
</table>

</details>

---

## Project Highlights

-  Built with Next.js 16 App Router
-  Dark and light theme support
-  SEO optimized with Metadata API, sitemap, and Open Graph
-  Fully responsive across desktop, tablet, and mobile devices
-  Smooth animations using Framer Motion
-  Functional contact form integration
-  Automatic deployment through Vercel

---

## Table of Contents

- [Abad Ali Portfolio](#abad-ali-portfolio)
- [Preview](#preview)
- [Project Highlights](#project-highlights)
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [SEO Features](#seo-features)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [Usage Policy](#usage-policy)

---

## Introduction

This portfolio serves as my personal website where I showcase my professional profile, technical skills, projects, certifications, and educational background.

It is built using the latest version of Next.js with the App Router architecture to deliver fast page loads, excellent SEO, and a seamless user experience. Visitors can browse my projects, learn more about me, and contact me directly through the integrated EmailJS contact form.

---

## Features

* Modern responsive user interface
* Built with Next.js App Router
* Dark and Light theme support
* Technology-based project filtering (All Projects, Next.js, React.js)
* Fully mobile responsive
* Dynamic project pages
* Interactive project showcase
* Contact form powered by EmailJS with React Hook Form and Zod validation
* Smooth page transitions and animations powered by Framer Motion
* SEO optimized pages
* Open Graph support
* robots.txt and sitemap.xml
* Custom 404 page
* Optimized for performance and accessibility
* Deployed on Vercel

---

## Technologies Used

## Framework

* Next.js 16
* React 19

## Styling

* CSS Modules
* Tailwind CSS
* tailwind-merge
* clsx
* class-variance-authority

## UI Components

* Radix UI
* Lucide React
* React Icons
* Swiper
* Sonner
* Typewriter Effect

## Animations

* Framer Motion

## Forms & Validation

* React Hook Form
* Zod
* @hookform/resolvers

## Email Service

* EmailJS

## Deployment

* Vercel

---

## Project Structure

```text
abadali-portfolio
│
├── app
│   ├── about
│   │   ├── AboutClient.js
│   │   └── page.js
│   │
│   ├── contact
│   │   ├── ContactClient.js
│   │   └── page.js
│   │
│   ├── projects
│   │   ├── [projectname]
│   │   │   ├── ProjectnameClient.js
│   │   │   └── page.js
│   │   │
│   │   ├── all
│   │   │   └── page.js
│   │   │
│   │   ├── ProjectsClient.js
│   │   ├── projectsData.js
│   │   └── page.js
│   │
│   ├── HomeClient.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.js
│   └── page.js
│
├── components
│   ├── ui
│   ├── AllProjects.jsx
│   ├── AnimatedBackground.module.css
│   ├── Certifications.jsx
│   ├── EducationSection.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── RouteTransition.jsx
│   ├── SkillsCarousel.jsx
│   ├── ThemeProvider.jsx
│   └── ThemeWrapper.jsx
│
├── lib
│   └── utils.js
│
├── public
│   ├── certificates
│   ├── projects
│   ├── screenshots
│   ├── avatar.png
│   ├── bg.webp
│   ├── logo.png
│   ├── resume.pdf
│   ├── sitemap.xml
│   ├── robots.txt
│   └── opengraph images
│
├── .gitignore
├── components.json
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## Getting Started

Follow the steps below to run the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/Abad-Ali/abadali-portfolio.git
```

## 2. Navigate to the Project Directory

```bash
cd abadali-portfolio
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 5. Start the Development Server

```bash
npm run dev
```

Visit

```text
http://localhost:3000
```

---

## Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the development server         |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server          |
| `npm run lint`  | Runs ESLint                           |

---

## SEO Features

The portfolio is optimized for search engines and social sharing.

* Metadata API
* Dynamic page metadata
* Open Graph images
* robots.txt
* sitemap.xml
* Semantic HTML
* Fast page loading
* Responsive layout
* Optimized images
* Search engine indexing

The portfolio includes SEO optimizations to improve discoverability through search engines.

---

## Deployment

The application is deployed on **Vercel** with automatic deployments connected to the GitHub repository.

Live Website:

<p align="left">
  <a href="https://abadali.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-Visit%20Website-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</p>

---

## Future Improvements

Some features planned for future updates include:

* Blog section for sharing technical articles and tutorials
* Project search functionality
* Project categories with multiple filter combinations
* Multi-language support (i18n)
* Admin dashboard for managing project content
* CMS integration (Sanity, Contentful, or Strapi)
* Visitor analytics dashboard
* Enhanced project case studies with detailed development process
* Unit and integration testing
* Progressive Web App (PWA) support


---

## Author

**Abad Ali**
Full Stack Developer

Passionate about building modern, scalable, and user-friendly web applications using the latest technologies.

<p align="left">
  <a href="https://abadali.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-Visit%20Website-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>

  <a href="https://github.com/Abad-Ali" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Abad--Ali-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>

  <a href="https://www.linkedin.com/in/abadali-dev" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Abad%20Ali-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>

  <a href="mailto:abadali1707@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact%20Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>


---

## Usage Policy

This portfolio was designed and developed by **Abad Ali**.

You are welcome to explore the source code, learn from the implementation, and use it as a reference for your own projects.

Please do not copy, redistribute, or reuse the design, branding, images, personal content, or significant portions of the source code without permission.
