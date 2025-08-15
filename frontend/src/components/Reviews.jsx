import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Riya Sharma",
    location: "Delhi University",
    review:
      "I had 3 non-negotiables: good lighting, a big mirror, and cute curtains. Found all three here. Manifested my Pinterest PG ✨.",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore",
    review:
      "The Wi-Fi is faster than my manager’s replies. Love the peaceful vibe and chai at the corner tapri.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Sana Iqbal",
    location: "Mumbai",
    review:
      "I was moving cities and had no clue where to stay. This platform helped me compare prices, amenities, and even read PG ratings.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-yellow-100 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          What Users Say
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="bg-white/95 backdrop-blur-lg border-4 border-yellow-500 p-8 rounded-3xl shadow-lg hover:shadow-yellow-500/40 transition-all duration-300 w-[75%] md:w-[65%] mx-auto">
                <div className="flex flex-col items-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-500 shadow-lg"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-600">{t.location}</p>
                </div>
                <p className="text-gray-700 mt-6 text-base leading-relaxed italic text-center">
                  {t.review}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;