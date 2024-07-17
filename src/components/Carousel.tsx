import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../assets/images/categoria-pulseiras.jpg';

const Carousel: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const recentProducts = [
        { title: 'Produto 1', imageUrl: image, price: 'R$ 100,00' },
        { title: 'Produto 2', imageUrl: image, price: 'R$ 200,00' },
        { title: 'Produto 3', imageUrl: image, price: 'R$ 300,00' },
        { title: 'Produto 4', imageUrl: image, price: 'R$ 400,00' },
        { title: 'Produto 5', imageUrl: image, price: 'R$ 500,00' },
        { title: 'Produto 6', imageUrl: image, price: 'R$ 600,00' },
    ];

    return (
        <Slider {...settings}>
            {recentProducts.map((product, index) => (
                <div key={index} className="p-4 h-[500px]">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
                        <img src={product.imageUrl} alt={product.title} className="w-full h-5/6 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <h3 className="text-lg font-semibold">{product.price}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
