"use client";

import { useCart } from "./../../context/CartContext";
import { useParams } from "next/navigation";
import { productsData } from "./../../../data/mockData";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const product = productsData.products.find((p) => p.id === id);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">
        در حال بارگذاری محصول...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      image: product.image,
      quantity: 1,
    });
  };

  const finalPrice = (
    product.price *
    (1 - product.discount / 100)
  ).toLocaleString();

  return (
    <main className="max-w-5xl mx-auto p-6 sm:p-10 bg-white rounded-lg shadow-md mt-10">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
        />

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          <div className="text-xl text-gray-700">
            قیمت:
            {product.discount > 0 ? (
              <>
                <span className="line-through text-red-500 text-base mr-2">
                  {product.price.toLocaleString()} تومان
                </span>
                <span className="text-green-600 font-bold">
                  {finalPrice} تومان
                </span>
              </>
            ) : (
              <span className="ml-2 text-blue-600 font-bold">
                {product.price.toLocaleString()} تومان
              </span>
            )}
          </div>

          <div className="text-yellow-500 text-lg">
            ⭐ امتیاز: {product.rating} از 5
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="
              mt-4 px-6 py-3 bg-blue-600 text-white rounded-full
              hover:bg-blue-700 hover:shadow-lg transition-all duration-300
              font-semibold text-lg
            "
          >
            افزودن به سبد خرید 🛒
          </button>
        </div>
      </div>
    </main>
  );
}
