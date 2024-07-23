import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaHeart, FaEnvelope } from 'react-icons/fa';

interface ProductDetailsProps {
    category: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviewsCount: number;
    inStock: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    category,
    name,
    description,
    price,
    rating,
    reviewsCount,
    inStock,
}) => {
    const [notificationRequested, setNotificationRequested] = useState(false);

    const handleNotifyMe = () => {
        setNotificationRequested(true);
        // Adicione aqui a lógica para notificar o usuário por e-mail ou outro meio
    };

    return (
        <div className="md:w-1/2 p-4">
            <p className="text-gray-600 mb-8">Categoria: {category}</p>
            <h2 className="text-xl font-bold text-gray-900 mb-10">{name}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-6">R$ {price.toFixed(2)}</p>

            <div className="flex items-center mb-10">
                {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {rating >= i + 1 ? (
                            <FaStar className="text-yellow-500" />
                        ) : rating >= i + 0.5 ? (
                            <FaStarHalfAlt className="text-yellow-500" />
                        ) : (
                            <FaRegStar className="text-gray-400" />
                        )}
                    </span>
                ))}
                <span className="ml-2 text-gray-600">({reviewsCount} avaliações)</span>
            </div>

            {inStock ? (
                <div className="flex items-center space-x-4 mb-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex-1 flex items-center justify-center mx-1">
                        <FaShoppingCart className="mr-2" />
                        Adicionar ao Carrinho
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300 flex-1 flex items-center justify-center mx-1">
                        <FaHeart className="mr-2" />
                        Adicionar aos Favoritos
                    </button>
                </div>
            ) : (
                <div className="flex items-center mb-4">
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 flex-1 flex items-center justify-center mx-1"
                        onClick={handleNotifyMe}
                    >
                        <FaEnvelope className="mr-2" />
                        {notificationRequested ? 'Você será notificado!' : 'Avisar quando disponível'}
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300 flex-1 flex items-center justify-center mx-1">
                        <FaHeart className="mr-2" />
                        Adicionar aos Favoritos
                    </button>
                </div>
            )}

            {!inStock && (
                <p className="text-red-500 mt-2">Produto indisponível</p>
            )}
        </div>
    );
};

export default ProductDetails;
