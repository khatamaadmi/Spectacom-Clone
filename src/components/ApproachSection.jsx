import { Clock, Users } from 'lucide-react'

export default function ApproachSection() {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-8">
                {/* Heading */}
                <h2 className="text-lg font-semibold tracking-wider text-gray-600 uppercase">
                    OUR APPROACH
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Ideate Create Build Card */}
                    <div className="p-8 rounded-lg">
                        <div className="space-y-2 text-5xl font-[500]">
                            <p>Ideate.</p>
                            <p>Create.</p>
                            <p>Build.</p>
                        </div>
                    </div>

                    {/* Community Card */}
                    <div className=" p-8  text-center">
                        <svg className="w-16 h-16 mx-auto mb-4 "
                             focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 6h-6V7h6v4zM4 7h8v10H4V7zm10 10v-4h6v4h-6zm-4.5-5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"></path>
                        </svg>
                        <p className="text-3xl font-bold mb-2 text-[#b89841]">2 mn+</p>
                        <p className="text-gray-600 font-medium uppercase">community</p>
                    </div>

                    {/* Corporates Card */}
                    <div className=" p-8 text-center">
                        <Clock className="w-16 h-16 mx-auto mb-4 "/>
                        <p className="text-3xl font-bold mb-2 text-[#b89841]">2000+</p>
                        <p className="text-gray-600 font-medium uppercase">corporates</p>
                    </div>

                    {/* Cities Card */}
                    <div className="p-8 text-center">
                        <Users className="w-16 h-16 mx-auto mb-4 " />
                        <p className="text-3xl font-bold mb-2 text-[#b89841]">1000+</p>
                        <p className="text-gray-600 font-medium uppercase">cities</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

