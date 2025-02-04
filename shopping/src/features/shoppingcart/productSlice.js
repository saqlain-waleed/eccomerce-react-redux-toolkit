import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchProducts= createAsyncThunk('products/fetchProducts',async()=>{
    const response= await axios.get('https://fakestoreapi.com/products');
    return response.data;

})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: "idle"
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchProducts.fulfilled,(state, action)=>{
            state.status='success'
            state.items=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.status='failed'
        })
    }
});

export default productSlice.reducer;
