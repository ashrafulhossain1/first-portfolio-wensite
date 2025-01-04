import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Business Administration (BBA)",
            major: "Major: Accounting",
            status: "Currently Pursuing",
            institution: "National University",
            color: "bg-blue-50 border-l-4 border-blue-600",
        },
        {
            degree: "Higher Secondary School Certificate (HSC)",
            institution: "Ibrahim Khan Government College",
            year: "Year of Completion: [2019]",
            color: "bg-gray-50 border-l-4 border-gray-600",
        },
    ];

    return (
        <section className="py-16 bg-purple-900/5 my-10 " id="education">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Educational Qualifications</h2>
                <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className={`${edu.color} p-6 rounded-lg shadow-md hover:bg-purple-900/10`}
                        >
                            <h3 className="text-2xl font-semibold text-gray-700">{edu.degree}</h3>
                            {edu.major && <p className="text-gray-600 mt-2">{edu.major}</p>}
                            <p className="text-gray-500 mt-2">{edu.status || edu.year}</p>
                            <p className="text-gray-500 mt-2 italic border-b-2 flex">{edu.institution}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
