import React from "react";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import { LoginPopup, NewUser } from "./components/LoginPopup";
const App = () => {
  return (
    <>
      <HeaderMenu />
      <LoginPopup />
      <NewUser />
    </>
  );
};

export default App;
