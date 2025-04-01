"use client";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ImageCardCarousel() {
  const scrollRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const imageCards = [
    { id: 1, src: "/images/1.jpg", alt: "Product 1", price: "₹799" },
    { id: 2, src: "/images/2.jpg", alt: "Product 2", price: "₹1,299" },
    { id: 3, src: "/images/3.jpg", alt: "Product 3", price: "₹999" },
    { id: 4, src: "/images/4.jpg", alt: "Product 4", price: "₹1,499" },
    { id: 5, src: "/images/5.jpg", alt: "Product 5", price: "₹899" },
  ];

  return (
    <motion.section
      className="py-12 sm:py-14 bg-gradient-to-r from-yellow-100 via-pink-200 to-purple-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌟 Featured Products
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons (Only visible on larger screens) */}
          <div className="hidden sm:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2">
            <motion.button
              onClick={() => handleScroll(-300)}
              className="bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              onClick={() => handleScroll(300)}
              className="bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight />
            </motion.button>
          </div>

          {/* Cards Container (Scroll Area) */}
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 sm:space-x-6 py-4 px-2 sm:px-4 scrollbar-hide snap-x snap-mandatory"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {imageCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="flex-shrink-0 w-64 sm:w-72 h-80 bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 snap-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-3/4 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="text-center py-3 bg-gradient-to-r from-yellow-300 to-pink-400">
                  <p className="text-lg font-semibold text-white">{card.alt}</p>
                  <p className="text-xl font-bold text-white">{card.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
}
