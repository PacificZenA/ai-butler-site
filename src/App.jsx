import React from "react";
import { motion } from "framer-motion";
import Logo from './Logo';
import ButlerChat from './ButlerChat';

export default function App() {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen text-neutral-100 py-12 px-4 overflow-hidden bg-transparent"
    >
      
      


      <header className="w-full max-w-7xl mx-auto px-4 mb-6 flex items-center justify-between relative z-10">
        <Logo />
      </header>
      <ButlerChat />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-5xl mx-auto bg-neutral-800/90 shadow-xl rounded-3xl p-10 border border-neutral-700 backdrop-blur"
      >
        <motion.h1
          className="text-5xl font-extrabold text-center text-white mb-4 tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm Alex Tang
        </motion.h1>
        <motion.p
          className="text-center text-neutral-300 text-xl mb-3 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Full-Stack Developer | AI Enthusiast | Problem Solver
        </motion.p>
        <ul className="text-left text-neutral-400 mb-10 text-lg leading-relaxed max-w-3xl mx-auto list-disc list-inside space-y-2">
          <li>Build scalable, clean full-stack applications</li>
          <li>Skilled in React, Spring Boot, Tailwind CSS</li>
          <li>Apply AI tools like ChatGPT & Stable Diffusion</li>
          <li>Transform complex ideas into working products</li>
        </ul>

        <hr className="border-t border-neutral-700 mb-8" />

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6 text-center">🛠 Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-neutral-300 text-sm">
            <Skill title="Languages" list="Python, Java, JavaScript, TypeScript, C, C#" />
            <Skill title="Web Development" list="React.js, Spring Boot, .NET, Node.js, Express.js, HTML, CSS, Tailwind CSS" />
            <Skill title="Databases" list="MySQL, PostgreSQL, MongoDB, SQL Server, SQL" />
            <Skill title="Cloud & DevOps" list="Azure, Docker, Git, GitHub Actions, Vercel" />
            <Skill title="Security" list="JWT, OAuth 2.0, Firebase Auth, Access Control, RBAC" />
            <Skill title="Tools" list="VS Code, Postman, Power BI, SharePoint, Figma" />
          </div>
        </section>
        {/* hide for now, waiting for more project */}
        {/* <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6 text-center">💼 Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard
              title="AI Butler Portfolio"
              tech="React, Tailwind, Vite"
              description="This personal portfolio showcases my technical skills and career goals, with a clean dark theme and responsive design."
              liveLink="https://ai-butler-site.vercel.app/"
              repoLink="https://github.com/PacificZenA/ai-butler-site"
            />
          </div>
        </section> */}

        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href="/resume.pdf" text="📄 View My Resume" filled />
          <LinkButton href="https://www.linkedin.com/in/alex-tang-at" text="🔗 LinkedIn" />
          <LinkButton href="https://github.com/PacificZenA" text="💻 GitHub" />
        </div>
      </motion.div>
    </motion.div>
    
  );
}

function Skill({ title, list }) {
  return (
    <div>
      <h3 className="font-semibold text-neutral-400 mb-1">{title}</h3>
      <p>{list}</p>
    </div>
  );
}

function LinkButton({ href, text, filled }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-5 py-2 text-sm rounded-full transition font-medium ${
        filled
          ? "bg-white text-black hover:bg-neutral-200"
          : "border border-neutral-500 text-neutral-300 hover:bg-neutral-700"
      }`}
    >
      {text}
    </a>
  );
}

function ProjectCard({ title, tech, description, liveLink, repoLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-neutral-800 rounded-xl p-5 border border-neutral-700 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-neutral-400 mb-2 italic">{tech}</p>
      <p className="text-neutral-300 mb-4 text-sm">{description}</p>
      <div className="flex gap-3">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-300 underline hover:text-white"
        >
          🌐 Live Site
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-300 underline hover:text-white"
        >
          💻 GitHub Repo
        </a>
      </div>
      
    </motion.div>
  );
}
