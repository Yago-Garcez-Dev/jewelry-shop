import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-600 text-white">
            <div className="w-3/12 flex space-x-4">
                <a href="#">Início</a>
                <a href="#">Categorias</a>
                <a href="#">Dicas</a>
                <a href="#">Contatos</a>
                <a href="#">Feedbacks</a>
            </div>

            <div className="w-2/12 flex flex-col text-center">
                <span className="font-windsong text-4xl">Cris Neri</span>
                <span className="font-windsong text-3xl">Pratas</span>
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
