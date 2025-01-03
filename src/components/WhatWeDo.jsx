import 'react';
import { ServiceItem } from './ServiceItem.jsx';
import { services } from './serviceData.jsx';

export default function WhatWeDo() {
    return (
        <div className="container xs:mx-auto m-0  p-4 flex-wrap gap-4 xs:flex flex flex-col items-center justify-center">
            <div className="container mx-auto py-16 md:py-24 grid md:grid-cols-2">
                <div className="relative left-[-50px] h-[600px] md:h-auto">
                    <img
                        src="https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhatWeDo4.7a284465.jpg&w=1920&q=75"
                        alt="Platform illustration"
                        width={600}
                        height={600}
                        className=" w-full h-full object-cover"
                    />
                </div>

                <div className="space-y-8 w-full bg-gray-50">
                    <div className="space-y-4">
                        <h2 className="text-[#b89841] uppercase tracking-wide font-medium">What We Do</h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Universe</h1>
                        <p className="text-xl text-blue-600">
                            We build engaging platforms that enable consumers to get healthier, and more active.
                        </p>
                    </div>

                    <div className="md:grid md:grid-cols-2 gap-6 p-4 flex-wrap">
                        {services.map((service, index) => (
                            <ServiceItem key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}