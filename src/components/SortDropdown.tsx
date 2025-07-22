"use client";

import { useState } from "react";

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
    <div className="mb-6">
      <label className="text-sm mr-2 text-gray-700">مرتب‌سازی بر اساس:</label>
      <select
        value={selected}
        onChange={handleChange}
        className="border border-gray-300 rounded px-2 py-1 text-sm"
      >
        <option value="newest">جدیدترین</option>
        <option value="low">ارزان‌ترین</option>
        <option value="high">گران‌ترین</option>
        <option value="rating">پرامتیازترین</option>
      </select>
    </div>
  );
}
