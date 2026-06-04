export type ShopifyVariables = Record<string, unknown>;

export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  featuredImage: {
    url: string;
  } | null;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
};

export type ProductEdge = {
  node: ShopifyProduct;
};

export type ProductsData = {
  products: {
    edges: ProductEdge[];
  };
};

export type ShopifyResponse<TData> = {
  data?: TData;
  errors?: {
    message: string;
  }[];
};
