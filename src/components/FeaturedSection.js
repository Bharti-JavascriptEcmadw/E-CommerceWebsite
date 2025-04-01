"use client";
import Link from "next/link";

export default function FeaturedSection() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24 md:py-32 px-4"
      style={{ backgroundImage: "url('/images/23.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>  

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          ✨ Discover Our Latest Collection!
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 drop-shadow-md">
          Elevate your shopping experience with hand-picked selections, premium quality, 
          and unbeatable prices. Shop now and enjoy exclusive deals tailored just for you!
        </p>
        
        {/* CTA Buttons - Responsive */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <Link
            href="/products"
            className="bg-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            🛍 Shop Now
          </Link>
          <Link
            href="/sales"
            className="bg-gray-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            🔥 View Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
