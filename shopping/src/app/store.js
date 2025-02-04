import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/shoppingcart/productSlice'
import cartReducer    from '../features/shoppingcart/cartSlice'

export const store = configureStore({
reducer:{
    products:productReducer,
    cart:cartReducer,
}
});