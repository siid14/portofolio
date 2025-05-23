"use client";

// * REACT IMPORTS
import React, { useState, useEffect } from "react";

// * INTERFACES
// interfaces to define the structure of service items and props
interface ServiceItems {
  title: string;
  description: string;
  skills: string[];
}

interface ServiceProps {
  className?: string;
}

// * COMPONENT
const Service: React.FC<ServiceProps> = ({ className = "" }) => {
  // Add mounted state for client-side hydration
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // array containing all service offerings and their details
  const service: ServiceItems[] = [
    {
      title: "Web Development",
      description:
        "Creating responsive and dynamic web applications with modern frameworks and tools",
      skills: ["React", "TypeScript", "Node.js", "Express", "TailwindCSS"],
    },
    {
      title: "Frontend Development",
      description: "Building intuitive user interfaces and responsive designs",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "TailwindCSS"],
    },
    {
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications for iOS and Android",
      skills: [
        "React Native",
        "Expo",
        "Mobile UI/UX",
        "Cross-platform Development",
      ],
    },
    {
      title: "Backend Development",
      description: "Designing and implementing scalable server-side solutions",
      skills: ["Node.js", "Express", "REST APIs", "Authentication"],
    },
    {
      title: "Database Management",
      description: "Working with various database systems and data modeling",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      title: "DevOps & Deployment",
      description: "Setting up CI/CD pipelines and cloud infrastructure",
      skills: ["AWS", "Digital Ocean", "Docker", "GitHub Actions"],
    },
    {
      title: "Testing & Quality Assurance",
      description: "Implementing comprehensive testing strategies",
      skills: [
        "Jest",
        "Unit Testing",
        "Integration Testing",
        "Test Automation",
      ],
    },
    {
      title: "Project Management",
      description:
        "Leading teams and managing project lifecycles using agile methodologies",
      skills: ["Agile", "Scrum", "Kanban", "Taiga"],
    },
  ];

  // Return a skeleton while not mounted on client
  if (!isMounted) {
    return (
      <div className={`space-y-6 ${className}`}>
        <h2 className="text-xl font-bold text-blue-100 border-b border-blue-800 pb-2">
          SERVICES
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {service.map((_, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-40 p-3 md:p-4 rounded animate-pulse"
            >
              <div className="h-6 bg-blue-900 rounded w-1/2 mb-3"></div>
              <div className="h-4 bg-blue-900 rounded w-full mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-6 bg-blue-900 rounded w-16"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* section title */}
      <h2 className="text-xl font-bold text-blue-100 border-b border-blue-800 pb-2">
        SERVICES
      </h2>

      {/* map through services array to create individual service cards */}
      <div className="grid grid-cols-1 gap-4">
        {service.map((service, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-40 p-3 md:p-4 rounded hover:bg-opacity-50 
                       transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* service title */}
            <h3 className="text-lg font-semibold text-blue-200 mb-2">
              {service.title}
            </h3>
            {/* service description */}
            <p className="text-gray-300 mb-3 text-sm">{service.description}</p>
            {/* skills tags container */}
            <div className="flex flex-wrap gap-2">
              {/* map through skills to create individual skill tags */}
              {service.skills.map((skills, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-xs bg-blue-900 bg-opacity-50 px-2 py-1 rounded-full
                           text-blue-200"
                >
                  {skills}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
