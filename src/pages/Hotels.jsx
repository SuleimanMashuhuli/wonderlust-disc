import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dianiHotelsData } from '../data/dianiHotels';
import HotelCard from '../components/HotelCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Hotels() {
  const [searchParams] = useSearchParams();
  const [filteredHotels, setFilteredHotels] = useState(dianiHotelsData);
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'name',
    search: searchParams.get('search') || ''
  });

  const categories = [...new Set(dianiHotelsData.map(hotel => hotel.category))];

  useEffect(() => {
    let filtered = dianiHotelsData;

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(hotel => 
        hotel.name.toLowerCase().includes(searchTerm) ||
        hotel.description.toLowerCase().includes(searchTerm) ||
        hotel.category.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.category) {
      filtered = filtered.filter(hotel => hotel.category === filters.category);
    }

    switch (filters.sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        break;
    }

    setFilteredHotels(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      sortBy: 'name',
      search: ''
    });
  };

  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Recommended Hotels in Diani Beach</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've curated a list of our top hotel recommendations in Diani to ensure a comfortable stay during your adventure. 
              From luxury resorts to budget-friendly options, we have accommodations to suit every traveler's needs.
            </p>
          </div>

          {/* Filters and Hotels */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Filter Hotels</h3>
                
                {/* Search Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Hotels
                  </label>
                  <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    placeholder="Search by name, description..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
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
                    <option value="name">Name (A-Z)</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Clear Filters
                </button>

                {/* Statistics */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Hotel Statistics</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total Hotels:</span>
                      <span className="font-semibold">{dianiHotelsData.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Luxury:</span>
                      <span className="font-semibold">{dianiHotelsData.filter(h => h.category === 'Luxury').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mid-Range:</span>
                      <span className="font-semibold">{dianiHotelsData.filter(h => h.category === 'Mid-Range').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget:</span>
                      <span className="font-semibold">{dianiHotelsData.filter(h => h.category === 'Budget').length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotels Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <p className="text-gray-600">
                  Showing {filteredHotels.length} of {dianiHotelsData.length} hotels
                </p>
              </div>
              
              {filteredHotels.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No hotels found</h3>
                  <p className="text-gray-600">Try adjusting your filters to see more results.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredHotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
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