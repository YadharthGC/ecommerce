import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  // useEffect(() => {
  //   fetch();
  // }, []);
  // let fetch = async () => {
  //   try {
  //     let get = await axios.get("http://localhost:3003/name");
  //     console.log(get);
  //   } catch (error) {
  //     alert("name failure");
  //   }
  // };

  return (
    <div className="headertrial">
      <nav
        class="navbar navbar-expand-lg navbar-#131921 bg-#131921"
        id="navbar"
      >
        <div class="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="title" style={{ fontSize: "20px" }}>
              <span style={{ color: "white" }}>BagIT</span>
            </div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  ></a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li style={{ color: "black" }}>
                      <button
                        className="bbtn"
                        onClick={() => {
                          window.localStorage.removeItem("app_token");
                          navigate("/");
                        }}
                      >
                        Sign-out
                      </button>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link " style={{ color: "white" }}>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <span style={{ color: "white" }}>
                        <ShoppingCartSharpIcon /> Cart
                      </span>
                    </Link>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
