import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Quenswer - Q&A Platform",
    description:
      "A full-stack Q&A web app built with MERN stack featuring category-wise questions, answers, and user authentication.",
    techStack: ["React", 'Next.js', "Node.js", "Express", "MongoDB", 'Mongoose', "Redux", "react-icons", 'Vercel', 'Render'],
    github: "https://github.com/iamtarunmehra/quenswer",
    liveDemo: "https://quenswer.vercel.app/",
  },
  {
    id: 2,
    title: "Tic Tac Toe - Fun Game",
    description:
      "A game that user can play with 2 players and winner or looser functionality",
    techStack: ["HTML", 'CSS', "Javascript"],
    github: "https://github.com/iamtarunmehra/Tic-Tac-Toe",
    liveDemo: "https://tic-tac-toe-rosy-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A responsive and modern portfolio website to showcase my web development projects, skills, and career journey. Designed to reflect my personality and coding style, with smooth animations, clean UI, and easy navigation.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "React Icons",
      "Vercel"
    ],
    github: "https://github.com/iamtarunmehra/myPortfolio",
    liveDemo: "https://law-prep-omega.vercel.app/"
  },
  {
    id: 4,
    title: "Law Prep - Educational web application",
    description:
      "A responsive frontend clone of LawPrep, designed for law entrance preparation platforms like CLAT and AILET..",
    techStack: ["HTML", "CSS", 'Bootstrap', 'Javascript', 'react-icons', 'vercel',],
    github: "https://github.com/iamtarunmehra/Law-prep",
    liveDemo: "https://law-prep-omega.vercel.app/",
  },

];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 cursor-pointer text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Showcasing My Development Projects</h1>

      {projects.map(({ id, title, description, techStack, github, liveDemo }) => (
        <div
          key={id}
          className={`bg-[#1c1c1c] rounded-lg shadow-lg p-6 mb-10 hover:shadow-orange-600 transition-shadow duration-300 md:max-w-[90%] ${id % 2 === 0 ? 'md:mr-[80px]' : 'md:ml-[80px]'}`}
        >
          <h2 className="text-xl font-semibold mb-3">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          <h3 className="font-semibold mb-2 text-orange-400">Tech Stack:</h3>
          <ul className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, i) => (
              <li
                key={i}
                className="bg-orange-600 bg-opacity-20 text-white text-sm px-3 py-1 rounded"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#ff5111] hover:bg-orange-600 rounded text-white font-semibold transition"
            >
              GitHub
            </Link>

            <Link
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-orange-500 hover:bg-orange-500 hover:text-white rounded font-semibold transition"
            >
              Live Demo
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
