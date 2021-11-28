import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./copyright";
import Rating from "@mui/material/Rating";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

function Mobile() {
  const [datas, setdatas] = useState([]);
  useEffect(async () => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      let get = await axios.get("http://localhost:3003/mobiles");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let samsung = async () => {
    try {
      let get = await axios.get("http://localhost:3003/samsung");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let oppo = async () => {
    try {
      let get = await axios.get("http://localhost:3003/oppo");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let realme = async () => {
    try {
      let get = await axios.get("http://localhost:3003/realme");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let gba = async () => {
    try {
      let get = await axios.get("http://localhost:3003/gba");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let gbb = async () => {
    try {
      let get = await axios.get("http://localhost:3003/gbb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let ra = async () => {
    try {
      let get = await axios.get("http://localhost:3003/ra");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let rb = async () => {
    try {
      let get = await axios.get("http://localhost:3003/rb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let ca = async () => {
    try {
      let get = await axios.get("http://localhost:3003/ca");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let cb = async () => {
    try {
      let get = await axios.get("http://localhost:3003/cb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let pa = async () => {
    try {
      let get = await axios.get("http://localhost:3003/pa");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let pb = async () => {
    try {
      let get = await axios.get("http://localhost:3003/pb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let pc = async () => {
    try {
      let get = await axios.get("http://localhost:3003/pc");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let handleadd = async (code) => {
    try {
      console.log(code);
      alert("Added to cart");
      let post = await axios.post(
        "http://localhost:3003/cartm",
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
      <nav class="navbar navbar-expand-lg navbar-#232F3E bg-#232F3E" id="navb">
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
                      samsung();
                    }}
                  >
                    Samsung
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      oppo();
                    }}
                  >
                    Oppo
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      realme();
                    }}
                  >
                    Realme
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
                      pa();
                    }}
                  >
                    &lt;30000
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      pb();
                    }}
                  >
                    &lt;20000
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      pc();
                    }}
                  >
                    &lt;10000
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
                      gba();
                    }}
                  >
                    64GB
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      gbb();
                    }}
                  >
                    128GB
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
                      ra();
                    }}
                  >
                    4GB
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      rb();
                    }}
                  >
                    6GB
                  </button>
                </li>
              </ul>
            </div>
            <hr id="hbre" />
            <div className="cn">
              <div className="r">Data Transfer</div>
              <ul className="ula">
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      ca();
                    }}
                  >
                    4G
                  </button>
                </li>
                <li>
                  <button
                    className="bbtn"
                    onClick={() => {
                      cb();
                    }}
                  >
                    5G
                  </button>
                </li>
              </ul>
            </div>
            <hr id="hbrf" />
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
                        <span className="no">Rs&nbsp;{data.amount}/-</span>
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
                        Storage:<span className="ans">{data.rom}</span>
                      </div>
                      <div>
                        Cellular Technology:
                        <span className="ans">{data.cellular}</span>
                      </div>
                      <div>
                        Display Size:<span className="ans">{data.size}</span>
                      </div>
                      <div>
                        Wireless Provider:
                        <span className="ans">{data.wp}</span>
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

export default Mobile;
