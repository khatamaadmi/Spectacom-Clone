import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CareerCard from './CareerCard';
import { jobPositions } from './Careers.js';

const CareerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === jobPositions.length - 3 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? jobPositions.length - 3 : prev - 1
        );
    };

    return (
        <div className="relative max-w-[95vw] mx-auto px-4 py-16">
            <h1 className={'text-2xl font-bold'}>Openings</h1>
            <div className="overflow-hidden">
                <div
                    className="flex gap-6 transition-transform duration-500 ease-in-out text-black"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                        width: `${(jobPositions.length / 3) * 100}%`
                    }}
                >
                    {jobPositions.map((job, index) => (
                        <div key={index} className="w-1/4 flex-shrink-0 p-6">
                            <CareerCard job={job} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
            <p>*Please send your CV at hr@spectacom.in</p>
        </div>
    );
};

export default CareerSlider;