"use client";
import Link from "next/link";
import { useCart } from "./../app/context/CartContext";

export default function Header() {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
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
          <Link
            href="/cart"
            className="text-sm font-medium hover:text-blue-600"
          >
            🛒 سبد خرید
          </Link>

          <Link href="/account" className="text-gray-700 hover:text-blue-600">
            حساب
          </Link>
        </nav>

        <Link href="/cart" className="relative flex items-center gap-1">
          🛒
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
