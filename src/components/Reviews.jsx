const reviews = [
  {
    name: "Aditi Sharma",
    rating: 5,
    comment: "Lovely PG! Super clean and food was amazing.",
  },
  {
    name: "Rahul Mehta",
    rating: 4,
    comment: "Location is great but Wi-Fi was a bit slow.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">User Reviews</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow border border-gray-200"
          >
            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-yellow-500 mb-2">{"⭐".repeat(review.rating)}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
