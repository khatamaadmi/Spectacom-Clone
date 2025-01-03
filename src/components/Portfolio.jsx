import { useState } from 'react';


const portfolioCategories = [
    'Obstacle Race',
    'Ticketing Platform',
    'Health & Wellness App',
    'Corporate Wellness',
    'Media Properties'
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('Obstacle Race');

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-[#b89841] font-medium mb-2">Our Portfolio</p>
                <h2 className="text-3xl font-bold text-gray-900">What We have Built So Far</h2>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
                {portfolioCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 uppercase font-semibold py-2 rounded-full transition-all ${
                            activeCategory === category
                                ? 'underline underline-offset-8 decoration-[#b89841]'
                                : 'text-gray-500'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="space-y-8">
                    <PortfolioCard
                        imageUrl="https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobst3.c733115b.jpg&w=3840&q=75"
                        description="We're the creators of the adrenaline-pumping obstacle race The Devils Circuit that makes you push the limits of human endurance. Join us in conquering the untamed and discover the thrill of conquering the impossible."
                        aos="zoom-out-up"
                    />
                    <PortfolioCard
                        imageUrl="https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobst5.923adbfd.jpg&w=3840&q=75"
                        description="We're the creators of the adrenaline-pumping obstacle race The Devils Circuit that makes you push the limits of human endurance. Join us in conquering the untamed and discover the thrill of conquering the impossible."
                        aos="fade-up-left"
                    />
                </div>
                <div>
                    <PortfolioCard
                        imageUrl="https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobst2.49e9d563.jpg&w=1920&q=75"
                        description="We're the creators of the adrenaline-pumping obstacle race The Devils Circuit that makes you push the limits of human endurance. Join us in conquering the untamed and discover the thrill of conquering the impossible."
                        aos="zoom-out-down"
                        tall
                    />
                </div>
            </div>
        </section>
    );
};

// eslint-disable-next-line react/prop-types
const PortfolioCard = ({ imageUrl, description, aos, tall = false }) => {
    return (
        <div
            className={`relative group overflow-hidden  ${
                tall ? 'aspect-auto' : 'aspect-video'
            }`}
            data-aos={aos}
        >
            <img
                src={imageUrl}
                alt="Portfolio project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gray-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute w-full h-full flex flex-col justify-center items-center px-24">
                    <p className="text-white text-md md:text-2xl md:font-bold">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;