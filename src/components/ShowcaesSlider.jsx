import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PartnerSlider = ({partners} ) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === partners.length - 4 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? partners.length - 4 : prev - 1
        );
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div
                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                        width: `${(partners.length / 4) * 100}%`
                    }}
                >
                    {partners.map((partner, index) => (
                        <div key={index} className="w-1/4 flex-shrink-0 px-2">
                            <div className="p-4">
                                <img
                                    src={partner.imageUrl}
                                    alt={partner.name}
                                    className="w-full h-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50 transition-colors"
            >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50 transition-colors"
            >
                <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
        </div>
    );
};

export default PartnerSlider