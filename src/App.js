import { useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ProtectedRoutes from "./pages/protectedRoutes/ProtectedRoutes";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
//import ProductList from "./pages/productList/ProductList";
//import Product from "./pages/product/Product";
//import NewProduct from "./pages/newProduct/NewProduct";
import "./app.scss";

function App() {
  const { admin } = useSelector((store) => store.app);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={admin ? <ProtectedRoutes /> : <Navigate to="login" />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="new-user" element={<NewUser />} />
          <Route path="user/user-id:" element={<User />} />
        </Route>   
        <Route path="login" element={admin ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
