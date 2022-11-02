import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import productsApi from "../common/productsApi";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await productsApi.get("");
    return response.data;
  }
);

export const fetchAsyncProductDetail = createAsyncThunk(
  "products/fetchAsyncProductDetail",
  async (id: string) => {
    const response = await productsApi.get(`/${id}`);
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
  cartItemsNumber: number;
}

const initialState: InitialState = {
  products: [],
  selectedProduct: null,
  cart: [],
  cartItemsNumber: 0,
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
    addCartItemsNumber: (state) => {
      state.cartItemsNumber += 1;
    },
  },
  extraReducers: (builder) => {
    //products
    builder.addCase(fetchAsyncProducts.pending, () => {});
    builder.addCase(fetchAsyncProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    builder.addCase(fetchAsyncProducts.rejected, () => {});
    //product
    builder.addCase(fetchAsyncProductDetail.fulfilled, (state, { payload }) => {
      state.selectedProduct = payload;
    });
  },
});

export const { removeSelectedProduct, addToCart, addCartItemsNumber } =
  productsSlice.actions;
export const getCart = (state: RootState) => state.products.cart;
export const getCartItemsNumber = (state: RootState) =>
  state.products.cartItemsNumber;
export const getAllProducts = (state: RootState) => state.products.products;
export const getProductDetail = (state: RootState) =>
  state.products.selectedProduct;
export default productsSlice.reducer;
