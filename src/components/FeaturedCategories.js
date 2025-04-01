"use client";
import Link from "next/link";

export default function FeaturedCategories() {
  const categories = [
    { name: "Women", link: "/products" },
    { name: "Men", link: "/men" },
    { name: "Children", link: "/children" },
    { name: "Sales", link: "/sales" },
    { name: "Accessories", link: "/accessories" },
    { name: "Shoes", link: "/shoes" },
    { name: "New Arrivals", link: "/new-arrivals" },
  ];

  return (
    <section className="bg-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8">
          🛍️ Explore Our Featured Categories
        </h2>

        {/* Category Buttons - Responsive */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <button className="w-full sm:w-48 px-6 py-3 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
                {category.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
