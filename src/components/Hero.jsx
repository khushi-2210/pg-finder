const Hero = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Find Your Perfect PG
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Search and discover the best paying guest accommodations around you.
      </p>
      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Enter city, area, or landmark"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </section>
  );
};

export default Hero;
