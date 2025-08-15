import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center text-center"
      style={{ backgroundImage: "url('/PGROOM.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-20 px-6 pt-28 md:pt-36 pb-8 md:pb-0 w-full max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
          Find Your Perfect <span className="text-yellow-400">Space</span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Your perfect PG is out there. Affordable, comfortable, and just around the corner.
        </p>

        <div className="mt-6">
          <button className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full shadow-lg">
            Start Your Search
          </button>
        </div>

        {/* badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Verified Safe", "High-Speed WiFi", "Student Friendly"].map((label) => (
            <span
              key={label}
              className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ===== Desktop filter card ===== */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-10 w-full max-w-5xl px-4 z-30">
        <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-2xl shadow-2xl p-5">
          <div className="grid grid-cols-6 gap-4 items-end">
            {/* Location */}
            <div className="col-span-2">
              <label className="block text-sm text-gray-200 mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter your city here"
                className="w-full bg-gray-800/50 text-white border border-gray-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-300 placeholder-gray-400"
              />
            </div>

            {/* Room type */}
            <div>
              <label className="block text-sm text-gray-200 mb-1">Room Type</label>
              <select
                className="w-full bg-gray-800/50 text-white border border-gray-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-300"
              >
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>
            </div>

            {/* Max price */}
            <div>
              <label className="block text-sm text-gray-200 mb-1">Max Price</label>
              <input
                type="number"
                placeholder="e.g. 10000"
                className="w-full bg-gray-800/50 text-white border border-gray-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-300 placeholder-gray-400"
              />
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-sm text-gray-200 mb-1">Amenities</label>
              <div className="flex gap-3 flex-wrap">
                {["WiFi", "AC", "Food", "Geyser"].map((amenity) => (
                  <label key={amenity} className="inline-flex items-center gap-2 text-sm text-gray-200">
                    <input type="checkbox" className="w-4 h-4 accent-yellow-400" />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            {/* Search button */}
            <div className="flex items-center justify-end">
              <button
                className="px-8 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold shadow-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile filter card ===== */}
      <div className="md:hidden relative w-full max-w-xl px-6 mt-8 z-20">
        <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-5">
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-sm text-gray-200 mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter your city here"
                className="w-full bg-gray-800/50 text-white border border-gray-500 rounded-lg px-4 py-3 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-1">Room Type</label>
              <select className="w-full bg-gray-800/50 text-white border border-gray-500 rounded-lg px-4 py-3">
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-1">Max Price</label>
              <input
                type="number"
                placeholder="e.g. 10000"
                className="w-full bg-gray-800/50 text-white border border-gray-500 rounded-lg px-4 py-3 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-1">Amenities</label>
              <div className="flex gap-3 flex-wrap">
                {["WiFi", "AC", "Food", "Geyser"].map((amenity) => (
                  <label key={amenity} className="inline-flex items-center gap-2 text-sm text-gray-200">
                    <input type="checkbox" className="w-4 h-4 accent-yellow-400" />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full">
                Search PGs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;