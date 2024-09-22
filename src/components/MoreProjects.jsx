import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Sample project data (you would replace this with your actual data)
const projects = [
    { id: 1, name: "Project 1", type: "AI" },
    { id: 2, name: "Project 2", type: "CS" },
    { id: 3, name: "Project 3", type: "Web" },
    { id: 4, name: "Project 4", type: "Mobile" },
    { id: 5, name: "Project 5", type: "Data" },
    { id: 6, name: "Project 6", type: "AI"},
    { id: 7, name: "Project 1", type: "AI" },
    { id: 8, name: "Project 2", type: "CS" },
    { id: 9, name: "Project 3", type: "Web" },
    { id: 10, name: "Project 4", type: "Mobile" },
    { id: 11, name: "Project 5", type: "Data" },
    { id: 12, name: "Project 6", type: "AI"},
    { id: 13, name: "Project 1", type: "AI" },
    { id: 14, name: "Project 2", type: "CS" },
    { id: 15, name: "Project 3", type: "Web" },
    { id: 16, name: "Project 4", type: "Mobile" },
    { id: 17, name: "Project 5", type: "Data" },
    { id: 18, name: "Project 6", type: "AI"},
    { id: 19, name: "Project 1", type: "AI" },
    { id: 20, name: "Project 2", type: "CS" },
    { id: 21, name: "Project 3", type: "Web" },
    { id: 22, name: "Project 4", type: "Mobile" },
    { id: 23, name: "Project 5", type: "Data" },
    { id: 24, name: "Project 6", type: "AI"},
    { id: 25, name: "Project 1", type: "AI" },
    { id: 26, name: "Project 2", type: "CS" },
    { id: 27, name: "Project 3", type: "Web" },
    { id: 28, name: "Project 4", type: "Mobile" },
    { id: 29, name: "Project 5", type: "Data" },
    { id: 30, name: "Project 6", type: "AI"},
];

const ProjectCard = ({ project }) => (
  <div className="bg-gray-500 rounded-lg shadow-md p-4 flex justify-between items-center">
    <h3 className="text-lg font-semibold">{project.name}</h3>
    <div className="bg-gray-200 rounded-full p-2 text-sm font-medium">
      {project.type}
    </div>
  </div>
);

const MoreProjects = () => {
  const [expanded, setExpanded] = useState(false);
  const projectsPerRow = 5;
  const initialRows = 4;
  const initialProjects = projects.slice(0, initialRows * projectsPerRow);
  const remainingProjects = projects.slice(initialRows * projectsPerRow);

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-500">
      <h2 className="text-2xl font-bold mb-6">More Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {initialProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {expanded && remainingProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {remainingProjects.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            {expanded ? (
              <>
                <span className="mr-2">Show Less</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span className="mr-2">Show More</span>
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreProjects;