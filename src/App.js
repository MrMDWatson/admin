import { useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/page/Page";
import "./app.scss";

function App() {
  const { admin } = useSelector((store) => store.app);
  return (
    <div className="app">
      {!admin 
        ? <Login />
        : (
          <>
            <Header />
            <main>
              <Sidebar />
              <Main />
            </main>
          </>
        )
      }
    </div>
  );
}

export default App;
