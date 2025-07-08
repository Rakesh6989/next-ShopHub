import { useEffect, useState } from "react";

export default function UpcomingProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUpcomingProducts = async () => {
      try {
        const res = await fetch("/api/upcoming-products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchUpcomingProducts();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Products</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={`${product.image}&w=600&q=80`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-sm">
                  <span className="font-medium text-gray-700">Release:</span>{" "}
                  {product.releaseDate}
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-700">Price:</span>{" "}
                  {product.price}
                </p>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.status === "Pre-Order"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {product.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
