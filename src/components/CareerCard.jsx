import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const CareerCard = ({job} ) => {
    return (
        <div className="p-6 w-[25vw] bg-white rounded-md shadow-md border-2">
            <h3 className="text-xl font-semibold text-black mb-3">
                {job.title}
            </h3>
            <div className="mb-4">
                <p className="flex items-center text-black">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                </p>
            </div>
            <p className="text-black mb-6 line-clamp-3">
                {job.description}
            </p>
            <div className="flex justify-end">
                <button className="flex items-center text-black hover:text-black transition-colors">
                    More Details
                    <ArrowRight className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>
    );
};

export default CareerCard;