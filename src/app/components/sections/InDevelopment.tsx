// * REACT IMPORTS
import React from "react";

// interfaces to define the structure of development items and props
interface InDevelopmentItems {
  title: string;
  type: "learning" | "project" | "research";
  progress: number;
}

interface InDevelopmentProps {
  className?: string;
}

const InDevelopment: React.FC<InDevelopmentProps> = ({ className = "" }) => {
  // array containing current development items and their progress
  const inDevelopment: InDevelopmentItems[] = [
    {
      title: "WIP: Joobn",
      type: "project",
      progress: 60,
    },
    {
      title: "Learning: LeetCode",
      type: "learning",
      progress: 100, // using 100 to represent continuous/infinite progress
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* section title */}
      <h2 className="text-xl font-bold text-blue-100 border-b border-blue-800 pb-2">
        IN DEVELOPMENT
      </h2>

      {/* map through development items to create individual cards */}
      {inDevelopment.map((item, index) => (
        <div
          key={index}
          className="bg-black bg-opacity-40 p-4 rounded hover:bg-opacity-50 
                         transition-all duration-300"
        >
          {/* item type badge */}
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs bg-blue-900 px-2 py-1 rounded-full text-blue-200">
              {item.type.toUpperCase()}
            </span>
          </div>

          {/* item title */}
          <h3 className="text-lg font-semibold text-blue-200 mb-2">
            {item.title}
          </h3>

          {/* progress bar container */}
          <div className="w-full h-2 bg-gray-800 rounded overflow-hidden mb-2">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${item.progress}%` }}
            />
          </div>

          {/* progress percentage */}
          <p className="text-xs text-gray-400 mb-3">
            Progress: {item.progress}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default InDevelopment;
