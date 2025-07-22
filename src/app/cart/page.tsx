"use client";

const mockCartItems = [
  {
    id: 101,
    name: "لپ‌تاپ اپل",
    price: 25000000,
    discount: 10,
    quantity: 1,
    image: "/images/product1.jpg",
  },
  {
    id: 102,
    name: "هدفون بی‌سیم",
    price: 4500000,
    discount: 0,
    quantity: 2,
    image: "/images/product2.jpg",
  },
];

export default function CartPage() {
  const calculateTotal = () => {
    return mockCartItems.reduce((total, item) => {
      const finalPrice = item.price * (1 - item.discount / 100) * item.quantity;
      return total + finalPrice;
    }, 0);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">سبد خرید</h1>

      {mockCartItems.map((item) => {
        const finalPrice = item.price * (1 - item.discount / 100);
        return (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">تعداد: {item.quantity}</p>
              </div>
            </div>

            <div className="text-blue-600 font-bold">
              {(finalPrice * item.quantity).toLocaleString()} تومان
            </div>
          </div>
        );
      })}

      <div className="mt-8 flex justify-between items-center">
        <span className="font-bold text-lg">مجموع:</span>
        <span className="text-xl font-bold text-green-600">
          {calculateTotal().toLocaleString()} تومان
        </span>
      </div>

      <button className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
        ادامه فرایند خرید
      </button>
    </main>
  );
}
