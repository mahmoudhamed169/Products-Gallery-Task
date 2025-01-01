"use client";
import ProductCard from "@/components/ProductCard";
import React, { useState, useEffect } from "react";

const getAllProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center pb-8">Our Products</h2>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by product name"
          className="p-2 w-1/2 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-600 ">No products found</p>
        )}
      </div>
    </div>
  );
}
