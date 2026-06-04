import type { ShopifyResponse, ShopifyVariables } from "./types";

const SHOPIFY_API_VERSION = "2025-01";

export async function shopifyFetch<TData>(
  query: string,
  variables?: ShopifyVariables
): Promise<TData> {
  const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

  if (!storeDomain || !token) {
    throw new Error("Missing Shopify storefront environment variables.");
  }

  const response = await fetch(
    `https://${storeDomain}/api/${SHOPIFY_API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Shopify API Error: ${response.status} ${response.statusText}`
    );
  }

  const payload = (await response.json()) as ShopifyResponse<TData>;

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join(", "));
  }

  if (!payload.data) {
    throw new Error("Shopify API returned no data.");
  }

  return payload.data;
}
