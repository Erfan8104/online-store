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
    <main className="max-w-6xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🛒 سبد خرید
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          سبد خرید شما خالی است.
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Product Info */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto flex-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg shadow"
                />
                <div className="text-center sm:text-right space-y-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">
                    قیمت واحد:
                    <span className="font-bold text-blue-600 ml-1">
                      {(
                        item.price *
                        (1 - item.discount / 100)
                      ).toLocaleString()}{" "}
                      تومان
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    تخفیف: {item.discount}%
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-xl hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-xl hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* Delete Button */}
              <button
                className="mt-4 sm:mt-0 text-red-600 font-semibold hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                حذف
              </button>
            </div>
          ))}

          {/* Total & Clear */}
          <div className="border-t pt-6 text-right space-y-4">
            <div className="text-xl font-bold text-gray-800">
              مجموع نهایی:{" "}
              <span className="text-green-600">
                {total.toLocaleString()} تومان
              </span>
            </div>

            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-200"
            >
              🧹 پاک‌سازی سبد خرید
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
