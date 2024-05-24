// slices/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const fetchProductDetails = createAsyncThunk('products/fetchProductDetails', async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
});

export const editProduct = createAsyncThunk('products/editProduct', async ({ id, updatedProduct }) => {
  const response = await axios.put(`https://fakestoreapi.com/products/${id}`, updatedProduct);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await axios.delete(`https://fakestoreapi.com/products/${id}`);
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    productDetails: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    sortProducts: (state, action) => {
      const { sortBy } = action.payload;
      if (sortBy === 'cheap') {
        state.items.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'expensive') {
        state.items.sort((a, b) => b.price - a.price);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(product => product.id !== action.payload);
      });
  },
});

export const { sortProducts } = productsSlice.actions;

export default productsSlice.reducer;
