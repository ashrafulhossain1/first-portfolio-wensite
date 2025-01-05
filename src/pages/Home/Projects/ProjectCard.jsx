import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white border p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            {/* Project Image */}
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
            />

            {/* Project Name */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4">{project.name}</h3>

            {/* View Details Button */}
            <Link
                to={`/project/${project.name}`}
                className="btn btn-outline w-full mt-4 border-1 border-b-4 bg-slate-200 border-orange-500 hover:border-orange-500 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            >
                View Details
            </Link>
        </div>
    );
};

export default ProjectCard;
