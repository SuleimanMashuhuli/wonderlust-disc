export default function HotelCard({ hotel }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Luxury':
        return 'bg-purple-500';
      case 'Mid-Range':
        return 'bg-blue-500';
      case 'Budget':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getPriceRange = (category) => {
    switch (category) {
      case 'Luxury':
        return '$$$';
      case 'Mid-Range':
        return '$$';
      case 'Budget':
        return '$';
      default:
        return '$$';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={hotel.imageUrl} 
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`${getCategoryColor(hotel.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
            {hotel.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-sm font-semibold">
            {getPriceRange(hotel.category)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{hotel.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{hotel.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">{getPriceRange(hotel.category)}</span>
          </div>
          
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
} 