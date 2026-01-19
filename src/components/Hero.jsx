import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        VLSI Summit on Nanotechnology and Embedded Systems
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-blue-200">
                        NES 2026
                    </h2>
                    <p className="text-xl md:text-2xl mb-2 text-blue-100">
                        January 30–31, 2026
                    </p>
                    <p className="text-lg md:text-xl mb-8 text-blue-200">
                        Silicon University, Odisha
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Register Now
                        </Link>
                        <a
                            href="#about"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
