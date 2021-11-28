import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./copyright";
import Rating from "@mui/material/Rating";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

function Laptops() {
  const [datas, setdatas] = useState([]);
  useEffect(async () => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/laptops"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let hp = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/hp");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let dell = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/dell"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let lenevo = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/lenevo"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let six = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/six");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let five = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/five"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let four = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/four"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let roma = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/roma"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let romb = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/romb"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let rama = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/rama"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let ramb = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/ramb"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let handleadd = async (code) => {
    try {
      console.log(code);
      alert("Added to cart");
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/cartl",
        { code },
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
    } catch (error) {}
  };

  return (
    <div className="mobile">
      <Header />
      <nav class="navbar navbar-expand-lg navbar-#232F3E bg-#232F3E" id="navd">
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
      <div className="slices">
        <div className="slicea">
          <div>
            <div className="title" style={{ fontSize: "20px" }}>
              <u>
                <span style={{ color: "#e0aa21" }}>BagIT</span>
              </u>
            </div>
            <div className="brandz">
              <div className="r">Brands</div>
              <ul className="ula">
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      hp();
                    }}
                  >
                    HP
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      dell();
                    }}
                  >
                    Dell
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      lenevo();
                    }}
                  >
                    Lenevo
                  </button>
                </li>
              </ul>
            </div>
            <hr id="hbrb" />
            <div className="pricesz">
              <div className="r">Price</div>
              <ul className="ula">
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      six();
                    }}
                  >
                    &lt;60000
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      five();
                    }}
                  >
                    &lt;50000
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      four();
                    }}
                  >
                    &lt;40000
                  </button>
                </li>
              </ul>
            </div>
            <hr id="hbrc" />
            <div className="romsz">
              <div className="r">Internal Storage</div>
              <ul className="ula">
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      roma();
                    }}
                  >
                    256GB
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      romb();
                    }}
                  >
                    512GB
                  </button>
                </li>
              </ul>
            </div>
            <hr id="hbrd" />
            <div className="ramz">
              <div className="r">RAM</div>
              <ul className="ula">
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      rama();
                    }}
                  >
                    4GB
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      ramb();
                    }}
                  >
                    8GB
                  </button>
                </li>
              </ul>
            </div>
            <hr id="hbre" />
            <div className="cn">
              <div className="r">All</div>
              <ul className="ula">
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      fetch();
                    }}
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>
            <hr id="hbrf" />
          </div>
        </div>
        <div className="slicec">
          {datas.map((data) => {
            return (
              <>
                <div className="sliceca">
                  <div className="imgpart">
                    <img src={data.src} className="mobileimg" />
                  </div>
                  <div className="detailspart">
                    <div>
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
                      <div>
                        <span className="no">Rs {data.amount}/-</span>
                        <span className="slash">&#8377;{data.not}</span>
                        <br />
                        <span className="save"> Save &#8377;{data.save}</span>
                        <div className="emi">{data.da}</div>
                      </div>
                      <div className="fd">{data.db}</div>
                    </div>
                  </div>

                  <div className="featurespart">
                    <div>
                      <div>
                        Hard disk Storage:
                        <span className="ans">{data.rom}</span>
                      </div>
                      <div>
                        RAM:
                        <span className="ans">{data.ram}</span>
                      </div>
                      <div>
                        Display Size:<span className="ans">{data.size}</span>
                      </div>
                      <div>
                        OS:
                        <span className="ans">{data.os}</span>
                      </div>
                      <div>
                        <button
                          className="add"
                          onClick={() => {
                            handleadd(data.code);
                          }}
                        >
                          <AddShoppingCartSharpIcon id="acs" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr id="hrs" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Laptops;
