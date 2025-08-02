const CTASection = () => {
  const handleSearchClick = () => {
    // Later: navigate or trigger a search modal
    console.log("Start Searching clicked");
  };

  const handleListPGClick = () => {
    // Later: open form or send to listing page
    console.log("List Your PG clicked");
  };

  return (
    <section className="bg-green-50 py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Ready to Find Your Perfect PG?
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Join thousands of satisfied residents who found their ideal accommodation through PGFinder.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={handleSearchClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl"
        >
          Start Searching
        </button>
        <button
          onClick={handleListPGClick}
          className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl"
        >
          List Your PG
        </button>
      </div>
    </section>
  );
};

export default CTASection;
