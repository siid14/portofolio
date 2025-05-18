"use client";

// * REACT IMPORTS
import React from "react";

// * INTERFACES
interface ColumnProps {
  children: React.ReactNode;
  className?: string;
}

interface ThreeColumnLayoutProps {
  leftColumn?: React.ReactNode;
  centerColumn?: React.ReactNode;
  rightColumn?: React.ReactNode;
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
  // Count how many columns are provided
  const columnCount = [leftColumn, centerColumn, rightColumn].filter(
    Boolean
  ).length;

  return (
    <div className={`container mx-auto px-4 py-8 ${className}`.trim()}>
      {/* Grid container with improved responsive classes */}
      <div
        className={`grid grid-cols-1 ${
          columnCount === 2
            ? "md:grid-cols-2 max-w-4xl mx-auto"
            : "lg:grid-cols-3"
        } gap-4 md:gap-6`}
      >
        {/* Left Column - Services */}
        {leftColumn && <Column className="min-h-[300px]">{leftColumn}</Column>}

        {/* Center Column - Projects Spotlight */}
        {centerColumn && (
          <Column className="min-h-[300px]">{centerColumn}</Column>
        )}

        {/* Right Column - In development */}
        {rightColumn && (
          <Column className="min-h-[300px]">{rightColumn}</Column>
        )}
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
