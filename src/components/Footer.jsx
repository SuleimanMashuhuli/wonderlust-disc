import { Link } from 'react-router-dom';
import { companyInfo } from '../data/tours';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">{companyInfo.name}</h3>
                        <p className="text-gray-300 mb-4 max-w-md">
                            {companyInfo.mission}
                        </p>
                        <div className="flex space-x-4">
                            <a href={companyInfo.contact.social.facebook} className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href={companyInfo.contact.social.instagram} className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                                </svg>
                            </a>
                            <a href={companyInfo.contact.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/tours" className="text-gray-300 hover:text-white transition-colors">
                                    Tours
                                </Link>
                            </li>
                            <li>
                                <Link to="/hotels" className="text-gray-300 hover:text-white transition-colors">
                                    Hotels
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>{companyInfo.contact.phone}</p>
                            <p>{companyInfo.contact.email}</p>
                            <p>{companyInfo.contact.address}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}