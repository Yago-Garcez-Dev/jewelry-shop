import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">

            <div className="w-auto flex flex-col items-center py-2">
                <span className="font-windsong text-3xl">Cris Neri</span>
                <span className="font-windsong text-2xl">Pratas</span>
            </div>

            <div className="flex justify-center space-x-4">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
