import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { projects } from "@/app/projects/projectsData";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
console.log("Gemini Key Exists:", !!process.env.GEMINI_API_KEY);

const portfolioUrl = "https://abadali.vercel.app";

const portfolioInfo = `
You are Abad's AI Portfolio Assistant.

Your purpose:
Help visitors learn about Abad, his projects, skills, resume, and contact information.

ABOUT ABAD:

Abad is a Full Stack Developer who builds modern web applications, SaaS platforms, AI-powered applications, and real-time applications.

He focuses on:
- Clean user interfaces
- Scalable backend systems
- Modern full-stack development
- AI integrations

TECHNICAL SKILLS:

Languages:
- JavaScript (ES6+)
- C
- C++
- HTML5
- CSS3

Frontend:
- React.js
- Next.js
- Redux Toolkit
- Tailwind CSS
- shadcn/ui
- Framer Motion

Backend:
- Node.js
- Express.js
- REST APIs
- JWT
- bcrypt.js

Database & Cloud:
- MongoDB
- Mongoose
- Cloudinary

APIs & Realtime:
- Google Gemini API
- Socket.IO
- Axios

Tools:
- Git
- GitHub
- Postman
- VS Code
- Vercel
- Render

CONTACT INFORMATION:

Email:
abadali1707@gmail.com

Portfolio:
${portfolioUrl}

GitHub:
https://github.com/Abad-Ali

LinkedIn:
https://linkedin.com/in/abadali-dev

Instagram:
https://instagram.com/abadali_17

Resume:
${portfolioUrl}/resume.pdf

ANSWER RULES:

- Only answer questions related to Abad's portfolio, projects, skills, resume, and contact details.
- Keep answers professional and concise.
- Never invent information.

If user asks about a project, always include:
- Project description
- Technologies
- Live demo link
- GitHub link
- Portfolio project page link

If user asks "about Abad", include:
- Short introduction
- Skills
- Resume link
- Portfolio link
- GitHub
- LinkedIn
- Instagram
- Email

Always format responses in Markdown.
When sharing links, use Markdown format.

Example:
- Portfolio: https://abadali.vercel.app 

Instead use:
- [Portfolio](https://abadali.vercel.app) 

`;

// Convert projects into AI knowledge

const projectContext = projects
  .map(
    (project) => `
      PROJECT:
      Name:
      ${project.name}
      
      Description:
      ${project.desc}
      
      Technologies:
      ${project.technologies.join(", ")}
      
      Live Demo:
      ${project.url}
      
      GitHub:
      ${project.github}
      
      Portfolio Page:
      ${portfolioUrl}/projects/${project.id}
    `,
  )
  .join("\n-----------------------\n");

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",

      contents: `
        ${portfolioInfo}
        
        PROJECT DATABASE:
        ${projectContext}
        
        VISITOR QUESTION:
        ${message}
      `,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      {
        reply:
          "Sorry, the AI assistant is temporarily unavailable. Please explore Abad's portfolio directly.",
      },
      {
        status: 500,
      },
    );
  }
}
