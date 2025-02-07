import React from "react";

const AboutMe = () => {
    return (
        <section id="about" className="py-12 bg-[#100606] ">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text text-purple-700 ">
                    About Me
                </h2>

                {/* Content */}
                <div className="space-y-6 text-base md:text-lg text-gray-300 w-full md:w-3/4 mx-auto ">
                    {/* Intro Paragraph */}
                    <p className="text-center ">
                        Hi, I’m Ashraful Hossain, a dedicated and self-motivated junior front-end developer with a deep passion for programming that has inspired me since 2020—or even earlier. Despite facing personal and professional challenges along the way, I recently made the bold decision to fully commit to my dream of becoming a developer.
                    </p>

                    {/* Second Paragraph */}
                    <p className="text-center">
                        After stepping away from running a coaching center in 2023, I immersed myself in learning modern web development skills and building practical projects. With determination and a hunger for growth, I’m now focused on honing my craft, solving real-world problems, and continuously improving as a developer.
                    </p>

                    {/* Animated Background Circles */}
                    <div className="absolute hidden md:block inset-1 md:flex items-center justify-center pointer-events-none">
                        <div className="absolute w-64 h-64 bg-black rounded-full opacity-30 blur-3xl animate-pulse">

                        </div>
                        <div className="absolute w-48 h-48 bg-purple-950 rounded-full opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;