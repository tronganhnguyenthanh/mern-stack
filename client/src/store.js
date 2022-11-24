import {configureStore} from "@reduxjs/toolkit"
import {productReducer} from "./features/product.slice"
const store = configureStore({
  reducer:{
   product:productReducer
  }
})
export default store