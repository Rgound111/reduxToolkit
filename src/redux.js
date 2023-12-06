import { createSlice , configureStore } from '@reduxjs/toolkit';
const Redux = require("@reduxjs/toolkit");


const initialProduct = {
  productData: [],
};

const reduxSlice = createSlice({
  name: "ecommerce",
  initialState: initialProduct,
  reducers: {
    addProduct: (state, action) => {
         state.productData=(action.payload)       
    },
  },
});

export const {addProduct} = reduxSlice.actions;

const productReducer = reduxSlice.reducer;
const combineReducer = {
  product: productReducer,
};

export const reduxStore = configureStore({
  reducer: combineReducer,
});
