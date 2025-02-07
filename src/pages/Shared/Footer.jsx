import './navbar.css'
const Footer = () => {
    return (
        <footer className="bg-[#131313] text-white py-4 footer-css">
            <div className="container mx-auto text-center">
                <p className="text-sm font-medium">
                    Designed and Developed by{" "}
                    <span className="text-blue-400 font-bold">Ashraful Hossain</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    Copyright © {new Date().getFullYear()} - All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;