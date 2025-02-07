import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Business Administration (BBA)",
      major: "Major: Accounting",
      status: "Currently Pursuing",
      institution: "National University",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Ibrahim Khan Government College",
      year: "Year of Completion: [2019]",
    },
  ];

  return (
    <section className="bg-[#050709] py-16" id="education">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Educational Qualifications
        </motion.h1>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                background: "linear-gradient(135deg, #4a0d6b, #2a1e3b)",
              }}
              transition={{ duration: 0.5, type: "tween" }}
              className="skill-card bg-gradient-to-br from-[#140C1C] to-[#2a1e3b] p-6 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">{edu.degree}</h3>
              {edu.major && <p className="text-gray-400 mb-2">{edu.major}</p>}
              <p className="text-gray-500 mb-2">{edu.status || edu.year}</p>
              <p className="text-gray-400 italic">{edu.institution}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;