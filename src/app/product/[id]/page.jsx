
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const ProductPage = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound(); 
  }

  const product = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain border rounded-md shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">
            $ {product.price}
          </p>

          <a
            href="/"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ← Back to Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
