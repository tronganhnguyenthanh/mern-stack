import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
// add product request
export const addProduct = createAsyncThunk(
   "product/addProduct",
   async (options) => {
     let res = await axios.post("http://localhost:1997/api/product/add", options)
     return res?.data
  } 
)
// get product request
export const getProduct = createAsyncThunk(
   "product/getProduct",
   async () => {
     let res = await axios.get("http://localhost:1997/api/product/list")
     return res?.data
   }
)
// edit product request by id
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (_id) => {
    let res = await axios.get(`http://localhost:1997/api/product/edit/${_id}`)
    return res?.data
  }
)
// update product request
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (_id, option) => {
    let res = await axios.put(`http://localhost:1997/api/product/update/${_id}`, option)
    // return res?.data
    console.log("res", res)
  }
)
// search product request
export const filterProduct = createAsyncThunk(
  "product/filterProduct",
  async (name) => {
    let res = await axios.get(`http://localhost:1997/api/product?name=${name}`)
    return res?.data
  }
)
// delete product request
export const deleteProductById = createAsyncThunk(
  "product/deleteProductById",
   async (_id) => {
     let res = await axios.delete(`http://localhost:1997/api/product/delete/${_id}`)
     return res?.data
   }
)
const productSlice = createSlice({
  name:"product",
  initialState:{
   products:[]
  },
  extraReducers:{
   [addProduct.fulfilled]:(state, {payload}) => {
     state.products = payload
   },
   [addProduct.rejected]:(state, {error}) => {
     state.products = error
   },
   [getProduct.fulfilled]:(state, {payload}) => {
     state.products = payload
   },
   [getProduct.rejected]:(state, {error}) => {
     state.products = error
   },
   [getProductById.fulfilled]:(state, {payload}) => {
     state.products = payload
   },
   [getProductById.rejected]:(state, {error}) => {
     state.products = error
   },
   [updateProduct.fulfilled]:(state, {payload}) => {
     state.products = payload
   },
   [updateProduct.rejected]:(state, {error}) => {
     state.products = error
   },
   [filterProduct.fulfilled]:(state, {payload}) => {
     state.products = payload
   },
   [filterProduct.rejected]:(state, {error}) => {
     state.products = error
   },
   [deleteProductById.fulfilled]:(state, {payload}) => {
     state.products = payload
   },
   [deleteProductById.rejected]:(state, {error}) => {
     state.products = error
   },
  }
})
export const productReducer = productSlice.reducer