import 'react';

const Welcome = () => {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-[#b89841] text-lg md:text-xl mb-4 uppercase tracking-wider font-medium">
                    welcome to Spectacom Global
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
                    We Build communities around health and fitness.
                </h1>
                <div className="text-gray-600 text-lg flex">
                    <p className={'text-start'}>
                        At Spectacom Global, we're more than just a company - we're a multi-faceted powerhouse
                        of innovation, dedicated to bringing about positive transformations
                    </p>
                    <p className={'text-start'}>
                        and enhancing lifestyles. Our diverse portfolio of businesses spans across the realms
                        of entertainment, technology, and health and wellness.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;