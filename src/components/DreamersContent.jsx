import 'react';

const DreamersContent = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-12 mx-auto p-24 px-52">
            <div className="space-y-2">
                <p className="text-3xl md:text-7xl ">We are</p>
                <p className="text-4xl md:text-8xl  text-[#b89841]">Dreamers.</p>
            </div>
            <div className="flex items-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                    And our dream is to create an ecosystem of health & wellness that impacts lives positively.
                    Whether you are a beginner or a veteran on your fitness journey, we have a community waiting
                    for you to be a part of.
                </p>
            </div>
        </div>
    );
};

export default DreamersContent;