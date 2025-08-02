const PGCard = ({ pg }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={pg.image} alt={pg.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{pg.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{pg.location}</p>
        <p className="text-blue-600 font-semibold mb-2">₹{pg.price}/month</p>
        <ul className="text-xs text-gray-500">
          {pg.amenities.map((a, i) => (
            <li key={i}>• {a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PGCard;
