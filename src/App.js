import React from "react";
import HeaderMenu from "./components/HeaderMenu";
import { LoginPopup, NewUser } from "./components/LoginPopup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <HeaderMenu />
      <Home />
      <LoginPopup />
      <NewUser />
      <Footer />
    </>
  );
};

export default App;
