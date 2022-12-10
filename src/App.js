import './App.css';
import Header from './component/Header';
import Home from './component/Home'
import { Routes ,Route } from 'react-router-dom';
import Product from './component/Product';
import CategoryList from './component/CategoryList';
import Cart from "./component/Cart";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}  />
      <Route exact path="/product" element={<Product/>}  />
      <Route exact path="/product/:id" element={<CategoryList/>}  />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
