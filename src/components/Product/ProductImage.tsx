import React, { useState } from 'react';

interface ProductImageProps {
    imageUrl: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <div
            className={`relative w-full md:w-1/2 ${isZoomed ? 'scale-150' : ''} transition-transform duration-300`}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
        >
            <img
                className="w-full h-auto object-cover cursor-pointer"
                src={imageUrl}
                alt="Product"
            />
        </div>
    );
};

export default ProductImage;
