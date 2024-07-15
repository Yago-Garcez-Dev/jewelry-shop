import React from 'react';

interface CategoryCardProps {
    category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <div className="border p-4 rounded shadow-md hover:shadow-lg">
            <h2 className="text-xl font-bold">{category}</h2>
        </div>
    );
};

export default CategoryCard;
