"use client";
import Link from "next/link";
type Product = {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
  rating: number | string;
};

export default function ProductCard({ product }: { product: Product }) {
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <Link href={`products/${product.id} `}>
      <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center text-center relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 md:h-56 object-cover rounded-lg mb-4 transition-transform duration-300"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-700">
          {product.name}
        </h3>
        <p className="mt-2 text-blue-600 font-bold">
          {product.discount > 0 ? (
            <>
              <span className="line-through text-sm text-gray-400 ml-2">
                {product.price.toLocaleString()} تومان
              </span>
              {finalPrice.toLocaleString()} تومان
            </>
          ) : (
            `${product.price.toLocaleString()} تومان`
          )}
        </p>
        <p className="mt-1 text-sm text-yellow-500">⭐ {product.rating} / 5</p>
      </div>
    </Link>
  );
}
