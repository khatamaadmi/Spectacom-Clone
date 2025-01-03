import 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
    {
        id: 1,
        heading: "For Corporates, Colleges, Athletes, & Amateurs",
        image: "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner1.4637db8d.jpg&w=3840&q=75"
    },
    {
        id: 2,
        heading: "Building Communities",
        image: "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner3.e6d274d2.jpeg&w=3840&q=75"
    },
    {
        id: 3,
        heading: "Around Health & Wellness",
        image: "https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner2.282a0879.jpg&w=3840&q=75"
    }
];

const Header = () => {
    return (
        <div className="relative">
            {/* Navigation Bar */}
            <nav className="absolute top-0 left-0 right-0 z-50 bg-black bg-opacity-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img className="text-2xl font-bold text-white w-56" src={"https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo3.d46e4d5d.png&w=1200&q=75"}/>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <a href="#" className="text-[#b89841] hover:text-[#d4b05c] transition-colors uppercase">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#b89841] transition-colors uppercase">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#b89841] transition-colors uppercase">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#b89841] transition-colors uppercase">
                                        Career
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#b89841] transition-colors uppercase">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                className="relative"
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="relative md:h-screen h-[50vh]">
                        <div className="absolute inset-0 bg-black bg-opacity-10 z-10 flex items-center justify-center">
                            <h2 className="text-4xl md:text-6xl text-white font-bold text-center max-w-4xl px-4">
                                {slide.heading}
                            </h2>
                        </div>
                        <img
                            src={slide.image}
                            alt={slide.heading}
                            className="h-screen w-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Header;