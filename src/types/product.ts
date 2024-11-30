// types/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  title: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductsState {
  items: Product[];               // The list of products
  searchQuery: string;            // The search query
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; // The status of the fetch
}
