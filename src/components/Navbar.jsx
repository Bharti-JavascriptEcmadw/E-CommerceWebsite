"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaUser, FaSearch, FaHeart, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCart } from "CartContext";
import TopBar from "./TopBar";  // Import the TopBar component

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const router = useRouter();

  // Access cart data from Context
  const { cartItems, getTotalQuantity, getTotalCartPrice } = useCart(); 

  // Update login state dynamically
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLoginClick = () => router.push("/login");
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };
  const handleProfileClick = () => router.push("/profile");
  const handleSearchClick = () => router.push(`/search?query=${searchQuery}`);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery(category);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* 🔹 Top Bar */}
      <TopBar 
        selectedLanguage={selectedLanguage} 
        setSelectedLanguage={setSelectedLanguage} 
        isLangDropdownOpen={isLangDropdownOpen} 
        setIsLangDropdownOpen={setIsLangDropdownOpen} 
      />

      {/* 🔹 Main Navbar */}
      <nav className="bg-gray-800 p-4 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 flex-wrap">
          
          {/* Left: Logo */}
          <h1 className="text-2xl font-bold w-full md:w-auto text-center md:text-left">
            <Link href="/">MyShop</Link>
          </h1>

          {/* Center: Category Dropdown + Search Bar */}
          <div className="flex items-center w-full md:w-1/2 space-x-2 relative mt-4 md:mt-0">
            {/* Category Dropdown */}
            <div className="relative w-full sm:w-1/3 md:w-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-800 px-4 py-2 rounded-md flex items-center space-x-2 w-full hover:bg-gray-700"
              >
                <span>{selectedCategory}</span>
                <FaChevronDown />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white text-black shadow-lg rounded-md z-10">
                  {["Electronics", "Clothing", "Books", "Shoes", "Beauty", "Home Appliances"].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative flex-grow w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md text-black bg-white focus:outline-none"
              />
              <button onClick={handleSearchClick} className="absolute right-2 top-2 text-gray-600 hover:text-black">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Right: Cart, Wishlist, Profile */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            {/* Cart Icon with Count */}
            <Link href="/cart" className="relative flex items-center space-x-1 hover:text-yellow-300">
              <FaShoppingCart className="text-2xl cursor-pointer" />
              
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  {getTotalQuantity()}
                </span>
              )}

              {cartItems.length > 0 && (
                <span className="ml-2 bg-gray-800 px-2 py-1 rounded text-xs">
                  ₹{getTotalCartPrice()}
                </span>
              )}
            </Link>

            {/* Wishlist Icon */}
            <Link href="/wishlist" className="hover:text-yellow-300">
              <FaHeart className="text-2xl cursor-pointer" />
            </Link>

            {/* Profile / Login Icon */}
            {isLoggedIn ? (
              <button onClick={handleProfileClick} className="hover:text-yellow-300">
                <FaUser className="text-2xl cursor-pointer" />
              </button>
            ) : (
              <button onClick={handleLoginClick} className="hover:text-yellow-300">
                <FaUser className="text-2xl cursor-pointer" />
              </button>
            )}

            {/* Logout Button */}
            {isLoggedIn && (
              <button onClick={handleLogoutClick} className="hover:underline text-red-900">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
