
export default function Why() {
    return (
        <div className="w-full text-white flex flex-col justify-evenly mx-auto px-4 h-[800px] py-16 space-y-12 bg-hero-pattern bg-cover bg-center]">
            {/* Heading */}
            <div className="text-center space-y-4">
                <p className="text-sm font-semibold tracking-wider uppercase">
                    WHY SPECTACOM?
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">
                    We Build. We Create. We Innovate.
                </h2>
            </div>

            {/* Content Box */}
            <div className="p-8 space-y-6 w-[70vw] mx-auto">
                <svg className="lucide lucide-message-square w-20 h-20 mx-auto"
                     fill={"#b89841"}
                      viewBox="0 0 24 24"
                     style={{fontSize:"80px"}}>
                    <path
                        d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
                </svg>
                <h3 className="text-xl font-semibold text-center">
                    We care about getting India Active.
                </h3>
                <p className="text-[#999] text-center">
                    Our mission is to create interesting concepts in the realm of Health & Wellness,
                    that allow you to move forward on your wellness journey. Whether you are a newbie,
                    or a gym bod, our world has communities that you can be a part of. Inspire, and be inspired.
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 font-semibold rounded-full hover:underline transition duration-300">
                    We build Communities.
                </button>
                <button className="px-6 py-3 font-semibold hover:underline transition duration-300">
                    We Create Experiences.
                </button>
                <button className="px-6 py-3 font-semibold  hover:underline transition duration-300">
                    We innovate concepts.
                </button>
            </div>
        </div>
    )
}

