import React from 'react';
import { FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { SiDaisyui, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';

const SkillPercentage = () => {
    const skillsData = [
        { name: "React", icon: <FaReact className="text-blue-400 text-5xl" />, skillLevel: 75 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-5xl" />, skillLevel: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-5xl" />, skillLevel: 90 },
        { name: "DaisyUI", icon: <SiDaisyui className="text-purple-500 text-5xl" />, skillLevel: 80 },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" />, skillLevel: 50 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" />, skillLevel: 70 },
        { name: "C++", icon: <FaC className="text-blue-600 text-5xl" />, skillLevel: 60 },
        { name: "GitHub", icon: <FaGithub className="text-black text-5xl" />, skillLevel: 90 },
    ];

    const getProgressBarColor = (level) => {
        if (level >= 90) return "bg-green-500";
        if (level >= 75) return "bg-teal-400";
        if (level >= 50) return "bg-yellow-400";
        return "bg-red-400";
    };

    return (
        <section className="mt-10 py-6 rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200" id="skills">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                        My Skills
                    </h2>
                    <p className="text-lg text-gray-600">
                        These are the technologies I have experience with. I am continually improving my skills to stay updated with modern tools and practices.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                        >
                            {/* Skill Name and Icon */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="mr-4">{skill.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-700">{skill.name}</h3>
                                </div>
                                <span className="text-gray-600 font-medium">{skill.skillLevel}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4">
                                <div className="w-full h-2 bg-gray-300 rounded-full">
                                    <div
                                        className={`${getProgressBarColor(skill.skillLevel)} h-2 rounded-full`}
                                        style={{ width: `${skill.skillLevel}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillPercentage;
