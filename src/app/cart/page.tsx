"use client";

import { useCart } from "./../context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity * (1 - item.discount / 100),
    0
  );

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 سبد خرید</h1>

      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-md"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>تعداد: {item.quantity}</p>
                <p>
                  قیمت:{" "}
                  {(item.price * (1 - item.discount / 100)).toLocaleString()}{" "}
                  تومان
                </p>
              </div>
              <p className="flex items-center gap-2">
                تعداد:
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 border rounded"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 border rounded"
                >
                  +
                </button>
              </p>

              <button
                className="text-red-600 font-bold"
                onClick={() => removeFromCart(item.id)}
              >
                حذف
              </button>
            </div>
          ))}

          <hr className="my-4" />

          <div className="text-right text-lg font-semibold">
            مجموع: {total.toLocaleString()} تومان
          </div>

          <button
            onClick={clearCart}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            پاک‌سازی سبد خرید
          </button>
        </div>
      )}
    </main>
  );
}
