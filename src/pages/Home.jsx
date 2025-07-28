import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tours, testimonials, companyInfo } from '../data/tours';
import { dianiHotelsData } from '../data/dianiHotels';
import TourCard from '../components/TourCard';
import TestimonialCard from '../components/TestimonialCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../components/1.jpg';

export default function Home() {
    const [searchForm, setSearchForm] = useState({
        search: '',
        dates: '',
        travelers: 1
    });

    const featuredTours = tours.filter(tour => tour.featured).slice(0, 3);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchTerm = searchForm.search.trim().toLowerCase();
        
        if (searchTerm) {
            const matchingHotel = dianiHotelsData.find(hotel => 
                hotel.name.toLowerCase().includes(searchTerm)
            );
            const matchingTour = tours.find(tour => 
                tour.title.toLowerCase().includes(searchTerm) ||
                tour.destination.toLowerCase().includes(searchTerm)
            );
            
            if (matchingHotel) {
                window.location.href = `/hotels?search=${encodeURIComponent(searchForm.search)}`;
            } else if (matchingTour) {
                window.location.href = `/tours?search=${encodeURIComponent(searchForm.search)}`;
            } else {
                window.location.href = `/tours?search=${encodeURIComponent(searchForm.search)}`;
            }
        } else {
            window.location.href = '/tours';
        }
    };

    const handleInputChange = (e) => {
        setSearchForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="relative w-full min-h-screen flex items-center justify-center transition-all duration-500 bg-cover bg-center z-10"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/50 z-0" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Discover Your Next Adventure
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Experience Africa's wild beauty with Hiazoo Safaris — where every journey is a story, and every moment leaves you breathless.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-4xl mx-auto">
                        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <input
                                type="text"
                                name="search"
                                value={searchForm.search}
                                onChange={handleInputChange}
                                placeholder="Search tours, hotels, destinations..."
                                className="p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500"
                            />
                            <input
                                type="date"
                                name="dates"
                                value={searchForm.dates}
                                onChange={handleInputChange}
                                className="p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500"
                            />
                            <select
                                name="travelers"
                                value={searchForm.travelers}
                                onChange={handleInputChange}
                                className="p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                                ))}
                            </select>
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <Link
                        to="/tours"
                        className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                    >
                        Explore All Tours
                    </Link>
                </div>
            </section>

            {/* Featured Tours Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Tours</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover our most popular safari experiences, carefully crafted to provide unforgettable adventures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredTours.map(tour => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/tours"
                            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                            View All Tours
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Hiazoo Safaris</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're committed to providing exceptional safari experiences that go beyond your expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyInfo.values.map((value, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Guests Say</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our guests have to say about their safari experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map(testimonial => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-red-500">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
                    <p className="text-xl mb-8">
                        Join thousands of travelers who have experienced the magic of Africa with Hiazoo Safaris.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/tours"
                            className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Browse Tours
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-red-500 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
