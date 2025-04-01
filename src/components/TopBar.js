"use client";
import Link from "next/link";
import { FaMapMarkerAlt, FaGlobe, FaChevronDown } from "react-icons/fa";

export default function TopBar({ selectedLanguage, setSelectedLanguage, isLangDropdownOpen, setIsLangDropdownOpen }) {
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className="bg-[#E53E3E] text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm flex-wrap">

        {/* Left: Links */}
        <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-start mt-2 md:mt-0">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/my-account" className="hover:underline">My Account</Link>
          <Link href="/checklist" className="hover:underline">Checklist</Link>
          <Link href="/wishlist" className="hover:underline">Wishlist</Link>
        </div>

        {/* Center: Free Shipping (only on medium and larger screens) */}
        <div className="text-yellow-300 font-semibold hidden md:block w-full md:w-auto text-center mt-2 md:mt-0">
          🎉 Free Shipping on Orders Above ₹333!
        </div>

        {/* Right: Store Location & Language Selector */}
        <div className="flex space-x-4 items-center justify-center w-full md:w-auto mt-2 md:mt-0">

          {/* Store Location */}
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-lg" />
            <span>Store Location</span>
          </div>
          
          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} 
              className="flex items-center space-x-1 hover:text-yellow-300"
            >
              <FaGlobe className="text-lg" />
              <span>{selectedLanguage}</span>
              <FaChevronDown />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-32 z-20">
                {["English", "Hindi", "French", "Spanish"].map((lang) => (
                  <button key={lang} onClick={() => handleLanguageSelect(lang)} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
