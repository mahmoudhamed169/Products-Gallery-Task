import Image from "next/image";

const getProductDetails = async (id: string) => {
  console.log("the param id: ", id);
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch product details");
  }
  const product = await res.json();
  return product;
};

interface Iprops {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: Iprops) {
  const productId = (await params).id;
  console.log(productId);
  const product = await getProductDetails(productId);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-96 object-contain mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {product.title}
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          Category: {product.category}
        </p>
        <div className="text-sm text-gray-500">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </div>
      </div>
    </>
  );
}
