import 'react';
import DreamersContent from './DreamersContent';

const Dreamers = () => {
    return (
        <section className="w-full py-16">
            <DreamersContent />
            <div className="relative h-[50vh] md:h-[70vh]">
                <img
                    src="https://spectacom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDreamers.07c6e050.jpg&w=3840&q=75"
                    alt="Group of people working out together"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Dreamers;