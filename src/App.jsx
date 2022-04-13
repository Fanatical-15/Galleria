import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/Product" element={<Product/>}></Route>
    <Route path="/ProductList" element={<ProductList/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
    </Router>
 )
};

export default App;


