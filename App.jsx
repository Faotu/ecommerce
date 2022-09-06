import Homepage from "./pages/Home";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";

export default function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          </Route>
          <Route path="/products/:category" element={<ProductList />}>
          </Route>
          <Route path="/product/:id" element={<Product />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
          <Route path="/success" element={<Success />}>
          </Route>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}> 
          </Route>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}> 
          </Route>   
      </Routes>
    </BrowserRouter>
  );
}
