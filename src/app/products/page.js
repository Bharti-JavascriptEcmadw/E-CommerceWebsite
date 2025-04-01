

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "CartContext"; 
import Filters from "../../components/Filters";

export default function ProductList() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    brand: "All",
    priceRange: { min: 0, max: Infinity },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerRow = 4;
  const rowsPerPage = 3;
  const productsPerPage = productsPerRow * rowsPerPage;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    (filters.category === "All" || product.category === filters.category) &&
    (filters.brand === "All" || product.brand === filters.brand) &&
    (product.price >= filters.priceRange.min && product.price <= filters.priceRange.max)
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-5 flex">
      {/* Sidebar Filters */}
      <Filters onFilterChange={setFilters} />

      {/* Product List */}
      <div className="w-3/4 pl-5 flex flex-col min-h-[80vh] justify-between">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                    <p className="text-sm text-gray-600">{product.description.slice(0, 80)}...</p> 
                    
                    {/* Price with Discount */}
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-lg font-semibold text-gray-900">₹{product.price}</p>
                      <span className="text-sm text-red-500">{product.discountPercentage}% OFF</span>
                    </div>

                    {/* Rating & Stock */}
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-yellow-500">⭐ {product.rating}</span>
                      <span className="text-green-600">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                    </div>

                    {/* Buttons */}
                    <button
                      onClick={() => addToCart(product)}
                      className="block bg-green-500 text-white p-2 mt-2 text-center rounded w-full"
                    >
                      Add to Cart
                    </button>

                    <Link href={`/products/${product.id}`}>
                      <button className="block bg-blue-500 text-white p-2 mt-2 text-center rounded w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">No products found.</p>
              )}
            </div>

            {/* Pagination (Spacing Improved) */}
            <div className="mt-10 flex justify-center items-center space-x-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}




