import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Users Say
        </h2>

        <Swiper
          loop = {true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 1.5, centeredSlides: true },
            1024: { slidesPerView: 2, centeredSlides: true },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/80 backdrop-blur-md border border-teal-300 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-md mx-auto">
                <div className="flex flex-col items-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mb-4 border-4 border-cyan-500 shadow-md"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed italic">
                  {t.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
