import React from 'react';
import bannerImg from '../../../assets/bannerMy.png'

const Banner = () => {
    return (
        <div className=" bg-purple-100  h-[450px]   flex flex-col-reverse md:flex-row items-center justify-between p-8">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-3 text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wide font-medium text-primary">Front-end Developer</h3>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-neutral">
                    Building Scalable and Interactive <span className="text-primary">Web Solutions</span>
                </h1>
                <div className="flex gap-4 mb-4">
                    <button className="transition-transform transform hover:scale-110">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                            alt=""
                        />
                    </button>
                    <button className="transition-transform transform hover:scale-110">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                            alt=""
                        />
                    </button>
                    <button className="transition-transform transform hover:scale-110">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://img.icons8.com/?size=100&id=2y_wcSzVjqiQ&format=png&color=000000"
                            alt=""
                        />
                    </button>
                    <button className="transition-transform transform hover:scale-110">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=000000"
                            alt=""
                        />
                    </button>
                </div>

                <button className="btn btn-primary rounded-lg px-6 py-2 mt-8">Download My CV</button>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2  w-full flex justify-center md:justify-end">
                <img
                    src={bannerImg}
                    alt="Designer Portrait"
                    className="w-full object-cover md:w-full h-[450px]"
                />
            </div>
        </div>
    );
};

export default Banner;
