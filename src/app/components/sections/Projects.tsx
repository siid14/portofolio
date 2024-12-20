// REACT IMPORTS
import React from "react";

// * INTERFACES
interface ProjectItems {
  title: string;
  description: string;
  technologies: string[];
  types: "client" | "personal" | "open-source";
  image?: string;
  link?: string;
}

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = "" }) => {
  const projects: ProjectItems[] = [
    {
      title: "WorkWaves - Job Platform",
      description:
        "A comprehensive job platform built from the ground up. Led a team of three, implementing features like dynamic filtering, personalized pages, and responsive design. Implemented continuous deployment with Jest testing and GitHub Actions.",
      technologies: [
        "React",
        "MongoDB",
        "Node.js",
        "Express",
        "Digital Ocean",
        "Jest",
        "GitHub Actions",
        "Balsamiq",
      ],
      types: "personal",
      link: "https://github.com/yourusername/workwaves",
    },
    {
      title: "UNO Game",
      description:
        "A multiplayer UNO card game supporting 2-4 players following official rules. Features include a landing page, room interface, and complete game playable interface with core UNO gameplay mechanics.",
      technologies: [
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Render",
      ],
      types: "personal",
      link: "https://github.com/yourusername/uno-game",
    },
    {
      title: "2D Tank Game",
      description:
        "A multiplayer tank battle game featuring a multithreaded game engine for concurrent game logic. Built with Java Swing for an engaging user interface supporting two players simultaneously.",
      technologies: ["Java", "Java Swing", "Multithreading"],
      types: "personal",
      link: "https://github.com/yourusername/2d-tank-game",
    },
    {
      title: "UnivTube - Video Platform",
      description:
        "A video sharing platform with features like video uploads, playback, user comments, and content discovery. Implemented efficient data schemas and relationships for optimal performance.",
      technologies: ["HTML", "CSS", "JavaScript", "Handlebars", "MySQL"],
      types: "personal",
      link: "https://github.com/yourusername/univtube",
    },
    {
      title: "Tripizy - Travel Mobile App",
      description:
        "A cross-platform travel application developed for both Android and iOS. Collaborated in a four-person team over a month-long intensive development period.",
      technologies: ["React Native", "MongoDB", "Node.js", "Express"],
      types: "personal",
      link: "https://github.com/yourusername/tripizy",
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-xl font-bold text-blue-100 border-b border-blue-800 pb-2">
        PROJECTS
      </h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-black bg-opacity-40 p-4 rounded hover:bg-opacity-50 
                             transition-all duration-300 group cursor-pointer"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-blue-200 group-hover:text-blue-100">
              {project.title}
            </h3>
            <span className="text-xs bg-blue-900 px-2 py-1 rounded-full text-blue-200">
              {project.types}
            </span>
          </div>

          <p className="text-gray-300 mb-3 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs bg-blue-800 bg-opacity-30 px-2 py-1 rounded-full
                                 text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              className="mt-3 inline-block text-sm text-blue-400 hover:text-blue-300
                               transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
