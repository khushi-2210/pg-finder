const features = [
  {
    title: "Verified Listings",
    description: "All PGs are manually verified to ensure safety and quality.",
    icon: "✅",
  },
  {
    title: "Advanced Filters",
    description: "Find PGs based on your budget, location, and preferences.",
    icon: "🎯",
  },
  {
    title: "Real-time Availability",
    description: "Check which PGs have current openings instantly.",
    icon: "📅",
  },
  {
    title: "No Hidden Charges",
    description: "What you see is what you pay. Zero hidden costs.",
    icon: "💸",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-900 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We make PG-hunting effortless with features designed just for students and young professionals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-6 text-left hover:shadow-md transition hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
