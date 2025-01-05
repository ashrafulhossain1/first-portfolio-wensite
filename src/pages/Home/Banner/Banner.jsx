import React from 'react';
import bannerImg from '../../../assets/bannerMy.png'

const Banner = () => {
    return (
        <div className=" bg-purple-100 pt-10  flex flex-col md:flex-row items-center md:justify-between">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-3 text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wide font-medium text-primary">Front-end Developer</h3>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-neutral">
                    Building Scalable and Interactive <span className="text-primary">Web Solutions</span>
                </h1>
                <div className="flex gap-4 mb-4 items-center justify-center md:justify-start">
                    {/* Facebook */}
                    <a href="https://www.linkedin.com/in/ashrafulhossain1" target="_blank" rel="noopener noreferrer">
                        <button className="transition-transform transform hover:scale-110">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                                alt="Facebook"
                            />
                        </button>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/ashrafulhossain1" target="_blank" rel="noopener noreferrer">
                        <button className="transition-transform transform hover:scale-110">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                                alt="GitHub"
                            />
                        </button>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
                        <button className="transition-transform transform hover:scale-110">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://img.icons8.com/?size=100&id=2y_wcSzVjqiQ&format=png&color=000000"
                                alt="UP"
                            />
                        </button>
                    </a>

                    {/* Another Icon (Optional) */}
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <button className="transition-transform transform hover:scale-110">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=000000"
                                alt="Other Platform"
                            />
                        </button>
                    </a>
                </div>


                <button className=" px-2 rounded-lg border-2 bg-white py-1 mt-8 transition-transform transform hover:scale-110">
                    <a
                        href="/Ashraful-Hossain_CV.pdf"
                        download="Ashraful-Hossain_CV.pdf"
                    >
                        Download CV
                    </a>
                </button>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2  w-full flex justify-center md:justify-end">
                <img
                    src={bannerImg}
                    alt="Designer Portrait"
                    className="w-full object-cover md:w-full h-[350px] md:h-[450px]"
                />
            </div>
        </div>
    );
};

export default Banner;
