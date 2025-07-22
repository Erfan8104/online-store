import { productsData } from "./../../../data/mockData";

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className=" text-2xl font-bold  text-gray-800 mb-6">محصولات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsData.products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">
              {product.name}
            </h3>
            <p className="mt-2 text-blue-600 font-bold">
              {product.discount > 0 ? (
                <>
                  <span className="line-through text-sm text-gray-400 ml-2">
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
            <p className="mt-1 text-sm text-yellow-500">
              ⭐ {product.rating} / 5
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
