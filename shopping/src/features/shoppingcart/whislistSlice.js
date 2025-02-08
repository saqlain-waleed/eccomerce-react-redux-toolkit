import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const wishSlice = createSlice({
    name: 'wishlist', // Corrected slice name
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.items.push(action.payload); // Add new item to favorites
            }
        },
        remFromFav: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);

        }
    }
});

export const { addToFav,remFromFav } = wishSlice.actions; // Corrected export
export default wishSlice.reducer;
