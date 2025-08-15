// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     name: "Riya Sharma",
//     location: "Delhi University",
//     review:
//       "I had 3 non-negotiables: good lighting, a big mirror, and cute curtains. Found all three here. Manifested my Pinterest PG ✨.",
//     avatar:
//       "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
//   },
//   {
//     name: "Arjun Mehta",
//     location: "Bangalore",
//     review:
//       "The Wi-Fi is faster than my manager’s replies. Love the peaceful vibe and chai at the corner tapri.",
//     avatar:
//       "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
//   },
//   {
//     name: "Sana Iqbal",
//     location: "Mumbai",
//     review:
//       "I was moving cities and had no clue where to stay. This platform helped me compare prices, amenities, and even read PG ratings.",
//     avatar:
//       "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
//   },
// ];

// const Reviews = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           centerPadding: "20px",
//         },
//       },
//     ],
//   };

//   return (
//     <section className="relative py-20 px-4 md:px-8 bg-white overflow-hidden">
//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
//         >
//           What Users Say
//         </motion.h2>
//         <Slider {...settings}>
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="px-4"
//             >
//               <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-[80%] mx-auto border border-gray-200">
//                 <div className="flex flex-col items-center">
//                   <div className="relative">
//                     <img
//                       src={t.avatar}
//                       alt={t.name}
//                       className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-lg"
//                     />
//                   </div>
//                   <h4 className="text-lg font-semibold text-gray-900 mt-4">
//                     {t.name}
//                   </h4>
//                   <p className="text-sm text-gray-500">{t.location}</p>
//                 </div>
//                 <p className="text-gray-700 mt-4 italic text-center">
//                   {t.review}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

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
    <section className="relative pt-2 py-15 px-4 md:px-8 bg-yellow-50 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-3 font-extrabold text-gray-900 text-center font-poppins"
        >
          What <span className="text-yellow-500">Users Say</span>
        </motion.h2>
        {/* Accent underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 w-20 bg-yellow-500 mx-auto mt-3 mb-12 origin-left"
                ></motion.div>

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
            <div className="relative flex flex-col items-center">
              {/* Avatar ABOVE the card */}
              <div className="z-20">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-6 border-orange-400 shadow-lg object-cover"
                />
              </div>
              {/* Card BELOW the avatar */}
              <div className="bg-white mt-[-2.5rem] pt-10 pb-6 px-6 rounded-2xl shadow-lg border-3 border-yellow-400 max-w-xl w-full">
                <h4 className="text-lg font-semibold text-gray-900">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.location}</p>
                <p className="text-gray-700 mt-4 italic text-center leading-relaxed">
                  {t.review}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
    </section >
  );
};

export default Reviews;
