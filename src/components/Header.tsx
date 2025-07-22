"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto  px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600 ">
          online store
        </Link>
        <nav className="space-x-4 ">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            خانه
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            محصولات
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            سبد خرید
          </Link>
          <Link href="/account" className="text-gray-700 hover:text-blue-600">
            حساب
          </Link>
        </nav>
      </div>
    </header>
  );
}
