import React from "react";
import { ReactDOM } from "react";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import Crypto from "./components/Crypto/Crypto";

import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Crypto />
    </>
  )
}

export default App