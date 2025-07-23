"use client";

import { useCart } from "./../../context/CartContext";
import { useParams } from "next/navigation";
import { productsData } from "./../../../data/mockData";
import { notFound } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const product = productsData.products.find((p) => p.id === id);

  if (!product) return <div>Loading...</div>;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.price} تومان</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}
