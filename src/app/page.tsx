import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Products Gallery
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Explore a variety of products with details.
      </p>
      <Link href="/products">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Go to Products
        </button>
      </Link>
    </div>
  );
}
