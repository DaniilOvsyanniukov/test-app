import { createAction } from "@reduxjs/toolkit";

export const inputChange = createAction("products/inputChange");

export const fatchProductsRequest = createAction("products/fatchProductsRequest");
export const fatchProductsSuccess = createAction("products/fatchProductsSuccess");
export const fatchProductsError = createAction("products/fatchProductsError");

export const setProductsRequest = createAction("products/setProductsRequest");
export const setProductsSuccess = createAction("products/setProductsSucces");
export const setProductsError = createAction("products/setProductsError");

export const deleteProductsRequest = createAction("products/deleteProductsRequest");
export const deleteProductsSuccess = createAction("products/deleteProductsSuccess");
export const deleteProductsError = createAction("products/deleteProductsError");

export const updateProductsRequest = createAction("products/updateProductsRequest");
export const updateProductsSuccess = createAction("products/updateProductsSuccess");
export const updateProductsError = createAction("products/updateProductsError");