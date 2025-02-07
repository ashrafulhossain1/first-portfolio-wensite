import React from 'react';
import bannerImg from '../../../assets/aboutMy.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div className="relative bg-[#131313] py-10 rounded-b-3xl container mx-auto ">
            {/* Floating Ripple Circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Circle 1 */}
                <div
                    className="transparent-circle"
                    style={{
                        top: '20%',
                        left: '10%',
                        animationDelay: '0s',
                    }}
                ></div>
                {/* Circle 2 */}
                <div
                    className="transparent-circle"
                    style={{
                        top: '40%',
                        right: '15%',
                        animationDelay: '1s',
                    }}
                ></div>
                {/* Circle 3 */}
                <div
                    className="transparent-circle"
                    style={{
                        bottom: '30%',
                        left: '25%',
                        animationDelay: '2s',
                    }}
                ></div>
                {/* Circle 4 */}
                <div
                    className="transparent-circle"
                    style={{
                        top: '60%',
                        right: '5%',
                        animationDelay: '3s',
                    }}
                ></div>
                {/* Circle 5 */}
                <div
                    className="transparent-circle"
                    style={{
                        bottom: '10%',
                        left: '50%',
                        animationDelay: '4s',
                    }}
                ></div>
            </div>

            {/* Existing Banner Content */}
            <div className='flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto gap-10 '>
                <div className="relative z-10 md:w-1/2 space-y-3 text-center md:text-left text-white">
                    <h3 className="text-xl md:text-2xl font-bold">
                        Junior Full Stack Web Developer
                    </h3>
                    <h1 className="text-3xl md:text-5xl font-medium">
                        Crafting Code Creating Impact...
                    </h1>
                    <div className="flex gap-4 mb-4 items-center justify-center md:justify-start">
                        {/* Social Links */}
                        <a href="https://www.linkedin.com/in/ashrafulhossain1" target="_blank" rel="noopener noreferrer">
                            <button className="transition-transform transform hover:scale-110">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                                    alt="LinkedIn"
                                />
                            </button>
                        </a>
                        <a href="https://github.com/ashrafulhossain1" target="_blank" rel="noopener noreferrer">
                            <button className="transition-transform transform hover:scale-110">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                                    alt="GitHub"
                                />
                            </button>
                        </a>
                        <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
                            <button className="transition-transform transform hover:scale-110">
                                <img
                                    className="w-9 h-9 p-1 bg-green-700 rounded-full"
                                    src="https://img.icons8.com/?size=100&id=2y_wcSzVjqiQ&format=png&color=000000"
                                    alt="Upwork"
                                />
                            </button>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <button className="transition-transform transform hover:scale-110">
                                <img
                                    className="w-9 h-9 bg-white p-1 rounded-full"
                                    src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=000000"
                                    alt="X (Twitter)"
                                />
                            </button>
                        </a>
                    </div>
                    <a
                        href="/Ashraful-Hossain_CV.pdf"
                        download="Ashraful-Hossain_CV.pdf"
                        className="hidden md:inline-block py-2 px-6 bg-[#565960] text-white font-medium rounded-md hover:bg-purple-700 transition duration-300"
                    >
                        Download CV
                    </a>
                </div>
                {/* Image Content */}
                <div className="md:w-[350px] h-[400px]">
                    <img
                        src={bannerImg}
                        alt="Designer Portrait"
                        className="w-full h-full border-2 border-purple-600 rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;