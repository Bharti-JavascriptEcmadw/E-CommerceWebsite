"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Banner1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-gray-100 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ROISER</h1>

          {/* Navigation */}
          <nav className="hidden sm:flex">
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/login" className="text-blue-500">Login</Link></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="sm:hidden px-3 py-2 bg-gray-200 rounded-lg">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 bg-gray-50 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Home Decor</h2>
        <p className="text-lg mt-2">From $299.00</p>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">Explore Items</button>
      </section>

      {/* Offers */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-4">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold">30% Flat Sale</h3>
          <p>Use code: <span className="text-red-500">HOT30</span></p>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md">Start Shopping</button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold">10% Flat Sale</h3>
          <p>Save 20% on orders over $2500</p>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md">Start Shopping</button>
        </div>
      </section>

      {/* Product List */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-40 sm:h-48 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
