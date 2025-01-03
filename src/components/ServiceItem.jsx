import  'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export const ServiceItem = ({ icon, title, description, socialLinks }) => {
    return (
        <div className="space-y-4 p-2 w-full ">
            <div className="flex flex-col gap-2">
                <span className="bg-gold-100 p-2 rounded-lg text-[#b89841]">
                  {icon}
                </span>
                <h3 className="font-bold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
            {socialLinks && (
                <div className="flex gap-2">
                    {socialLinks.includes('facebook') && <Facebook className="w-5 h-5 text-gray-600" />}
                    {socialLinks.includes('instagram') && <Instagram className="w-5 h-5 text-gray-600" />}
                    {socialLinks.includes('youtube') && <Youtube className="w-5 h-5 text-gray-600" />}
                </div>
            )}
        </div>
    );
};