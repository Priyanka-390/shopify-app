export async function getProducts() {
  const query = `
    {
      products(first: 12) {
        edges {
          node {
            id
            title
            handle
            featuredImage {
              url
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await response.json();
  return data.data.products.edges;
}