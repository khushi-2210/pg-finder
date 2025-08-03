// import React from "react";

// const Filters = () => {
//     return (
//         <section className="bg-white p-4 rounded-xl shadow-md mb-6 mx-4">
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {/* Price Range */}
//                 <div>
//                     <label className="block mb-1 text-sm font-medium">Price Range</label>
//                     <select className="w-full border rounded-lg px-3 py-2">
//                         <option value="">Select</option>
//                         <option value="0-3000">Below ₹6000</option>
//                         <option value="3000-6000">₹6000 - ₹12000</option>
//                         <option value="6000+">Above ₹12000</option>
//                     </select>
//                 </div>

//                 {/* Amenities */}
//                 <div>
//                     <label className="block mb-1 text-sm font-medium">Amenities</label>
//                     <div className="flex flex-wrap gap-2">
//                         {["Wi-Fi", "Food", "AC"].map((amenity) => (
//                             <label key={amenity} className="text-sm flex items-center gap-1">
//                                 <input type="checkbox" className="accent-blue-500" />
//                                 {amenity}
//                             </label>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Sharing Type */}
//                 <div>
//                     <label className="block mb-1 text-sm font-medium">Sharing Type</label>
//                     <select className="w-full border rounded-lg px-3 py-2">
//                         <option value="">Select</option>
//                         <option value="single">Single</option>
//                         <option value="double">Double</option>
//                     </select>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Filters;

const Filters = () => {
  return (
    <section className="bg-gray-950 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-white">Filter Listings</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Location */}
          <div>
            <label className="block text-sm mb-2">Location</label>
            <select className="w-full bg-gray-800 text-gray-200 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-sm mb-2">Max Price (₹)</label>
            <input
              type="number"
              placeholder="e.g. 10000"
              className="w-full bg-gray-800 text-gray-200 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm mb-2">Amenities</label>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Wi-Fi", "AC", "Food", "Laundry", "Geyser"].map((amenity) => (
                <label key={amenity} className="flex items-center gap-1">
                  <input type="checkbox" className="accent-blue-500" />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
