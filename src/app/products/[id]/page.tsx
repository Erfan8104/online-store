"use client";

import { useParams } from "next/navigation";
import { productsData } from "./../../../data/mockData";
import { notFound } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = productsData.products.find((p) => p.id === productId);

  if (!product) {
    return notFound();
  }

  const finalPrice =
    product.discount > 0
      ? product.price * (1 - product.discount / 100)
      : product.price;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* تصویر محصول */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg border"
          />
        </div>

        {/* مشخصات */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="mt-2 text-yellow-500">⭐ {product.rating} / 5</p>

          <p className="mt-4 text-xl font-bold text-blue-600">
            {product.discount > 0 && (
              <span className="line-through text-gray-400 text-sm mr-2">
                {product.price.toLocaleString()} تومان
              </span>
            )}
            {finalPrice.toLocaleString()} تومان
          </p>

          <p className="mt-4 text-gray-700">
            توضیحات محصول به صورت داینامیک اینجا قرار می‌گیرد.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </main>
  );
}
