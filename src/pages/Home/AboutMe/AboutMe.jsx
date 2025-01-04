import React from "react";

const AboutMe = () => {
    return (
        <section id="about" className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center mb-8">
                    About Me
                </h2>

                {/* Content */}
                <div className="space-y-6 text-lg text-gray-700">
                    <p>
                        Ever since my first year in honors, I had a dream of becoming a programmer.
                        Unfortunately, due to financial struggles, I couldn’t buy a PC. However, I never gave up on my aspirations.
                        In my third year (2023), I started offering private tuition to save money. By June 2024, I stopped teaching and
                        used my savings to buy a PC, marking the beginning of my programming journey.
                    </p>

                    <p>
                        I am passionate about becoming a helpful person not only in programming but also in life. One of my biggest dreams
                        is to succeed and inspire underprivileged individuals to achieve their goals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
