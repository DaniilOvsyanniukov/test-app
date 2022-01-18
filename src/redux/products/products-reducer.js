import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  inputChange,
  fatchProductsRequest,
  fatchProductsSuccess,
  fatchProductsError,
  setProductsRequest,
  setProductsSuccess,
  setProductsError,
  deleteProductsRequest,
  deleteProductsSuccess,
  deleteProductsError,
  updateProductsRequest,
  updateProductsSuccess,
  updateProductsError,
} from "./products-actions";

const isLoading = createReducer(false, {
  [fatchProductsRequest]: () => true,
  [fatchProductsSuccess]: () => false,
  [fatchProductsError]: () => false,
  [setProductsRequest]: () => true,
  [setProductsSuccess]: () => false,
  [setProductsError]: () => false,
  [deleteProductsRequest]: () => true,
  [deleteProductsSuccess]: () => false,
  [deleteProductsError]: () => false,
  [updateProductsRequest]: () => true,
  [updateProductsSuccess]: () => false,
  [updateProductsError]: () => false,
});

const productsReducer = createReducer([], {
  [fatchProductsSuccess]: (_, { payload }) => payload,
  [setProductsSuccess]: (state, { payload }) => {
    console.log(state);
  },
  [deleteProductsSuccess]: (state, { payload }) =>
    state.filter((contacts) => !contacts.id.includes(payload)),
});

const inputValueReducer = createReducer("", {
  [inputChange]: (_, { payload }) => payload,
});
const error = createReducer(null, {});

export default combineReducers({
  products: productsReducer,
  inputValue: inputValueReducer,
  isLoading,
  error,
});