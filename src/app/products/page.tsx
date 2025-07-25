"use client";

import { useState } from "react";
import { productsData } from "./../../data/mockData";
import FilterSidebar from "./../../components/FilterSidebar";
import ProductCard from "./../../components/ProductCard";
import SortDropdown from "./../../components/SortDropdown";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState<"newest" | "low" | "high" | "rating">(
    "newest"
  );
  const searchParams = useSearchParams();
  const showOnlyNew = searchParams.get("new") === "true";

  let filteredProducts = productsData.products;

  if (showOnlyNew) {
    filteredProducts = filteredProducts.filter((product) => product.id >= 210);
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "low":
        return a.price - b.price;
      case "high":
        return b.price - a.price;
      case "rating":
        return Number(b.rating) - Number(a.rating);
      default:
        return b.id - a.id;
    }
  });

  return (
    <main className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          محصولات
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar />

          <div className="flex-1">
            <SortDropdown onSortChange={setSortBy} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
