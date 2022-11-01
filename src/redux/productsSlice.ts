import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import productsApi from "../common/productsApi";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await productsApi.get("");
    console.log(response.data);
    return response.data;
  }
);

export interface ProductsType {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: any;
}

interface InitialState {
  products: ProductsType[];
}

const initialState: InitialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncProducts.pending, () => {
      console.log("pending");
    });
    builder.addCase(fetchAsyncProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      console.log("fetched");
    });
    builder.addCase(fetchAsyncProducts.rejected, () => {
      console.log("rejected");
    });
  },
});

export const getAllProducts = (state: RootState) => state.products.products;
export default productsSlice.reducer;
