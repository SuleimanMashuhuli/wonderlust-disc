import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 py-4 z-50 bg-black/20 backdrop-blur-sm">
            <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">
                    Digo Nomads Safaris
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center space-x-8">
                    <Link
                        to="/"
                        className="py-2 px-4 text-base font-semibold text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                        Home
                    </Link>

                    <Link
                        to="/tours"
                        className="py-2 px-4 text-base font-semibold text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                        Tours
                    </Link>

                    <Link
                        to="/hotels"
                        className="py-2 px-4 text-base font-semibold text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                        Hotels
                    </Link>

                    <Link
                        to="/about"
                        className="py-2 px-4 text-base font-semibold text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                        About Us
                    </Link>

                    <Link
                        to="/contact"
                        className="py-2 px-4 text-base font-semibold text-white rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/tours"
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-semibold transition-colors duration-200"
                    >
                        Book Now
                    </Link>
                </div>
            </nav>
        </header>
    );
}