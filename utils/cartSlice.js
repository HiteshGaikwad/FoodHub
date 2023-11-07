import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState: {items: []},
    reducers:{
        addItems: (state, action)=>{
            state.items.push(action.payload);
        },
        clearCart: (state, action)=>{
            state.items=[];
        },
        removeItems: (state, action)=>{
            state.items.splice(action.payload,1);
            // console.log(action.payload);
        }
    }
})

export const {addItems, clearCart, removeItems}= cartSlice.actions;

export default cartSlice.reducer;