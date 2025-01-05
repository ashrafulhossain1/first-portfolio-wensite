import { MdOutlineMenu } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav id="top" className="fixed top-0 w-full z-50 bg-base-100 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Left: Name */}
                <Link to={'/'} className="text-xl font-bold">
                    Ashraful
                </Link>

                {/* Middle: Navigation Menu (visible on md and up) */}
                <div className="hidden md:flex space-x-6">
                    <Link href="#top" className="btn btn-ghost normal-case">
                        Home
                    </Link>
                    <a href="#about" className="btn btn-ghost normal-case">
                        About
                    </a>
                    <a href="#projects" className="btn btn-ghost normal-case">
                        Projects
                    </a>
                    <a href="#contact" className="btn btn-ghost normal-case">
                        Contact
                    </a>
                </div>

                <div>
                    {/* Right: Download CV Button */}
                    <a
                        href="/Ashraful-Hossain_CV.pdf"
                        download="Ashraful-Hossain_CV.pdf" 
                        className="border-2 rounded-md py-1 px-2 bg-purple-200"
                    >
                        Download CV
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="btn p-0 btn-ghost btn-square md:hidden"
                        aria-label="Toggle Navigation"
                    >
                        <MdOutlineMenu className="p-0" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-end bg-base-200 p-4 space-y-4">
                    <a
                        href="#home"
                        className="btn btn-ghost normal-case text-right"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="btn btn-ghost normal-case text-right"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="btn btn-ghost normal-case text-right"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="btn btn-ghost normal-case text-right"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
