function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Event Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">NES 2026</h3>
                        <p className="text-sm mb-2">
                            VLSI Summit on Nanotechnology and Embedded Systems
                        </p>
                        <p className="text-sm mb-2">
                            January 30–31, 2026
                        </p>
                        <p className="text-sm">
                            Silicon University, Odisha
                        </p>
                    </div>

                    {/* Partners */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Partners</h3>
                        <ul className="space-y-2 text-sm">
                            <li>VLSI Society of India (VSI)</li>
                            <li>Sevya Multimedia</li>
                            <li>Silicon University</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/register" className="hover:text-white transition-colors">
                                    Register
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Silicon University  */}
                    <div className="grid grid-cols-2 md:grid-cols-2">
                        <ul className="space-y-2 text-sm">
                            <li>
                                <h1 className="text-white text-xl mb-1 text-nowrap">Silicon University</h1>
                            </li>
                            <li>
                                Silicon Hills, Patia,
                            </li>
                            <li>
                                Bhubaneswar - 751024
                            </li>
                            <li>
                                Odisha, India.
                            </li>
                        </ul>
                        <img src="/images/silicon.png" alt="25 years of Silicon" className="ml-10 w-30 object-contain" />

                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
                    <p className="text-gray-400">
                        © 2026 NES 2026 - VLSI Summit on Nanotechnology and Embedded Systems.
                        All rights reserved.
                    </p>
                    <p className="text-gray-500 mt-2">
                        Organized by Department of Electronics Engineering, Silicon University
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
