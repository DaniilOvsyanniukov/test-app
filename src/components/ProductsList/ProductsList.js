import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import shortid from "shortid";
import Product from "../Product/Product";
import selectors from "../../redux/products/products-selectors"
import operations from '../../redux/products/products-operations';


const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fatchAllProducts());
  }, [dispatch]);

  const products = useSelector(selectors.getProducts);

  return (
   <table >
        <thead >
          <tr >
            <th >Product name</th>
            <th >Width</th>
            <th >Height</th>
            <th >Weight</th>
          </tr>
        </thead>

      <tbody >
         {products.map((product) => {
        let productId = shortid.generate();
        return (

          
          <Product
            key={productId}
            product={product}
          />
        );
      })}
      </tbody>
      </table>







     

  );
}

export default Products;