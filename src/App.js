import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./cart";
import Mobile from "./mobiles";
import Signin from "./sign.js";
import Register from "./register.js";
import Laptops from "./laptop.js";
import Shoes from "./shoes.js";
import Ship from "./ship.js";
import Shipped from "./shipped.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} exact={true} />
        <Route path="/register" element={<Register />} exact={true} />
        <Route path="/mobile" element={<Mobile />} exact={true} />
        <Route path="/cart" element={<Cart />} exact={true} />
        <Route path="/laptop" element={<Laptops />} exact={true} />
        <Route path="/shoe" element={<Shoes />} exact={true} />
        <Route path="/ship" element={<Ship />} exact={true} />
        <Route path="/shipped" element={<Shipped />} exact={true} />
      </Routes>
    </Router>
  );
}

export default App;
