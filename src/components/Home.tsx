import React from 'react';
import CategoryCard from './CategoryCard';
import Carousel from './Carousel';
import image from '../assets/images/categoria-pulseiras.jpg';

const categories = [
    { title: 'Anéis', imageUrl: image },
    { title: 'Brincos', imageUrl: image },
    { title: 'Colares', imageUrl: image },
    { title: 'Conjuntos', imageUrl: image },
    { title: 'Joias Masculinas', imageUrl: image },
    { title: 'Joias Infantis', imageUrl: image },
    { title: 'Pingentes e Berloques', imageUrl: image },
    { title: 'Pulseiras', imageUrl: image },
    { title: 'Tornozeleiras', imageUrl: image },
    { title: 'Joias Personalizadas', imageUrl: image },
];

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center">
                {categories.map((category, index) => (
                    <CategoryCard key={index} title={category.title} imageUrl={category.imageUrl} />
                ))}
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-center">Adicionados Recentemente</h2>
            <Carousel />
        </div>
    );
};

export default Home;
