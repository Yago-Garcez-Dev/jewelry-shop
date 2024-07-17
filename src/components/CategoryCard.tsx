import React from 'react';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
    return (
        <div className="relative w-64 h-80 m-4 rounded-lg overflow-hidden shadow-md">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 bg-black bg-opacity-10 text-white p-2">
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;
