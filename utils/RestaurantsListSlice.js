import { createSlice } from "@reduxjs/toolkit";

const RestaurantsListSlice= createSlice({
    name:'restaurantsList',
    initialState:{
        list:[]
    },
    reducers:{
        addRestaurants:(state,action)=>{
            state.list=action.payload;
        }
    }
})
export const {addRestaurants}= RestaurantsListSlice.actions;
export default RestaurantsListSlice.reducer;