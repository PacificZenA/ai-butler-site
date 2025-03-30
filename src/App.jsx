import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#e0f2fe] to-[#f0f9ff] py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-slate-100">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-6 tracking-tight">
          Hi, I'm Alex Tang
        </h1>
        <p className="text-center text-gray-700 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
          Software Engineering Technology student based in Toronto. I enjoy building full-stack web applications,
          using AI tools like ChatGPT and Stable Diffusion, and turning ideas into clean, working software.
        </p>

        <hr className="border-t border-blue-200 mb-8" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">🛠 Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800 text-sm">
            <Skill title="Languages" list="Python, Java, JavaScript, C, SQL, C#" />
            <Skill title="Web Development" list="React.js, Spring Boot, .NET, Node.js, HTML, CSS" />
            <Skill title="Databases" list="MySQL, PostgreSQL, MongoDB, SQL Server" />
            <Skill title="Cloud & DevOps" list="Azure, Docker, Git" />
            <Skill title="Security" list="JWT, OAuth, Access Control, Firebase Auth" />
            <Skill title="Tools" list="Power BI, SharePoint, Microsoft Office" />
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href="/resume.pdf" text="📄 View My Resume" filled />
          <LinkButton href="https://www.linkedin.com/in/alex-tang-at" text="🔗 LinkedIn" />
          <LinkButton href="https://github.com/" text="💻 GitHub" />
        </div>
      </div>
    </div>
  );
}

function Skill({ title, list }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-600 mb-1">{title}</h3>
      <p>{list}</p>
    </div>
  );
}

function LinkButton({ href, text, filled }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`px-5 py-2 text-sm rounded-full transition font-medium ${
        filled
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-gray-400 text-gray-700 hover:bg-gray-100"
      }`}
    >
      {text}
    </a>
  );
}
