"use client";
import { productsData } from "./../data/mockData";
export default function FilterSidebar() {
  return (
    <aside className="w-full md:w-64 bg-white p-4  rounded  shadow ">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 ">
        فیلتر محصولات{" "}
      </h2>
      <div className="mb-6 ">
        <h3 className="text-sm font-bold mb-2 text-gray-700">دسته بندی </h3>
        <ul className="space-y-1">
          {productsData.filters.categories.map((cat) => (
            <li key={cat.id} className="text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                {cat.name} ({cat.count})
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Brands */}
      <div>
        <h3 className="text-sm font-bold mb-2 text-gray-700">برند</h3>
        <ul className="space-y-1">
          {productsData.filters.brands.map((brand) => (
            <li key={brand.id} className="text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                {brand.name} ({brand.count})
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
