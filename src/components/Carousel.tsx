import React from 'react';
import Slider from 'react-slick';

const Carousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Dummy data
    const products = ["Produto 1", "Produto 2", "Produto 3", "Produto 4", "Produto 5", "Produto 6"];

    return (
        <div className="p-4">
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="p-2">
                        <div className="border p-4 rounded shadow-md hover:shadow-lg">
                            <h3>{product}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
