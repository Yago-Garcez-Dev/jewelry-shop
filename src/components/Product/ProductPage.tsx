import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import image from '../../assets/images/item-pulseira.png';

const productData: Product[] = [
    {
        id: '1',
        category: 'Pulseiras',
        name: '18K Gold 2 Row Square Bangle with Diamonds',
        description: 'A stunning 18K gold bangle adorned with sparkling diamonds. Perfect for any occasion.',
        price: 1500.00,
        rating: 4.5,
        reviewsCount: 120,
        imageUrl: image,
        inStock: true,
    },
    // Adicione mais produtos aqui
];

interface Product {
    id: string;
    category: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviewsCount: number;
    imageUrl: string;
    inStock: boolean;
}

const ProductPage: React.FC = () => {
    const { category, idproduct } = useParams<{ category: string; idproduct: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (category && idproduct) {
            const foundProduct = productData.find(p => p.id === idproduct && p.category.toLowerCase() === category.toLowerCase());
            setProduct(foundProduct || null);
        }
    }, [category, idproduct]);

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 bg-gray-100">
            <ProductImage imageUrl={product.imageUrl} />
            <ProductDetails
                category={product.category}
                name={product.name}
                description={product.description}
                price={product.price}
                rating={product.rating}
                reviewsCount={product.reviewsCount}
                inStock={product.inStock}
            />
        </div>
    );
};

export default ProductPage;
