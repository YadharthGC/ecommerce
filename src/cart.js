import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Cart() {
  const [datas, setdatas] = useState([]);
  const [total, settotal] = useState(0);
  const [qty, setqty] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/scarts",
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      setdatas([...get.data]);
      console.log(datas);
      let sum = 0;
      for (let i = 0; i < get.data.length; i++) {
        if (get.data[i].damt) {
          sum = sum + get.data[i].damt;
        }
      }
      settotal(sum);
      setdatas([...get.data]);
      setqty([...get.data.qty]);
    } catch (error) {
      console.log("error1");
    }
  };

  let handlechange = async (e, id, amt) => {
    console.log(e, id, amt);
    try {
      window.location.reload();
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/qty",
        { e, id, amt },
        {
          headers: {
            Authorization: window.locationStorage.getItem("app_token"),
          },
        }
      );
      fetch();
    } catch (error) {}
  };

  let handledelete = async (id) => {
    console.log(id);
    window.location.reload();
    let deletex = await axios.delete(
      `https://yadharthecommerces.herokuapp.com/delete/${id}`
    );
    fetch();
  };

  return (
    <div className="mobile" style={{ backgroundColor: "#EAEDED" }}>
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
      <div className="t">
        Total=Rs<span style={{ fontSize: "30px" }}> {total}</span>/-
      </div>
      <div className="scart">
        <div className="sc">
          <div style={{ lineHeight: "28px" }}>
            <div className="sct">
              <u>Shopping Cart</u>
            </div>
          </div>
          <div className="schr">
            <hr id="schr" />
          </div>
          {datas.map((data) => {
            return (
              <div>
                <div className="matterz">
                  <div className="cone">
                    <img src={data.src} className="cimg"></img>
                  </div>
                  <div className="ctwo">
                    <div className="name">
                      <span style={{ fontSize: "25px" }}>
                        {data.brand}&nbsp;{data.model}
                      </span>
                    </div>
                    <div className="rating">
                      <Rating
                        style={{ fontSize: "15px" }}
                        name="read-only"
                        value={data.value}
                        readOnly
                      />
                    </div>
                    <div className="emi">{data.da}</div>
                    <div className="fd">{data.db}</div>
                    <div>
                      <span className="ff">
                        <span className="bt">BagIT</span> fulfilled
                      </span>
                    </div>
                    <div>
                      <span className="str"> Style:</span>
                      <span className="ans">
                        {data.ram}+ {data.rom}
                      </span>
                    </div>
                    <div className="qd">
                      <div className="q">
                        <select
                          name="qty"
                          id="qty"
                          value={data.qty}
                          onChange={(e) => {
                            handlechange(e.target.value, data._id, data.amount);
                          }}
                          required
                        >
                          <option value="">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div className="d">
                        <button
                          className="delbtn"
                          onClick={() => {
                            handledelete(data._id);
                          }}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cthree">Rs{data.damt}/-</div>
                </div>
                <div className="schr">
                  <hr id="lhrs" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
