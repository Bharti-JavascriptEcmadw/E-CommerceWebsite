import Link from "next/link";

export default function BottomNavbar() {
  return (
    <div className="bg-green-200 text-black py-2">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-1">
        <Link href="/" className="hover:underline text-base sm:text-lg py-2 px-4">Home</Link>
        <Link href="/women" className="hover:underline text-base sm:text-lg py-2 px-4">Women</Link>
        <Link href="/men" className="hover:underline text-base sm:text-lg py-2 px-4">Men</Link>
        <Link href="/shop" className="hover:underline text-base sm:text-lg py-2 px-4">Shop</Link>
        <Link href="/contact" className="hover:underline text-base sm:text-lg py-1 px-4">Contact</Link>
      </div>
    </div>
  );
}
