"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar /> {/* ✅ Navbar appears on all pages */}
      <main className="min-h-screen">{children}</main>
      <Footer /> {/* ✅ Footer appears on all pages */}
    </>
  );
}
