import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const CareerCard = ({ job }) => {
    return (
        <div className="p-4 sm:p-6 h-full bg-white rounded-md shadow-md border-2 mx-2">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                {job.title}
            </h3>
            <div className="mb-4">
                <p className="flex items-center text-black text-sm sm:text-base">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    {job.location}
                </p>
            </div>
            <p className="text-black mb-6 line-clamp-3 text-sm sm:text-base">
                {job.description}
            </p>
            <div className="flex justify-end">
                <button className="flex items-center text-black hover:text-gray-700 transition-colors text-sm sm:text-base">
                    More Details
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </button>
            </div>
        </div>
    );
};

export default CareerCard;