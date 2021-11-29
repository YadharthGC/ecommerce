import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Rating from "@mui/material/Rating";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

function Shoes() {
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState(true);

  const shoe = [
    {
      brand: "Yonex",
      model: "SHB88",
      value: 4,
      amount: 7100,
      not: 8000,
      save: 900,
      da: "Power Cushion Badminton Shoes For Men",
      db: "Free Delivery by BagIT",
      ram: "Synthetic leather",
      middle: "Rubber",
      rom: "Synthetic resin",
      size: "UK 8",
      color: "Red",
      src: "./images/ys.jpg",
      code: "c1",
      qty: 0,
    },

    {
      brand: "Yonex",
      model: "EclipsionX",
      value: 3,
      amount: 9999,
      not: 11350,
      save: 1351,
      da: "Power Cushion Badminton Shoes",
      db: "Free Delivery by BagIT",
      ram: "Durable Skin",
      middle: "ToughBrid Light",
      rom: "Rubber",
      size: "UK 7",
      color: "White",
      src: "./images/c2.jpg",
      code: "c2",
      qty: 0,
    },
    {
      brand: "Yonex",
      model: "SHB 37",
      value: 4,
      amount: 7100,
      not: 8000,
      save: 900,
      da: "EX Junior Badminton Shoes",
      db: "Free Delivery by BagIT",
      ram: "P.U. Leather & Polyester Mesh",
      middle: " Power Cushion & E.V.A.",
      rom: "Rubber",
      size: "UK 6",
      color: "White",
      src: "./images/c3.jpg",
      code: "c3",
      qty: 0,
    },
    {
      brand: "Li-Ning",
      model: "Saga Lite",
      value: 3,
      amount: 2038,
      not: 4990,
      save: 2952,
      da: "Non-Marking Badminton Shoe",
      db: "Free Delivery by BagIT",
      ram: "Polyester Mesh",
      middle: " Power Cushion ",
      rom: "Rubber",
      size: "UK 8",
      color: "Blue",
      src: "./images/c4.jpg",
      code: "c4",
      qty: 0,
    },
    {
      brand: "Li-Ning",
      model: "New Ace 3 Premium",
      value: 5,
      amount: 2890,
      not: 3890,
      save: 1000,
      da: "Non-Marking Badminton Shoe",
      db: "Free Delivery by BagIT",
      ram: "pu+mesh",
      middle: "phylon ",
      rom: " gel ",
      size: "UK 8",
      color: "Blue",
      src: "./images/c5.jpg",
      code: "c5",
      qty: 0,
    },
    {
      brand: "Li-Ning",
      model: "Saga Lite",
      value: 3,
      amount: 2038,
      not: 4990,
      save: 2952,
      da: "Non-Marking Badminton Shoe",
      db: "Free Delivery by BagIT",
      ram: "Synthetic Leather and Mesh",
      middle: " Phylon ",
      rom: "Rubber",
      size: "UK 10",
      color: "Silver",
      src: "./images/c6.jpg",
      code: "c6",
      qty: 0,
    },
  ];
  useEffect(() => {
    fetch();
  }, []);

  let postshoe = async () => {
    try {
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/postshoe",
        shoe
      );
      console.log("posted");
    } catch (error) {
      console.log("not posted");
    }
  };

  let fetch = async () => {
    postshoe();
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/shoes"
      );
      console.log(datas);
      setdatas([...get.data]);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  };

  let yonex = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/yonex"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let lining = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/lining"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let blue = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/blue"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let white = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/white"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let red = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/red");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let silver = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/silver"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let ot = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/ot");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let tt = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/tt");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let allshoes = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/allshoes"
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
        "https://yadharthecommerces.herokuapp.com/cartsz",
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
      <nav class="navbar navbar-expand-lg navbar-#232F3E bg-#232F3E" id="navc">
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
        <h3>Loading...</h3>
      ) : (
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
                    <button className="bbtn" onClick={() => yonex()}>
                      Yonex
                    </button>
                  </li>
                  <li>
                    <button className="bbtn" onClick={() => lining()}>
                      Li-ning
                    </button>
                  </li>
                </ul>
              </div>
              <hr id="hbrb" />
              <div className="pricesz">
                <div className="r">Price</div>
                <ul className="ula">
                  <li>
                    <button className="bbtn" onClick={() => ot()}>
                      &gt;10000
                    </button>
                  </li>
                  <li>
                    <button className="bbtn" onClick={() => tt()}>
                      &gt;3000
                    </button>
                  </li>
                </ul>
              </div>
              <hr id="hbrc" />
              <div className="ramz">
                <div className="r">Color</div>
                <ul className="ula">
                  <li>
                    <button className="bbtn" onClick={() => blue()}>
                      Blue
                    </button>
                  </li>
                  <li>
                    <button className="bbtn" onClick={() => white()}>
                      White
                    </button>
                  </li>
                  <li>
                    <button className="bbtn" onClick={() => red()}>
                      Red
                    </button>
                  </li>
                  <li>
                    <button className="bbtn" onClick={() => silver()}>
                      Silver
                    </button>
                  </li>
                </ul>
              </div>
              <hr id="hbre" />
              <div className="cn">
                <div className="r">All</div>
                <ul className="ula">
                  <li>
                    <button className="bbtn" onClick={() => allshoes()}>
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
                <div>
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
                          Upper:
                          <span className="ans">{data.ram}</span>
                        </div>
                        <div>
                          Midsole:
                          <span className="ans">{data.middle}</span>
                        </div>
                        <div>
                          Outsole:
                          <span className="ans">{data.rom}</span>
                        </div>
                        <div>
                          Size available:
                          <span className="ans">{data.size}</span>
                        </div>
                        <div>
                          Color:
                          <span className="ans">{data.color}</span>
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
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Shoes;
