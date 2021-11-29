import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Shipped() {
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/notesy",
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      setdatas([...get.data]);
      setloading(false);
      console.log(datas);
      console.log(datas.items);
    } catch (error) {
      setloading(false);
    }
  };

  function date() {}

  return (
    <div>
      <Header />
      <nav class="navbar navbar-expand-lg navbar-#232F3E bg-#232F3E" id="nave">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ color: "white" }}>
            Categories
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentz"
            aria-controls="navbarSupportedContentz"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="bz"
          >
            <span class="navbar-toggler-icon" id="as"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContentz">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <Link to="/mobile" style={{ textDecoration: "none" }}>
                    <span style={{ color: "white" }}>Mobiles</span>
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <Link to="/laptop" style={{ textDecoration: "none" }}>
                    <span style={{ color: "white" }}>Laptops</span>
                  </Link>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <Link to="/shoe" style={{ textDecoration: "none" }}>
                    <span style={{ color: "white" }}>Shoes</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <div className="display">
          {datas.map((data) => {
            return (
              <div className="displaya">
                <div className="ans" style={{ textAlign: "center" }}>
                  <u>{data.date}</u>
                </div>
                <div className="title" style={{ fontSize: "15px" }}>
                  {data.name}
                </div>
                <div className="dqa">
                  <span className="ans">{data.pin}</span>
                </div>
                <div className="dqa">
                  <span className="ans">Rs {data.total}/-</span>
                </div>
                <div className="dqa">
                  <span className="ans">
                    <div>
                      <u>Items</u>
                    </div>
                    <ul>
                      {data.items.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Shipped;
