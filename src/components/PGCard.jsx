// PGCard.jsx
const PGCard = ({ pg }) => {
  return (
    <div className="max-w-sm bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-cyan-700">
      {/* Image */}
      <img
        src={pg.image}
        alt={pg.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-black">{pg.name}</h2>
        <p className="text-sm text-gray-800">{pg.location}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-2">
          {pg.amenities?.map((amenity, index) => (
            <span
              key={index}
              className="bg-cyan-700/20 text-black text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-base font-semibold text-teal-600">
            ₹{pg.price}/month
          </span>
          <button className="bg-teal-600 hover:bg-teal-500 text-white text-sm px-4 py-2 rounded transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PGCard;
