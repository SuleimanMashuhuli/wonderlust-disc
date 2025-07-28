import { Link } from 'react-router-dom';

export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={tour.image_url} 
          alt={tour.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {tour.destination}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {tour.duration}
          </span>
        </div>
        {tour.includesAccommodation && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Accommodation Included
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{tour.activity_type}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">{tour.difficulty}</span>
          </div>
          <div className=" font-semibold ">
            From <div className="text-2xl text-red-500">${tour.price}</div>
          </div>
        </div>
        
        <Link 
          to={`/tours/${tour.id}`}
          className="block w-full bg-red-500 hover:bg-red-600 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
} 