export default function TestimonialCard({ testimonial }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <div className="flex items-center">
            {renderStars(testimonial.rating)}
            <span className="ml-2 text-sm text-gray-500">({testimonial.rating}/5)</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 italic">"{testimonial.comment}"</p>
    </div>
  );
} 