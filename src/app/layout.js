import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./CartContext"; // ✅ Cart Context
import Layout from "../components/Layout"; // ✅ Import Layout

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Shopping Site",
  description: "The best online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider> {/* ✅ Wrap entire app in CartProvider */}
          <Layout>{children}</Layout> {/* ✅ Wrap children in Layout */}
        </CartProvider>
      </body>
    </html>
  );
}
