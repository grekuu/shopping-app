import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import productsApi from "../common/productsApi";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await productsApi.get("");
    console.log(response.data);
    return response.data;
  }
);

export const fetchAsyncProductDetail = createAsyncThunk(
  "products/fetchAsyncProductDetail",
  async (id: string) => {
    const response = await productsApi.get(`/${id}`);
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
  selectedProduct: null | ProductsType;
  cart: ProductsType[];
}

const initialState: InitialState = {
  products: [],
  selectedProduct: null,
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    addToCart: (state, action: PayloadAction<ProductsType>) => {
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    //products
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
    //product
    builder.addCase(fetchAsyncProductDetail.fulfilled, (state, { payload }) => {
      state.selectedProduct = payload;
      console.log("fetched");
    });
  },
});

export const { removeSelectedProduct, addToCart } = productsSlice.actions;
export const getCart = (state: RootState) => state.products.cart;
export const getAllProducts = (state: RootState) => state.products.products;
export const getProductDetail = (state: RootState) =>
  state.products.selectedProduct;
export default productsSlice.reducer;
