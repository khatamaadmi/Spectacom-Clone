import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CareerCard from './CareerCard';
import { jobPositions } from './Careers.js';

const CareerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === jobPositions.length - slidesPerView ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? jobPositions.length - slidesPerView : prev - 1
        );
    };

    return (
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-16">
            <h1 className="text-2xl font-bold mb-8">Openings</h1>
            <div className="overflow-hidden">
                <div
                    className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                        width: `${(jobPositions.length / slidesPerView) * 100}%`
                    }}
                >
                    {jobPositions.map((job, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full ${
                                slidesPerView === 1 ? 'w-full' :
                                    slidesPerView === 2 ? 'w-1/2' : 'w-1/3'
                            }`}
                        >
                            <CareerCard job={job} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <p className="mt-6 text-gray-600">
                *Please send your CV at hr@spectacom.in
            </p>
        </div>
    );
};

export default CareerSlider;