import { Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-600">
                            © SPECTACOM GLOBAL | ALL RIGHTS RESERVED.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="/privacy-policy"
                            className="text-sm text-gray-600 hover:text-gray-900 mr-6 transition duration-300"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="https://www.linkedin.com/company/spectacomglobal/?originalSubdomain=in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition duration-300"
                        >
                            <Linkedin size={25} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

