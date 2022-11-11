import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/UserContext";
import "./Main.css";

const Main = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className={`${isDark && "bg-secondary "}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
