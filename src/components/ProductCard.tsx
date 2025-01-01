import React from "react";
import { Product } from "./../interfaces/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative flex flex-col justify-between rounded-tr-3xl border border-gray-100 h-full">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-bl-3xl rounded-tr-3xl border border-gray-300"
        />

        <span className="absolute top-4 right-4 rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          {product.price}$
        </span>
      </div>

      <div className="flex flex-col justify-between flex-grow p-4 text-center">
        <div>
          <strong className="block text-xl font-medium text-gray-900 mb-2">
            {product.title}
          </strong>
          <p className="text-gray-700 text-sm line-clamp-3">
            {product.description}
          </p>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}
