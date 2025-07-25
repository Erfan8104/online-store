"use client";

import { useCart } from "./../context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [paid, setPaid] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity * (1 - item.discount / 100),
    0
  );

  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🧾 تسویه حساب</h1>
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base"
        >
          بازگشت به فروشگاه
        </Link>
      </div>

      {/* Success Message */}
      {paid && (
        <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-md text-green-800 font-medium shadow-sm">
          ✅ پرداخت با موفقیت انجام شد!
        </div>
      )}

      {/* Empty cart */}
      {cartItems.length === 0 && !paid ? (
        <p className="text-gray-600">
          سبد خرید شما خالی است.{" "}
          <Link
            href="/products"
            className="text-blue-600 underline hover:text-blue-800"
          >
            بازگشت به فروشگاه
          </Link>
        </p>
      ) : (
        !paid && (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600">تعداد: {item.quantity}</p>
                <p className="text-gray-600">
                  قیمت کل:{" "}
                  <span className="font-semibold text-blue-700">
                    {(
                      item.price *
                      item.quantity *
                      (1 - item.discount / 100)
                    ).toLocaleString()}{" "}
                    تومان
                  </span>
                </p>
              </div>
            ))}

            {/* Divider */}
            <hr className="my-4" />

            {/* Total */}
            <div className="text-right text-xl font-bold text-gray-800">
              مجموع نهایی:{" "}
              <span className="text-green-600">
                {total.toLocaleString()} تومان
              </span>
            </div>

            {/* Payment Button */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  alert("پرداخت با موفقیت انجام شد!");
                  clearCart();
                  setPaid(true);
                }}
                className="
                  bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold
                  px-8 py-3 rounded-full shadow-md
                  hover:from-green-600 hover:to-green-700 hover:shadow-lg
                  transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-green-400
                "
              >
                پرداخت نهایی
              </button>
            </div>
          </div>
        )
      )}
    </main>
  );
}
