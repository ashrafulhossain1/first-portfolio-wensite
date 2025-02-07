import React from 'react';
import bannerImg from '../../../assets/bannerMy.png';
import './banner.css';

const Banner = () => {
    return (
        <section className="relative bg-black text-white h-screen flex flex-col justify-center items-center px-6">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-sm">
          <div className="font-bold text-xl">Brilio</div>
          <ul className="flex gap-6">
            <li className="hover:text-purple-400">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-purple-400">
              <a href="#works">Works</a>
            </li>
            <li className="hover:text-purple-400">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-purple-400">
              <a href="#blog">Blog</a>
            </li>
            <li className="hover:text-purple-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
  
        {/* Hero Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 text-sm">Hello! I'm Brilio.</p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Creating impactful experiences on{" "}
            <span className="text-purple-400">visual design</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            I transform ideas into impactful digital experiences, delivering
            innovative solutions that elevate brands and captivate audiences
            around the world.
          </motion.p>
          <motion.button
            className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Let’s Talk →
          </motion.button>
        </motion.div>
  
        {/* Background Elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            fill="none"
            className="w-full h-full"
          >
            <circle cx="400" cy="300" r="250" stroke="gray" strokeWidth="1" />
            <circle cx="400" cy="300" r="350" stroke="gray" strokeWidth="1" />
            <circle cx="400" cy="300" r="450" stroke="gray" strokeWidth="1" />
          </svg>
        </motion.div>
      </section>
    );
};

export default Banner;