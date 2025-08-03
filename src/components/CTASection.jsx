const CTASection = () => {
  const handleSearchClick = () => {
    console.log("Start Searching clicked");
  };

  const handleListPGClick = () => {
    console.log("List Your PG clicked");
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-950 py-20 px-6 mb-0 text-center text-white" >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Find Your Perfect PG?
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Join thousands of happy residents who found their ideal home with PGFinder. Whether you’re searching or listing — we’ve got you covered.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <button
          onClick={handleSearchClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Start Searching
        </button>
        <button
          onClick={handleListPGClick}
          className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-950 hover:border-blue-400 py-3 px-6 rounded-full font-semibold transition duration-300"
        >
          List Your PG
        </button>
      </div>
    </section>
  );
};

export default CTASection;
