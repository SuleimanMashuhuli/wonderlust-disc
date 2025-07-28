import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tours } from '../data/tours';
import { dianiHotelsData } from '../data/dianiHotels';
import HotelMiniCard from '../components/HotelMiniCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    travelers: 1,
    name: '',
    email: '',
    phone: ''
  });
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  useEffect(() => {
    const foundTour = tours.find(t => t.id === parseInt(id));
    setTour(foundTour);
  }, [id]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the booking data to a server
    setShowBookingSuccess(true);
    setTimeout(() => setShowBookingSuccess(false), 5000);
  };

  const handleInputChange = (e) => {
    setBookingForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  if (!tour) {
    return (
      <>
        <Header />
        <div className="pt-20 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour not found</h1>
              <Link to="/tours" className="text-red-500 hover:text-red-600">
                Back to Tours
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Get related tours (same destination or activity type)
  const relatedTours = tours
    .filter(t => t.id !== tour.id && (t.destination === tour.destination || t.activity_type === tour.activity_type))
    .slice(0, 3);

  // Get recommended hotels for this tour
  const recommendedHotels = tour.recommendedHotelIds 
    ? dianiHotelsData.filter(hotel => tour.recommendedHotelIds.includes(hotel.id))
    : [];

  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="relative mb-8">
            <img 
              src={tour.image_url} 
              alt={tour.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{tour.title}</h1>
              <div className="flex items-center space-x-4">
                <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.destination}
                </span>
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </span>
                <span className="text-2xl font-bold">From ${tour.price}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <p className="text-gray-600 mb-6">{tour.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">{tour.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">{tour.group_size}</div>
                    <div className="text-sm text-gray-600">Group Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">{tour.difficulty}</div>
                    <div className="text-sm text-gray-600">Difficulty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">{tour.activity_type}</div>
                    <div className="text-sm text-gray-600">Activity Type</div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h2>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Not Included</h2>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-red-500 text-xl">✗</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Accommodation */}
              {recommendedHotels.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Accommodation</h2>
                  <p className="text-gray-600 mb-4">
                    We've carefully selected these hotels to complement your safari experience in Diani Beach.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recommendedHotels.map((hotel) => (
                      <HotelMiniCard key={hotel.id} hotel={hotel} />
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
                <div className="space-y-6">
                  {tour.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                          <span className="ml-2 text-sm text-gray-500">({review.rating}/5)</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Tours */}
              {relatedTours.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Tours</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedTours.map((relatedTour) => (
                      <Link 
                        key={relatedTour.id} 
                        to={`/tours/${relatedTour.id}`}
                        className="block group"
                      >
                        <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                          <img 
                            src={relatedTour.image_url} 
                            alt={relatedTour.title}
                            className="w-full h-24 object-cover rounded mb-2"
                          />
                          <h3 className="font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
                            {relatedTour.title}
                          </h3>
                          <p className="text-sm text-gray-600">From ${relatedTour.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Book This Tour</h2>
                
                {showBookingSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Booking request submitted successfully! We'll contact you soon.
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={bookingForm.date}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={bookingForm.travelers}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    <div className="pt-4">
                      <div className="text-center mb-4">
                        <span className="text-3xl font-bold text-red-500">${tour.price}</span>
                        <span className="text-gray-600"> per person</span>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 