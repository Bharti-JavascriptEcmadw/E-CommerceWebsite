"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../../CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-blue-600">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <div className="overflow-hidden border rounded-lg">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl sm:text-xl md:text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">{product.description}</p>
          <p className="text-xs sm:text-sm md:text-md text-gray-500">Category: {product.category}</p>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">Brand: {product.brand}</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">₹{product.price}</p>
          <p className="text-sm sm:text-md text-gray-500">Stock: {product.stock}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all w-full sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
