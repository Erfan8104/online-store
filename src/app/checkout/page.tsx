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
    <main className="max-w-4xl mx-auto p-6">
      <Link
        href="/products"
        className="inline-block mt-4 text-blue-600 underline hover:text-blue-800"
      >
        بازگشت به فروشگاه
      </Link>

      <h1 className="text-2xl font-bold mb-6">تسویه حساب</h1>

      {cartItems.length === 0 ? (
        <p>
          سبد خرید شما خالی است.{" "}
          <Link href="/products" className="text-blue-600 underline">
            بازگشت به فروشگاه
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded">
              <h2 className="font-semibold">{item.name}</h2>
              <p>تعداد: {item.quantity}</p>
              <p>
                قیمت کل:{" "}
                {(
                  item.price *
                  item.quantity *
                  (1 - item.discount / 100)
                ).toLocaleString()}{" "}
                تومان
              </p>
            </div>
          ))}

          <hr />
          <div className="text-right text-lg font-bold">
            مجموع نهایی: {total.toLocaleString()} تومان
          </div>

          <button
            onClick={() => {
              alert("پرداخت با موفقیت انجام شد!");
              clearCart();
              setPaid(true);
            }}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            پرداخت نهایی
          </button>
        </div>
      )}
    </main>
  );
}
