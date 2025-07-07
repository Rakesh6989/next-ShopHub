"use client";
import { useEffect, useState } from "react";
import HeroSlider from "./Components/HeroSlider";
import ProductCard from "./Components/ProductCard";
import DealBanner from "./Components/DealBanner";
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError("Something went wrong!");
      });
  }, []);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products?limit=8";
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedCategory]);

  return (
    <main className="min-h-screen pt-20 p-5">
      <h1 className="text-3xl font-bold text-center py-2">
        Welcome to ShopHub
      </h1>

      <HeroSlider />

      {/* 🧭 Categories */}
      <section className="py-6 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          🧭 Shop by Category
        </h2>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 overflow-x-auto sm:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border rounded-full capitalize text-sm whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Reset Button */}
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 border rounded-full bg-red-500 text-white text-sm whitespace-nowrap"
            >
              Reset
            </button>
          )}
        </div>
      </section>

      {/* 🛒 Products */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory
            ? `Showing: ${selectedCategory}`
            : "🔥 Trending Products"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </section>
      <DealBanner />
    </main>
  );
}
