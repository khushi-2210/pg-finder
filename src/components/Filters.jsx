import React from "react";

const Filters = () => {
    return (
        <section className="bg-white p-4 rounded-xl shadow-md mb-6 mx-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Price Range */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Price Range</label>
                    <select className="w-full border rounded-lg px-3 py-2">
                        <option value="">Select</option>
                        <option value="0-3000">Below ₹6000</option>
                        <option value="3000-6000">₹6000 - ₹12000</option>
                        <option value="6000+">Above ₹12000</option>
                    </select>
                </div>

                {/* Amenities */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Amenities</label>
                    <div className="flex flex-wrap gap-2">
                        {["Wi-Fi", "Food", "AC"].map((amenity) => (
                            <label key={amenity} className="text-sm flex items-center gap-1">
                                <input type="checkbox" className="accent-blue-500" />
                                {amenity}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Sharing Type */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Sharing Type</label>
                    <select className="w-full border rounded-lg px-3 py-2">
                        <option value="">Select</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                    </select>
                </div>

            </div>
        </section>
    );
};

export default Filters;
