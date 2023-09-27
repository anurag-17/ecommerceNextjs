import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartReducer";



const Store = configureStore(
    {
    reducer:{
        cart:cartReducer
    },
},
);
export default Store;