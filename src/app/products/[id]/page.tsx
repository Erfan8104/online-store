"use client";

import { productDetail } from "./../../../data/mockData";

export default function ProductDetailPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image gallery */}
        <div className="space-y-4">
          {productDetail.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={productDetail.name}
              className="rounded border"
            />
          ))}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {productDetail.name}
          </h1>
          <p className="mt-2 text-yellow-500">
            ⭐ {productDetail.rating} / 5 ({productDetail.reviewCount} نظر)
          </p>
          <p className="mt-4 text-blue-600 font-bold text-xl">
            <span className="line-through text-gray-400 text-sm mr-2">
              {productDetail.price.toLocaleString()} تومان
            </span>
            {productDetail.finalPrice.toLocaleString()} تومان
          </p>

          <p className="mt-4 text-gray-700">{productDetail.description}</p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            افزودن به سبد خرید
          </button>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-2">مشخصات فنی</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {Object.entries(productDetail.specifications).map(
                ([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4 text-gray-800">محصولات مرتبط</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDetail.relatedProducts.map((p) => (
            <div key={p.id} className="bg-white shadow rounded p-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold">{p.name}</h3>
              <p className="text-blue-600 font-bold mt-1">
                {p.price.toLocaleString()} تومان
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
