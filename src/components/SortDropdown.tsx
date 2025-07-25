"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Importing an icon for better visual appeal

type SortOption = "newest" | "low" | "high" | "rating";

export default function SortDropdown({
  onSortChange,
}: {
  onSortChange: (sortBy: SortOption) => void;
}) {
  const [selected, setSelected] = useState<SortOption>("newest");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    setSelected(value);
    onSortChange(value);
  };

  return (
    <div className="mb-6 flex items-center flex-row-reverse ">
      {" "}
      {/* Changed to always justify-end for right alignment */}
      <label
        htmlFor="sort-select"
        className="text-base sm:text-sm mr-3 font-medium text-gray-800  whitespace-nowrap"
      >
        : مرتب‌سازی بر اساس
      </label>
      <div className="relative w-48 sm:w-auto mr-3">
        {" "}
        {/* Added relative positioning for the icon and controlled width */}
        <select
          id="sort-select"
          value={selected}
          onChange={handleChange}
          // Enhanced Tailwind classes for a beautiful and responsive look
          // Updated hover:border-blue-600 and dark:hover:border-blue-400 for a more prominent hover effect
          className="
            appearance-none block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
            rounded-lg shadow-sm px-4 py-2 pr-10 text-base sm:text-sm text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            cursor-pointer transition-all duration-200 ease-in-out
            hover:border-blue-600 hover:shadow-md dark:hover:border-blue-400 {/* Updated hover border colors */}
          "
        >
          <option value="newest">جدیدترین</option>
          <option value="low">ارزان‌ترین</option>
          <option value="high">گران‌ترین</option>
          <option value="rating">پرامتیازترین</option>
        </select>
        {/* Chevron icon for visual indication of dropdown */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
