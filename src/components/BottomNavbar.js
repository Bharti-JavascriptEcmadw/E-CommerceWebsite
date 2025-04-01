import Link from "next/link";

export default function BottomNavbar() {
  return (
    <div className="bg-green-200 text-black py-3">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-12">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/women" className="hover:underline">Women</Link>
        <Link href="/men" className="hover:underline">Men</Link>
        <Link href="/shop" className="hover:underline">Shop</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  );
}
