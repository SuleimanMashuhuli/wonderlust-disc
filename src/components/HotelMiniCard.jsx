export default function HotelMiniCard({ hotel }) {
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

  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
      <div className="flex items-start space-x-3">
        <img 
          src={hotel.imageUrl} 
          alt={hotel.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-semibold text-gray-800 text-sm">{hotel.name}</h4>
            <span className={`${getCategoryColor(hotel.category)} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
              {hotel.category}
            </span>
          </div>
          <p className="text-gray-600 text-xs line-clamp-2">{hotel.description}</p>
          <button className="text-red-500 hover:text-red-600 text-xs font-semibold mt-2">
            Visit Website →
          </button>
        </div>
      </div>
    </div>
  );
} 