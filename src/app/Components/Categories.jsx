"use client";

import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.log("something went wrong", e));
  }, []);
  console.log("categorires", categories);
  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">🧭 Shop by Category</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            className="whitespace-nowrap px-4 py-2 border rounded-full hover:bg-blue-600 hover:text-white transition text-sm capitalize"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
