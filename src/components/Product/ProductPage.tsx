import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import image from '../../assets/images/item-pulseira.png';

const productData = {
    id: '1',
    category: 'Pulseiras',
    name: '18K Gold 2 Row Square Bangle with Diamonds',
    description: 'A stunning 18K gold bangle adorned with sparkling diamonds. Perfect for any occasion.',
    price: 1500.00,
    rating: 4.5,
    reviewsCount: 120,
    imageUrl: image,
};

const ProductPage: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 bg-gray-100">
            <ProductImage imageUrl={productData.imageUrl} />
            {/* <ProductImage imageUrl={image} /> */}
            <ProductDetails
                category={productData.category}
                name={productData.name}
                description={productData.description}
                price={productData.price}
                rating={productData.rating}
                reviewsCount={productData.reviewsCount}
                inStock={true}
            />
        </div>
    );
};

export default ProductPage;
