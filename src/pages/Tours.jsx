import { useState, useEffect } from 'react';
import { tours } from '../data/tours';
import TourCard from '../components/TourCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Tours() {
  const [filteredTours, setFilteredTours] = useState(tours);
  const [filters, setFilters] = useState({
    destination: '',
    activityType: '',
    priceRange: '',
    duration: '',
    includesAccommodation: false,
    sortBy: 'popularity'
  });

  const destinations = [...new Set(tours.map(tour => tour.destination))];
  const activityTypes = [...new Set(tours.map(tour => tour.activity_type))];
  const durations = [...new Set(tours.map(tour => tour.duration))];

  useEffect(() => {
    let filtered = tours;

    if (filters.destination) {
      filtered = filtered.filter(tour => tour.destination === filters.destination);
    }

    if (filters.activityType) {
      filtered = filtered.filter(tour => tour.activity_type === filters.activityType);
    }

    if (filters.duration) {
      filtered = filtered.filter(tour => tour.duration === filters.duration);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(tour => {
        if (max) {
          return tour.price >= min && tour.price <= max;
        }
        return tour.price >= min;
      });
    }

    if (filters.includesAccommodation) {
      filtered = filtered.filter(tour => tour.includesAccommodation);
    }

    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'duration':
        filtered.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
      case 'popularity':
      default:
        break;
    }

    setFilteredTours(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      destination: '',
      activityType: '',
      priceRange: '',
      duration: '',
      includesAccommodation: false,
      sortBy: 'popularity'
    });
  };

  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Exciting Tours</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover Africa's most incredible destinations with our carefully curated tours. 
              From wildlife safaris to cultural experiences, we have the perfect adventure for you.
            </p>
          </div>

          {/* Filters and Tours */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Filter Tours</h3>
                
                {/* Destination Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <select
                    value={filters.destination}
                    onChange={(e) => handleFilterChange('destination', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">All Destinations</option>
                    {destinations.map(dest => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>

                {/* Activity Type Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Activity Type
                  </label>
                  <select
                    value={filters.activityType}
                    onChange={(e) => handleFilterChange('activityType', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">All Activities</option>
                    {activityTypes.map(activity => (
                      <option key={activity} value={activity}>{activity}</option>
                    ))}
                  </select>
                </div>

                {/* Duration Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={filters.duration}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Any Duration</option>
                    {durations.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Any Price</option>
                    <option value="0-500">Under $500</option>
                    <option value="500-1000">$500 - $1000</option>
                    <option value="1000-1500">$1000 - $1500</option>
                    <option value="1500-9999">Over $1500</option>
                  </select>
                </div>

                {/* Includes Accommodation Filter */}
                <div className="mb-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.includesAccommodation}
                      onChange={(e) => handleFilterChange('includesAccommodation', e.target.checked)}
                      className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Includes Accommodation</span>
                  </label>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration">Duration</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <p className="text-gray-600">
                  Showing {filteredTours.length} of {tours.length} tours
                </p>
              </div>
              
              {filteredTours.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No tours found</h3>
                  <p className="text-gray-600">Try adjusting your filters to see more results.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 