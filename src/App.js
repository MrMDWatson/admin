import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Betbox from "./pages/betbox/Betbox";
import Another from "./pages/another/Another";
import ProtectedRoutes from "./pages/protectedRoutes/ProtectedRoutes";
//import NewProduct from "./pages/newProduct/NewProduct";
//import Product from "./pages/product/Product";
//import UserList from "./pages/userList/UserList";
//import ProductList from "./pages/productList/ProductList";
import "./app.scss";

function App() {
  const { admin } = useSelector((store) => store.app);
  return (
    <div className="app">
      <Routes>
        <Route index element={admin ? <Navigate to="/hub" /> : <Navigate to="/login" />} />
        <Route path="login" element={admin ? <Navigate to="/hub" /> : <Login />} />
        <Route path="hub" element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="new-user" element={<NewUser />} />
          <Route path="user/user-id:" element={<User />} />
        </Route>   
      </Routes>
    </div>
  );
}

export default App;
