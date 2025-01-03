import React from 'react';

// eslint-disable-next-line react/prop-types
const PartnerTabs = ({ activeTab, onTabChange }) => {
    return (
        <div className="flex justify-center mb-8">
            <button
                className={`px-6 py-2 rounded-full mr-4 transition-all ${
                    activeTab === 'partners'
                        ? 'underline underline-offset-8 decoration-[#b89841]'
                        : 'text-gray-500'
                }`}
                onClick={() => onTabChange('partners')}
            >
                Partners
            </button>
            <button
                className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === 'customers'
                        ? 'underline underline-offset-8 decoration-[#b89841]'
                        : 'text-gray-500'
                }`}
                onClick={() => onTabChange('customers')}
            >
                Customers
            </button>
        </div>
    );
};

export default  PartnerTabs;