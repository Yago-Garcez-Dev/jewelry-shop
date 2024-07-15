import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Carousel from '../components/Carousel';

const categories = [
    'Anéis', 'Brincos', 'Colares', 'Conjuntos', 'Joias Masculinas',
    'Joias Infantis', 'Pingentes e Berloques', 'Pulseiras', 'Tornozeleiras',
    'Joias Personalizadas'
];

const Home: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                {categories.map((category) => (
                    <CategoryCard key={category} category={category} />
                ))}
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Adicionados Recentemente</h2>
            <Carousel />
        </div>
    );
};

export default Home;
