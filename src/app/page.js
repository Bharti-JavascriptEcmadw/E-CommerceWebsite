// app/page.js
"use client";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedCategories from "../components/FeaturedCategories";
import ImageCardCarousel from "../components/ImageCardCarousel";
import BottomNavbar from "../components/BottomNavbar";

export default function Home() {
  return (
    <div>
      {/* Featured Sections */}
      <BottomNavbar/> 
      <FeaturedSection />
      <h1 className="text-3xl font-bold text-center my-5">Welcome to Our Store</h1>

      <FeaturedCategories />
      <ImageCardCarousel />

      
     
    </div>
  );
}
