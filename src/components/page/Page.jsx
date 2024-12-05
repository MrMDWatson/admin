import { useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ProtectedRoutes from "../../pages/protectedRoutes/ProtectedRoutes";
import Home from "../../pages/home/Home";
import Users from "../../pages/users/Users";
import User from "../../pages/user/User";
import NewUser from "../../pages/newUser/NewUser";
//import ProductList from "./pages/productList/ProductList";
//import Product from "./pages/product/Product";
//import NewProduct from "./pages/newProduct/NewProduct";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <Routes>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="new-user" element={<NewUser />} />
        <Route path="user/user-id:" element={<User />} />
      </Routes>
    </div>
  )
}
