import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const projects = useLoaderData(); // Load all projects from the loader
    const { projectName } = useParams(); // Get project name from URL parameters

    // Find the current project based on the URL parameter
    const project = projects.find((proj) => proj.name === projectName);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#151719]">
                <h1 className="text-3xl font-bold text-gray-400">Project not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#151719] text-white p-6">
            <div className="container mx-auto">
                {/* Project Title */}
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center">
                    {project.name}
                </h1>
                <p className="text-lg text-gray-400 text-center mt-4">{project.description}</p>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Project Details</h2>
                        <p className="text-gray-400 leading-relaxed">{project.details}</p>
                        <h3 className="text-xl font-semibold text-gray-200 mt-6">Technologies Used:</h3>
                        <ul className="list-disc pl-5 mt-2">
                            {project.technologies.map((tech, index) => (
                                <li key={index} className="text-gray-400">{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 px-6 rounded-lg shadow hover:opacity-90 transition duration-300 text-center"
                    >
                        Live Project
                    </a>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-600 transition duration-300 text-center"
                    >
                        GitHub Repository
                    </a>
                </div>

                {/* Challenges and Improvements */}
                <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">Challenges Faced</h2>
                    <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
                    <h2 className="text-2xl font-semibold text-gray-200 mt-6">Future Improvements</h2>
                    <p className="text-gray-400 leading-relaxed">{project.improvements}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;