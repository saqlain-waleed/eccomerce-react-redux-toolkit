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

            state.tempItems = [...state.items];

            state.totalPrice = state.items.reduce(
                (sum, item) => sum + item.price * item.quantity, 
                0
            );
        },

        removefromcart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.tempItems = [...state.items];

            state.totalPrice = state.items.reduce(
                (sum, item) => sum + item.price * item.quantity, 
                0
            );
        },

        updatequantitiy: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                state.items[itemIndex] = {
                    ...state.items[itemIndex],
                    quantity: action.payload.quantity,
                };
            }

            state.tempItems = [...state.items];

            state.totalPrice = state.items.reduce(
                (sum, item) => sum + item.price * item.quantity, 
                0
            );
        },
    }
});

export const { addToCart, removefromcart, updatequantitiy } = cartSlice.actions;
export default cartSlice.reducer;
