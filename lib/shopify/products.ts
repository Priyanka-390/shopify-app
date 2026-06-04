import { shopifyFetch } from "./client";
import { PRODUCTS_QUERY } from "./queries";
import type { ProductEdge, ProductsData } from "./types";

export async function getProducts(first = 12): Promise<ProductEdge[]> {
  try {
    const data = await shopifyFetch<ProductsData>(PRODUCTS_QUERY, { first });

    return data.products.edges;
  } catch (error) {
    console.error("Shopify Fetch Error:", error);
    return [];
  }
}
