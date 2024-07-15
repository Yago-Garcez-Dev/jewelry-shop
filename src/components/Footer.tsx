import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <img src="/logo.png" alt="Logo" className="h-12 mx-auto mb-4" />
            <div className="flex justify-center space-x-4">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
