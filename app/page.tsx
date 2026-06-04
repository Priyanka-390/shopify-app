import { getProducts } from "@/lib/shopify";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Shopify Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(({ node }) => (
          <div key={node.id} className="border rounded-lg p-4">
            {node.featuredImage && (
              <Image
                className="rounded-lg h-64"
                src={node.featuredImage.url}
                alt={node.title}
                width={400}
                height={400}
              />
            )}

            <h2 className="font-semibold mt-4">{node.title}</h2>

            <p>₹{node.priceRange.minVariantPrice.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
