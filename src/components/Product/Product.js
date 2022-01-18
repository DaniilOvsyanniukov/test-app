import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/products/products-operations';
const Product = ({ product }) => {
  const dispatch = useDispatch();
  
    return (
    <tr >
      <td >{product.name}</td>
      <td >{product.size.width}</td>
      <td >{product.size.height}</td>
        <td >{product.weight}</td>
        <td ><button
          type="button"
          onClick={()=>{}}>Delete</button></td>
        <td><button>Edit</button></td>
    </tr>
  );
}

export default Product
