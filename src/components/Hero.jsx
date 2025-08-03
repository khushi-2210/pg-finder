const Hero = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text */}
        <div className="col-span-2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Find Your <span className="text-cyan-400">Perfect PG</span> in Seconds
          </h1>
          <p className="text-gray-400 mt-6 text-lg">
            Discover budget-friendly and comfortable PGs with the amenities you need — right where you want to be.
          </p>
          <div className="mt-8">
            <a
              href="#listings"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              Find a PG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
