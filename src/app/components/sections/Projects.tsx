"use client";

// * REACT IMPORTS
import React, { useState } from "react";

// * ICONS
import { GithubIcon, Globe, Eye } from "lucide-react";

// * IMAGES
import Image from "next/image";

// * INTERFACES
// support multiple link types and preview functionality
interface ProjectLinks {
  github: string;
  demo?: string;
  preview?: {
    type: "image" | "video";
    url: string;
  };
}

interface ProjectItems {
  title: string;
  description: string;
  technologies: string[];
  types: "client" | "personal" | "open-source";
  links: ProjectLinks;
}

interface ProjectsProps {
  className?: string;
}

// * COMPONENT
const Projects: React.FC<ProjectsProps> = ({ className = "" }) => {
  // state to manage the preview modal visibility and content
  const [previewItem, setPreviewItem] = useState<{
    type: "image" | "video";
    url: string;
  } | null>(null);

  // array of project data containing information about each project
  const projects: ProjectItems[] = [
    {
      title: "Linux-Compatible File System",
      description:
        "Implemented a custom file system compatible with the Linux ecosystem using C. " +
        "Led a four-person team through design and implementation phases, handling volume formatting, directory operations, and file management. " +
        "Developed low-level I/O operations for efficient disk sector management and data storage.",
      technologies: [
        "C",
        "Linux",
        "System Calls",
        "Low-level I/O",
        "File Systems",
        "Data Structures",
      ],
      types: "personal",
      links: {
        github: "https://github.com/siid14/filesystem-testing",
        demo: "",
      },
    },
    {
      title: "2D Tank Game",
      description:
        "Real-time multiplayer tank battle game utilizing multithreading for concurrent game logic. " +
        "Engineered a responsive game engine supporting simultaneous two-player gameplay. " +
        "Implemented engaging user interface with Java Swing, featuring smooth animations and intuitive controls.",
      technologies: [
        "Java",
        "Java Swing",
        "Multithreading",
        "Game Development",
        "UI Design",
      ],
      types: "personal",
      links: {
        github: "https://github.com/siid14/2D-Tank-Game",
        preview: {
          type: "video",
          url: "/projects/videos/2D-TANK-GAME-Demo-Compressed.mp4",
        },
      },
    },
    {
      title: "UNO Game",
      description:
        "Multiplayer UNO implementation supporting 2-4 players with real-time gameplay. " +
        "Features include dynamic room management, game state handling, and responsive design. " +
        "Built with TypeScript and PostgreSQL for robust game logic and state management.",
      technologies: [
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Render",
      ],
      types: "personal",
      links: {
        github: "https://github.com/siid14/UNO",
        demo: "",
      },
    },
    {
      title: "WorkWaves - Job Platform",
      description:
        "Full-stack job platform focusing on performance and user experience. " +
        "Led a team of three developers, implementing dynamic filtering and personalized pages. " +
        "Established robust CI/CD pipelines with Jest testing and GitHub Actions for reliable deployments.",
      technologies: [
        "React",
        "MongoDB",
        "Node.js",
        "Express",
        "Digital Ocean",
        "Jest",
        "GitHub Actions",
        "Balsamiq",
        "Taiga",
      ],
      types: "personal",
      links: {
        github: "https://github.com/siid14/WorkWaves",
        demo: "",
      },
    },

    {
      title: "UnivTube - Video Platform",
      description:
        "Feature-rich video sharing platform with comprehensive functionality. " +
        "Implemented video uploads, playback, user comments, and content discovery features. " +
        "Designed efficient database schemas for optimal performance, managing user data, videos, and community interactions.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Handlebars",
        "MySQL",
        "REST API",
        "Database Design",
      ],
      types: "personal",
      links: {
        github: "https://github.com/siid14/UnivTube",
        demo: "",
        preview: {
          type: "image",
          url: "/projects/images/UNIVTUBE-Landing-Page.png",
        },
      },
    },
    {
      title: "Tripizy - Travel Mobile App",
      description:
        "Cross-platform travel application built for both Android and iOS platforms. " +
        "Led intensive month-long development with a team of four developers. " +
        "Focused on creating a seamless user experience across different devices using React Native and MongoDB.",
      technologies: [
        "React Native",
        "MongoDB",
        "Node.js",
        "Express",
        "Mobile Development",
        "Cross-platform Development",
      ],
      types: "personal",
      links: {
        github: "https://github.com/siid14/Tripizy",
        preview: {
          type: "image",
          url: "/projects/images/Tripizy-Landing-Page.png",
        },
      },
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* section title */}
      <h2 className="text-xl font-bold text-blue-100 border-b border-blue-800 pb-2">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {/* map through projects array to create individual project cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0A0B2E] p-3 md:p-4 rounded hover:bg-opacity-90 
                     transition-all duration-300 group"
          >
            {/* project title and type badge */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-100 mb-2 md:mb-0">
                {project.title}
              </h3>
              <span className="text-xs bg-[#1A1A60] px-2 py-1 rounded-full text-blue-200">
                {project.types}
              </span>
            </div>

            {/* project description paragraph */}
            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* technology stack tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-[#1A1A60] bg-opacity-50 px-2 py-1 
                           rounded-full text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* project links section (github, demo, preview) */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.links.github}
                className="inline-flex items-center gap-2 text-sm text-blue-400 
                         hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={16} />
                Code
              </a>

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="inline-flex items-center gap-2 text-sm text-green-400 
                           hover:text-green-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  Demo
                </a>
              )}

              {project.links.preview && (
                <button
                  onClick={() =>
                    project.links.preview &&
                    setPreviewItem(project.links.preview)
                  }
                  className="inline-flex items-center gap-2 text-sm text-purple-400 
                           hover:text-purple-300 transition-colors"
                >
                  <Eye size={16} />
                  Preview
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* modal for displaying project previews (images/videos) */}
      {previewItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center 
                     justify-center z-50 p-4"
          onClick={() => setPreviewItem(null)}
        >
          <div className="max-w-4xl w-full bg-[#0A0B2E] rounded-lg overflow-hidden">
            {previewItem.type === "video" ? (
              <video
                src={previewItem.url}
                controls
                className="w-full"
                autoPlay
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Image
                src={previewItem.url}
                alt="Project preview"
                width={1920}
                height={1080}
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
