const testimonials = [
  {
    name: "Riya Sharma",
    location: "Delhi University",
    review:
      "Finding a PG was always stressful, but this site made it so easy. I loved the clear filters and the verified listings!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore",
    review:
      "The UI is super clean and intuitive. Found a PG in under 10 minutes. Highly recommend this platform!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sana Iqbal",
    location: "Mumbai",
    review:
      "I was moving cities and had no clue where to stay. This platform helped me compare prices, amenities, and even read PG ratings.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Users Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800 hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-blue-500"
                />
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400 mb-2">{t.location}</p>
              </div>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                “{t.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
