import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Rating from "@mui/material/Rating";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

function Laptops() {
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState(true);
  const laptop = [
    {
      brand: "HP",
      model: "14s-dq2535TU",
      value: 4,
      amount: 57490,
      not: 63179,
      save: 5689,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "512GB",
      ram: "8GB",
      ic: "i5-1135G7",
      size: "14 inches",
      os: "Windows 10 Home",
      src: "./images/1411.jpg",
      code: "b1",
      qty: 0,
    },
    {
      brand: "HP",
      model: "14-ec0035AU",
      value: 4,
      amount: 54990,
      not: 67931,
      save: 12941,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "512GB",
      ram: "8GB",
      ic: " Ryzen 5",
      size: "14 inches",
      os: "Windows 10 Home",
      src: "./images/amd.jpg",
      code: "b2",
      qty: 0,
    },
    {
      brand: "HP",
      model: "15s-GY0501AU",
      value: 4,
      amount: 40490,
      not: 46055,
      save: 5565,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "256GB",
      ram: "8GB",
      ic: " Ryzen 3",
      size: "15.6 inches",
      os: "Windows 10 Home",
      src: "./images/15.jpg",
      code: "b3",
      qty: 0,
    },
    {
      brand: "Dell",
      model: "Inspiron 3501",
      value: 4,
      amount: 56258,
      not: 57125,
      save: 867,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "256GB",
      ram: "4GB",
      ic: "i5-1135G7",
      size: "15.6 inches",
      os: "Windows 10 Home",
      src: "./images/3501.jpg",
      code: "b4",
      qty: 0,
    },
    {
      brand: "Dell",
      model: "Vostro 3400 ",
      value: 4,
      amount: 62290,
      not: 68928,
      save: 6638,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "512GB",
      ram: "8GB",
      ic: "i5-1135G7",
      size: "14 inches",
      os: "Windows 10 Home",
      src: "./images/3400.jpg",
      code: "b5",
      qty: 0,
    },
    {
      brand: "Dell",
      model: "INSPIRON 3511 ",
      value: 4,
      amount: 43090,
      not: 56776,
      save: 13686,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "256GB",
      ram: "8GB",
      ic: "i3-1115G4",
      size: "15.6 inches",
      os: "Windows 10 Home",
      src: "./images/3511.jpg",
      code: "b6",
      qty: 0,
    },
    {
      brand: "Lenevo",
      model: "IdeaPad Slim 5",
      value: 4,
      amount: 62990,
      not: 104290,
      save: 41300,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "512GB",
      ram: "16GB",
      ic: "i5",
      size: "15.6 inches",
      os: "Windows 10 Home",
      src: "./images/s5.jpg",
      code: "b7",
      qty: 0,
    },
    {
      brand: "Lenevo",
      model: "82C7A006IH ",
      value: 4,
      amount: 30700,
      not: 32900,
      save: 2200,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "1TBHDD",
      ram: "4GB",
      ic: "i3-1115G4",
      size: "15.6 inches",
      os: "Windows 10 Home",
      src: "./images/82.jpg",
      code: "b8",
      qty: 0,
    },
    {
      brand: "Lenevo",
      model: "IdeaPad Slim 3 ",
      value: 4,
      amount: 46100,
      not: 69000,
      save: 22900,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "256GB",
      ram: "8GB",
      ic: "i3-1115G4",
      size: "14 inches",
      os: "Windows 10 Home",
      src: "./images/ls3.jpg",
      code: "b9",
      qty: 0,
    },
  ];
  useEffect(() => {
    fetch();
  }, []);

  let postlap = async () => {
    try {
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/postlap",
        laptop
      );
      console.log("posted");
    } catch (error) {
      console.log("not posted");
    }
  };

  let fetch = async () => {
    postlap();
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/laptops"
      );
      console.log(datas);
      setdatas([...get.data]);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
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

  let alllap = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/alllap"
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
      {loading ? (
        <h3> Loading...</h3>
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
                        alllap();
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
      )}
    </div>
  );
}

export default Laptops;
