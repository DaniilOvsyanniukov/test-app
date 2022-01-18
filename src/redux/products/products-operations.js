import {
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

import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000`;

const fatchAllProducts = () => async (dispatch) => {
  dispatch(fatchProductsRequest());
  try {
    const { data } = await axios.get("/products");
    dispatch(fatchProductsSuccess(data));
  } catch (error) {
    dispatch(fatchProductsError(error));
  }
};

const addProduct = (newProduct) => (dispatch) => {
  dispatch(setProductsRequest());
  axios
    .post("/products", newProduct)
    .then(({ data }) => dispatch(setProductsSuccess(data)))
    .catch((error) => dispatch(setProductsError(error)));
};

const deleteProduct = (productId) => (dispatch) => {
  dispatch(deleteProductsRequest());
  axios
    .delete(`/products/${productId}`)
    .then(() => dispatch(deleteProductsSuccess(productId)))
    .catch((error) => dispatch(deleteProductsError(error)));
};

const updateProduct = (productId, newProduct) => (dispatch) => {
  dispatch(updateProductsRequest());
  axios
    .patch(`/products/${productId}`, newProduct)
    .then(() => dispatch(updateProductsSuccess(productId)))
    .catch((error) => dispatch(updateProductsError(error)));
};

const operations = {
  fatchAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};

export default operations;