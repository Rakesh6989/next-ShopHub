"use client";

import Link from "next/link";

export default function ProductCard({ data }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Link href={`/product/${data.id}`}>
        <div className="bg-white p-4 h-48 flex items-center justify-center cursor-pointer">
          <img
            src={data.image}
            alt={data.title}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${data.id}`}>
          <h2 className="text-sm font-semibold line-clamp-2 hover:text-blue-600 cursor-pointer">
            {data.title}
          </h2>
        </Link>
        <p className="text-gray-600 mt-1">${data.price}</p>

        <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
