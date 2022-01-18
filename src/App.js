import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import ProductsListView from './views/ProductsListView';
import ProductView from './views/ProductView';


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ProductsListView/>} />
        {/* <Route path="/product" element={ProductView}/> */}
      </Routes>
    </Container>
  );
}
export default App;
