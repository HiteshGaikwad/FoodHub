import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import RestaurantsListSlice from "./RestaurantsListSlice";

const store= configureStore({
    reducer:{
        cart: cartSlice,
        restaurantsList: RestaurantsListSlice
    }
})

export default store;