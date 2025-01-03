import React, { useState } from 'react';
import PartnerTabs from "./PartnersTab.jsx";
import PartnerSlider from './ShowcaesSlider.jsx';
import { partners } from './partners.js';

const PartnersShowcase = () => {
    const [activeTab, setActiveTab] = useState('partners');

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-gray-600 uppercase mb-2">
                        Look who is already here
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900">
                        These brands have experienced the magic of the community
                    </h2>
                </div>

                <PartnerTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <PartnerSlider partners={partners} />
            </div>
        </div>
    );
};

export default PartnersShowcase;