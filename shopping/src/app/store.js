import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/shoppingcart/productSlice';
import cartReducer from '../features/shoppingcart/cartSlice';
import wishlistReducer from '../features/shoppingcart/whislistSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        wishitems: wishlistReducer, // Ensure consistency in naming
    }
});
