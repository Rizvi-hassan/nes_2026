import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const isRegister = location.pathname === '/register';
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="shrink-0">
                        <Link to="/" className="text-xl font-bold text-blue-600">
                            NES 2026
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/register"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Link
                            to={isRegister ? '/' : '/register'}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                            {isRegister ? 'Home' : 'Register'}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
