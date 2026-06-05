export const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
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
export const MENU_QUERY = `
query {
  menu(id: "gid://shopify/Menu/252848275697") {
    id
    title
    items {
      id
      title
      url
    }
  }
}
`;
