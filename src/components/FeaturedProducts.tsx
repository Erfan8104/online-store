"use client";

import React from "react";
import { homePageData } from "@/data/mockData"; // ✅ Correct project path
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center drop-shadow-sm">
          محصولات ویژه
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {homePageData.featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Discount badge */}
              {product.discount > 0 && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                  %{product.discount}-
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 md:h-56 object-cover rounded-lg mb-4 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>

              <p className="text-blue-700 font-extrabold text-2xl mb-2">
                {product.discount > 0 ? (
                  <>
                    <span className="line-through text-base text-gray-500 ml-2">
                      {product.price.toLocaleString()} تومان
                    </span>
                    {(
                      product.price *
                      (1 - product.discount / 100)
                    ).toLocaleString()}{" "}
                    تومان
                  </>
                ) : (
                  `${product.price.toLocaleString()} تومان`
                )}
              </p>

              <p className="text-lg text-yellow-500 font-semibold mb-4">
                ⭐ {product.rating} / 5
              </p>

              {/* Button */}
              <Link
                href={`/products/${product.id}`}
                className="mt-auto w-full inline-block text-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                مشاهده جزئیات
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
