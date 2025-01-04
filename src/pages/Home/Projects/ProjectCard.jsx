import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
            {/* Project Image */}
            <img
                src="https://via.placeholder.com/300"
                alt="Project One"
                className="w-full h-48 object-cover rounded-md"
            />

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Language Exchange Platform
            </h3>

            {/* Project Description */}
            <p className="mt-2 text-gray-600">
                A user-friendly platform to connect tutors and students worldwide for language learning and skill development.
            </p>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
                <a
                    href="https://live-site-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Live Site
                </a>
               <Link to='/details'>
               GitHub
               </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
