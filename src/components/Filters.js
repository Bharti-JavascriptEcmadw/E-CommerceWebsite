"use client";
import { useState } from "react";

const categories = ["All", "Men", "Women", "Kids", "Shoes", "Accessories"];
const sizes = ["All", "S", "M", "L", "XL", "42", "One Size"];
const brands = ["All", "Nike", "Zara", "Adidas", "Raymond", "Gucci", "Puma", "Louis Vuitton"];
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹3000", min: 1000, max: 3000 },
  { label: "Above ₹3000", min: 3000, max: Infinity },
];

export default function Filters({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      size: selectedSize,
      brand: selectedBrand,
      priceRange: selectedPriceRange,
    });
  };

  return (
    <div className="w-1/4 border-r pr-5">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Filter by Category</h3>
        {categories.map(category => (
          <button 
            key={category}
            className={`block w-full text-left p-2 rounded-lg ${selectedCategory === category ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => { setSelectedCategory(category); handleFilterChange(); }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Filter by Price</h3>
        {priceRanges.map(range => (
          <button
            key={range.label}
            className={`block w-full text-left p-2 rounded-lg ${selectedPriceRange.label === range.label ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => { setSelectedPriceRange(range); handleFilterChange(); }}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Filter by Size</h3>
        {sizes.map(size => (
          <button 
            key={size}
            className={`block w-full text-left p-2 rounded-lg ${selectedSize === size ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => { setSelectedSize(size); handleFilterChange(); }}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Filter by Brand</h3>
        {brands.map(brand => (
          <button 
            key={brand}
            className={`block w-full text-left p-2 rounded-lg ${selectedBrand === brand ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => { setSelectedBrand(brand); handleFilterChange(); }}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}
