import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    tempItems: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            // Fix: Copy the array instead of spreading it into an object
            state.tempItems = [...state.items];

            // Fix: Ensure total price updates correctly
            state.totalPrice = state.items.reduce(
                (sum, item) => sum + item.price * item.quantity, 
                0
            );
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
