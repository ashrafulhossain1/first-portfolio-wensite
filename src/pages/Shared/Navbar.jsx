import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); // Get the current route

    console.log(location.pathname)
    return (
        <nav className="w-full  shadow-lg">
            {/* Desktop and Mobile Container */}
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left: Logo */}
                <Link to="/" className="text-xl font-bold text-white">
                    Ashraful
                </Link>

                {/* Middle: Navigation Menu (visible on md and up) */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        to='/'
                        className={`text-gray-300 hover:text-white transition duration-300   
                            
                            ${location.pathname === "/" && location.hash === "" ? "border-b-2 border-purple-600" : ""
                            }`}
                    >
                        Home
                    </Link>
                    <a
                        href="#about"
                        className={`text-gray-300 hover:text-white transition duration-300  
                            
                            ${location.hash === "#about" ? "border-b-2 border-purple-600" : ""
                            }`}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className={`text-gray-300 hover:text-white transition duration-300  
                            
                            ${location.hash === "#projects" ? "border-b-2 border-purple-600" : ""
                            }`}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className={`text-gray-300 hover:text-white transition duration-300  
                            
                            ${location.hash === "#contact" ? "border-b-2 border-purple-600" : ""
                            }`}
                    >
                        Contact
                    </a>
                </div>

                {/* Right: Download CV Button (visible on md and up) */}
                <a
                    href="/Ashraful_resume.pdf"
                    download="Ashraful_resume.pdf"
                    className="hidden md:inline-block py-2 px-6 bg-[#565960]  text-white font-medium rounded-md hover:bg-purple-700 transition duration-300"
                >
                    Download CV
                </a>
                {/* <button className="relative flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 3h9a4.5 4.5 0 0 1 4.5 4.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 4.5h.008m-5.258 2.25a3.75 3.75 0 1 1-5.3 5.3 3.75 3.75 0 0 1 5.3-5.3z"
                        />
                    </svg>
                </button> */}

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white text-2xl focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    <HiMenuAlt4 />
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black py-4 space-y-4">
                    <Link
                        to="#home"
                        className={`block text-center text-gray-300 hover:text-white transition duration-300 ${location.hash === "#home" ? "border-b-2 border-purple-600" : ""
                            }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <a
                        href="#about"
                        className={`block text-center text-gray-300 hover:text-white transition duration-300 ${location.hash === "#about" ? "border-b-2 border-purple-600" : ""
                            }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className={`block text-center text-gray-300 hover:text-white transition duration-300 ${location.hash === "#projects" ? "border-b-2 border-purple-600" : ""
                            }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className={`block text-center text-gray-300 hover:text-white transition duration-300 ${location.hash === "#contact" ? "border-b-2 border-purple-600" : ""
                            }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </a>
                    <a
                        href="/Ashraful_resume.pdf"
                        download="Ashraful_resume.pdf"
                        className="block text-center mt-4 py-2 px-4 mx-auto w-max bg-[#565960] text-white font-medium rounded-md hover:bg-purple-700 transition duration-300"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;