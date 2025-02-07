import React from "react";
import daisyui from '../../../assets/daisyUI.png';
import tailwind from '../../../assets/Tailwind_CSS.png';
import { motion } from 'framer-motion'; // For animations

const Skills = () => {
  // Data for skills
  const frontendSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "DaisyUI", icon: daisyui },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ];
  const backendSkills = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  ];
  const tools = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
  ];

  return (
    <div className="bg-[#050709]">
      <div className="skills-page w-11/12 mx-auto py-10 px-4">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-title text-lg md:text-3xl xl:text-5xl font-bold text-white text-center mb-8"
        >
          What I Use
        </motion.h1>
        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Frontend Skills Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              background: "linear-gradient(135deg, #4a0d6b, #2a1e3b)",
            }}
            transition={{ duration: 0.5, type: "tween" }}
            className="skill-card bg-gradient-to-br from-[#140C1C] to-[#2a1e3b] p-4 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <h2 className="category-title text-xl font-semibold text-gray-300 mb-4">Frontend Development</h2>
            <div className="skills-grid flex flex-wrap justify-center">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="skill-item flex flex-col items-center mx-2 my-2 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon w-10 h-10 mb-1 transition-transform duration-500 ease-in-out"
                  />
                  <span className="skill-name text-xs text-white">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            {/* Apply flip animation on hover */}
            <style jsx>{`
              .skill-card:hover .skill-icon {
                animation: flip 1s linear;
              }
              @keyframes flip {
                0% {
                  transform: perspective(400px) rotateY(0deg);
                }
                50% {
                  transform: perspective(400px) rotateY(180deg);
                }
                100% {
                  transform: perspective(400px) rotateY(360deg);
                }
              }
            `}</style>
          </motion.div>

          {/* Backend Skills Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              background: "linear-gradient(135deg,  #FFCA28, #4a0d6b)",
            }}
            transition={{ duration: 0.5, type: "tween" }}
            className="skill-card bg-gradient-to-br from-[#140C1C] to-[#2a1e3b] p-4 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <h2 className="category-title text-xl font-semibold text-gray-300 mb-4">Backend Development</h2>
            <div className="skills-grid flex flex-wrap justify-center">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="skill-item flex flex-col items-center mx-2 my-2 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon w-10 h-10 mb-1 transition-transform duration-500 ease-in-out"
                  />
                  <span className="skill-name text-xs text-white">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            {/* Apply flip animation on hover */}
            <style jsx>{`
              .skill-card:hover .skill-icon {
                animation: flip 1s linear;
              }
              @keyframes flip {
                0% {
                  transform: perspective(400px) rotateY(0deg);
                }
                50% {
                  transform: perspective(400px) rotateY(180deg);
                }
                100% {
                  transform: perspective(400px) rotateY(360deg);
                }
              }
            `}</style>
          </motion.div>

          {/* Tools & Platforms Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              background: "linear-gradient(135deg, #0d4a6b, #2a1e3b)",
            }}
            transition={{ duration: 0.5, type: "tween" }}
            className="skill-card bg-gradient-to-br from-[#140C1C] to-[#2a1e3b] p-4 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <h2 className="category-title text-xl font-semibold text-gray-300 mb-4">Tools & Platforms</h2>
            <div className="skills-grid flex flex-wrap justify-center">
              {tools.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="skill-item flex flex-col items-center mx-2 my-2 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon w-10 h-10 mb-1 transition-transform duration-500 ease-in-out"
                  />
                  <span className="skill-name text-xs text-white">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            {/* Apply flip animation on hover */}
            <style jsx>{`
              .skill-card:hover .skill-icon {
                animation: flip 1s linear;
              }
              @keyframes flip {
                0% {
                  transform: perspective(400px) rotateY(0deg);
                }
                50% {
                  transform: perspective(400px) rotateY(180deg);
                }
                100% {
                  transform: perspective(400px) rotateY(360deg);
                }
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;