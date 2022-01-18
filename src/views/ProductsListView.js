import React, { useState } from 'react';
import ProductsList from "../components/ProductsList/ProductsList";
import InputForm from "../components/InputForm/InputForm";
import "../App.css";

const ProductsView = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
    };
    
  return (
    <div className="App">
          <h1>Product List</h1>
          <button
              type="button"
              onClick={toggleModal}
          >Add Product</button>
          <ProductsList />  
    </div>
  );
}

export default ProductsView;
