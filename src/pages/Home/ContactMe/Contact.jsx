import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: "7452bcc1-9b97-43d8-ab3e-2032d3afedb8", // Replace with your actual access key
                }),
            });
            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Failed to send message.");
        }
    };

    return (
        <div
            id="contact"
            className="flex justify-center items-center py-10 bg-[#212428] text-white"
        >
            <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side: Form */}
                <div className="w-full bg-[#181A1E] p-6 rounded-2xl shadow-lg border border-gray-700">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
                        Contact Me
                    </h2>
                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-[#212428] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-[#212428] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {/* Subject Field */}
                        <div className="mb-4 col-span-full">
                            <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Enter subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-[#212428] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {/* Message Field */}
                        <div className="mb-4 col-span-full">
                            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-[#212428] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="col-span-full w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md"
                        >
                            Send
                        </button>
                    </form>
                    {/* Status Message */}
                    {status && (
                        <p
                            className={`mt-4 text-center ${
                                status.includes("successfully") ? "text-green-400" : "text-red-400"
                            }`}
                        >
                            {status}
                        </p>
                    )}
                </div>

                {/* Right Side: Contact Details */}
                <div className="w-full bg-[#181A1E] p-6 rounded-2xl shadow-lg border border-gray-700">
                    <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
                        Reach Out to Me
                    </h2>
                    <div className="space-y-4 text-gray-300">
                        {/* Email Address */}
                        <div className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <p>Email: ahmeadashraful@gmail.com</p>
                        </div>
                        {/* Phone Number */}
                        <div className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 18h.01M8 21h8a2 2 0 002-2v-4.586c0-.866-.933-1.406-1.688-1.077l-3.863 2.895a2 2 0 01-2.654 0l-3.863-2.895C7.933 13.094 7 13.636 7 14.5V19a2 2 0 002 2z"
                                />
                            </svg>
                            <p>Phone: +8801710110566</p>
                        </div>
                        {/* WhatsApp Number */}
                        <div className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-green-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                            <p>WhatsApp: +8801710110566</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;