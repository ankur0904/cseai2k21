import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsState } from '../types/product';  // Importing Product and ProductsState types
import { fetchProducts } from '../services/api';

// Initial state with ProductsState type
const initialState: ProductsState = {
  items: [],               // An array of products (Product[]), initially empty
  searchQuery: '',         // A search query string
  status: 'idle',          // The status of the async operation
};

// Async thunk to fetch products
export const fetchProductsThunk = createAsyncThunk('products/fetch', async () => {
  return await fetchProducts();  // Fetches the product data (an array of Product)
});

// Slice to manage products state
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Reducer to set the search query
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = 'loading';  // When the fetch is pending
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';  // When the fetch is successful
        state.items = action.payload;  // action.payload is an array of `Product` objects
      })
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.status = 'failed';  // If the fetch fails
      });
  },
});

// Export actions
export const { setSearchQuery } = productsSlice.actions;

// Export reducer to be used in the store
export default productsSlice.reducer;
