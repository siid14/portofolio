"use client";

// * REACT IMPORTS
import React from "react";

// * INTERFACES
interface ColumnProps {
  children: React.ReactNode;
  className?: string;
}

interface ThreeColumnLayoutProps {
  leftColumn: React.ReactNode;
  centerColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  className?: string;
}

// individual Column component with TypeScript props
const Column: React.FC<ColumnProps> = ({ children, className = "" }) => {
  const baseClasses =
    "p-4 rounded bg-opacity-30 bg-black max-h-[calc(100vh-4rem)] overflow-y-auto";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      {/* Add custom scrollbar styling */}
      <style jsx global>{`
        .${baseClasses.replace(/\s+/g, ".")} {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) transparent;
        }
        .${baseClasses.replace(/\s+/g, ".")}::-webkit-scrollbar {
          width: 6px;
        }
        .${baseClasses.replace(/\s+/g, ".")}::-webkit-scrollbar-track {
          background: transparent;
        }
        .${baseClasses.replace(/\s+/g, ".")}::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
      `}</style>
      {children}
    </div>
  );
};

// main layout component
const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  leftColumn,
  centerColumn,
  rightColumn,
  className = "",
}) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`.trim()}>
      {/* Grid container with responsive classes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Services */}
        <Column className="md:col-span-1">{leftColumn}</Column>

        {/* Center Column - Projects Spotlight */}
        <Column className="md:col-span-1">{centerColumn}</Column>

        {/* Right Column - In development */}
        <Column className="md:col-span-1">{rightColumn}</Column>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
