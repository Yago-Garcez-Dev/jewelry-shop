import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex space-x-4">
                <a href="#">Início</a>
                <a href="#">Categorias</a>
                <a href="#">Dicas</a>
                <a href="#">Contatos</a>
                <a href="#">Dicas Úteis</a>
                <a href="#">Feedbacks</a>
            </div>
            <div className="flex-grow text-center">
                <img src="/logo.png" alt="Logo" className="h-12 inline-block" />
            </div>
            <div className="flex space-x-4">
                <a href="#">Login/Cadastro</a>
                <a href="#"><i className="fa fa-heart"></i></a>
                <a href="#"><i className="fa fa-shopping-cart"></i></a>
                <a href="#"><i className="fa fa-search"></i></a>
            </div>
        </header>
    );
};

export default Header;
