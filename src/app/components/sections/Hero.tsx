"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileDown, Eye } from "lucide-react";

interface HeroProps {
  className?: string;
}

// hero component for portfolio landing section
const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  // state for managing resume preview modal
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // bio information object
  const bio = {
    title: "SIDNEY THOMAS",
    subtitle: "Full-Stack Software Engineer",
    description: `I'm a full-stack developer who loves building websites/mobile apps people enjoy using. After getting my Computer Science degree from San Francisco State University, I'm now working on my Master's at Cal State LA to keep growing my skills.

    I've built several projects, like a job search platform and mobile apps that work on both iPhone and Android. I enjoy leading teams and making sure our apps run smoothly and quickly. I'm good at both the front-end (what users see) and back-end (how things work behind the scenes).

    Right now, I'm working on turning my ideas into real projects and learning about AI to make my apps even smarter. I like staying up-to-date with new tech while making sure everything I build works great.

    When I'm not coding, you'll find me on the soccer field, at the gym, or enjoying music. These hobbies keep me energized and often help me think about coding problems in new ways.`,
    location: "Los Angeles, California",
    status: "Open to opportunities",
  };

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 opacity-50" />

      {/* main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 items-start max-w-6xl mx-auto">
          {/* Profile Image Section */}
          <div className="relative flex-shrink-0">
            {/* Decorative frame inspired by PlayStation UI */}
            <div className="absolute inset-0 -m-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 blur" />
            <div className="relative">
              {/* Main image container with PlayStation-style border */}
              <div
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden 
                            border-4 border-blue-400/50 shadow-lg shadow-blue-500/20"
              >
                <Image
                  src="/Sidney-Profile-Picture.jpg"
                  alt="Sidney Thomas"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    console.error("Image failed to load:", e);
                  }}
                />
                {/* Scanline effect overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent 
                              opacity-30 pointer-events-none"
                />
              </div>
              {/* Status indicator */}
              <div
                className="absolute -bottom-2 -right-2 bg-blue-900 px-3 py-1 rounded-full 
                            text-sm text-blue-200 flex items-center shadow-lg"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Online
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-grow">
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 
                         tracking-tight antialiased"
            >
              {bio.title}
            </h1>

            <h2 className="text-xl md:text-2xl text-blue-300 mb-6">
              {bio.subtitle}
            </h2>

            {/* Location badge */}
            <div
              className="inline-flex items-center bg-blue-900/50 px-3 py-1 rounded-full 
                          text-blue-200 text-sm mb-8"
            >
              <span className="mr-2">📍</span>
              {bio.location}
              <span className="ml-4 mr-2">•</span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                {bio.status}
              </span>
            </div>

            {/* Bio text */}
            <div className="prose prose-invert max-w-none mb-8 text-gray-300">
              <p className="whitespace-pre-line">{bio.description}</p>
            </div>

            {/* CTA Buttons with PS1-era styling */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.open("/Resume-Sept24-SidneyThomas copy.pdf", "_blank")
                }
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r 
                         from-blue-700 to-blue-600 hover:from-blue-600 
                         hover:to-blue-500 text-white rounded-md transition-all 
                         duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Download Resume
              </button>

              <button
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r 
                         from-purple-700 to-purple-600 hover:from-purple-600 
                         hover:to-purple-500 text-white rounded-md transition-all 
                         duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                <Eye className="w-5 h-5 mr-2" />
                Preview Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal for resume preview */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full h-[80vh]">
            <div className="flex justify-between items-center p-4 bg-blue-900">
              <h3 className="text-white font-bold">Resume Preview</h3>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="text-white hover:text-gray-300"
              >
                Close
              </button>
            </div>
            <iframe
              src="/Resume-Sept24-SidneyThomas copy.pdf"
              className="w-full h-full"
              title="Resume Preview"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
