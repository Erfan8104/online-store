"use client";
import Link from "next/link";
import { useCart } from "./../app/context/CartContext";

export default function Header() {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce(
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
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            سبد خرید
          </Link>
          <Link href="/account" className="text-gray-700 hover:text-blue-600">
            حساب
          </Link>
        </nav>
        <Link href="/cart" className="relative inline-block">
          <span className="text-2xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            {cartItemCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
