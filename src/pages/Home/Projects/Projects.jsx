import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('./Projects.json')
            .then(res => {
                setProjects(res.data);
            });
    }, []);

    return (
        <section
            id="projects"
            className="py-10 md:py-16 bg-gradient-to-b from-[#131313fe] to-[#050709ee]"
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    My Projects
                </h2>
                {/* Section Description */}
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    Explore some of the exciting projects I have worked on. Each project showcases my skills in different technologies and demonstrates my ability to solve problems and create impactful solutions.
                </p>
                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;