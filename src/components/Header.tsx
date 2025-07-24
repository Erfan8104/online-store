"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../app/context/CartContext"; // ✅ Make sure path is correct

export default function Header() {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
      <div
        className="
          max-w-7xl mx-auto
          px-4 md:px-10 py-4
          flex flex-wrap md:flex-nowrap flex-row-reverse
          items-center justify-between
          gap-4 md:gap-0
        "
      >
        {/* Logo and Title */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-blue-600 group"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            width={50}
            height={50}
          />
          فروشگاه آنلاین
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex flex-row-reverse gap-4 md:pl-[150px]">
          {[
            { href: "/", label: "خانه" },
            { href: "/products", label: "محصولات" },
            { href: "/account", label: "حساب" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                px-4 py-2 text-lg font-medium text-gray-700
                hover:text-blue-700 hover:bg-blue-100 rounded-md
                transition-all duration-200 ease-in-out
                hover:shadow-md hover:scale-105 transform
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Cart */}
        {/* Cart */}
        <Link
          href="/cart"
          className="relative flex items-center gap-1 px-4 py-2 text-lg font-medium text-gray-700
      hover:text-blue-700 hover:bg-blue-100 rounded-md
      transition-all duration-200 ease-in-out
      hover:shadow-md hover:scale-105 transform"
        >
          🛒 سبد خرید
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </Link>

        {/* Checkout */}
        <Link
          href="/checkout"
          className="
            text-base font-semibold
            px-4 py-2
            bg-blue-600 text-white
            rounded-lg shadow-md
            hover:bg-blue-700
            hover:scale-105 hover:shadow-lg
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          "
        >
          تسویه حساب
        </Link>
      </div>
    </header>
  );
}
