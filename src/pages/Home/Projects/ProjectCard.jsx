import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-800 border border-gray-700 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            {/* Project Image */}
            <div className="h-[200px] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover object-top group-hover:animate-scroll-image"
                />
            </div>
            {/* Project Name */}
            <h3 className="text-xl font-semibold text-white mt-4">{project.name}</h3>
            {/* View Details Button */}
            <Link
                to={`/project/${project.name}`}
                className="btn btn-outline w-full mt-4 border-1 border-b-4 bg-gray-700 border-orange-500 text-white hover:border-orange-600 hover:bg-gray-600 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            >
                View Details
            </Link>
        </div>
    );
};

export default ProjectCard;

