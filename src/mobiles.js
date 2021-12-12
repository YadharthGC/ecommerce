import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Rating from "@mui/material/Rating";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

function Mobile() {
  const [datas, setdatas] = useState([]);
  const [loading, setloading] = useState(true);

  const mob = [
    {
      brand: "Samsung",
      model: "Galaxy M32",
      value: 4,
      amount: 23000,
      not: 25000,
      save: 2000,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "128GB",
      cellular: "5G",
      size: "6.1 inches",
      wp: "Unlocked for for all Carriers",
      src: "./images/m32.jpg",
      ram: "8GB",
      code: "a1",
      qty: 0,
    },
    {
      brand: "Samsung",
      model: "Galaxy M52",
      value: 4.3,
      amount: 29000,
      not: 34999,
      save: 5000,
      da: "Save Rs 4000/- with coupon",
      db: "Free Delivery by BagIT",
      rom: "128GB",
      cellular: "5G",
      size: "6.7 inches",
      wp: "Unlocked for for all Carriers",
      src: "./images/m52.jpg",
      ram: "6GB",
      code: "a2",
      qty: 0,
    },
    {
      brand: "Samsung",
      model: "Galaxy M21",
      value: 4,
      amount: 13000,
      not: 15000,
      save: 200,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "64GB",
      cellular: "4G",
      size: "6.4 inches",
      wp: "Unlocked for for all Carriers",
      src: "./images/m21.jpg",
      ram: "4GB",
      code: "a3",
      qty: 0,
    },
    {
      brand: "Oppo",
      model: "A55",
      value: 4.4,
      amount: 15490,
      not: 18990,
      save: 3500,
      da: "Upto Rs.1250 off On SBI bank cards",
      db: "Free Delivery by BagIT",
      rom: "64GB",
      ram: "4GB",
      cellular: "4G",
      size: "6.51 inches",
      wp: "Unlocked for for all Carriers",
      src: "./images/a55.jpg",
      code: "a4",
      qty: 0,
    },
    {
      brand: "Oppo",
      model: "A74",
      value: 4.1,
      amount: 17990,
      not: 20990,
      save: 3000,
      da: "Upto Rs.1250 off On SBI bank cards",
      db: "Free Delivery by BagIT",
      rom: "128GB",
      ram: "6GB",
      cellular: "5G",
      size: "6.49 inches",
      wp: "Unlocked for for all Carriers",
      src: "./images/a74.jpg",
      code: "a5",
      qty: 0,
    },
    {
      brand: "Oppo",
      model: "A31",
      value: 4,
      amount: 12990,
      not: 15990,
      save: 3000,
      da: "Save extra with No Cost EMI",
      db: "Free Delivery by BagIT",
      rom: "128GB",
      ram: "6GB",
      cellular: "4G",
      size: "6.5 inches",
      wp: "WhatsApp SIM",
      src: "./images/a31.jpg",
      code: "a6",
      qty: 0,
    },
    {
      brand: "Realme",
      model: "narzo 30",
      value: 4,
      amount: 15499,
      not: 16999,
      save: 1500,
      da: "Save Rs 1500/- with coupon",
      db: "Free Delivery by BagIT",
      rom: "128GB",
      ram: "6GB",
      cellular: "4G",
      size: "6.5 inches",
      wp: "Unlocked for All Carriers",
      src: "./images/n30.jpg",
      code: "a7",
      qty: 0,
    },
    {
      brand: "Realme",
      model: "narzo 50i",
      value: 4,
      amount: 8999,
      not: 9999,
      save: 1000,
      da: "Save extra with Cashback",
      db: "Free Delivery by BagIT",
      rom: "64GB",
      ram: "4GB",
      cellular: "4G",
      size: "6.5 inches",
      wp: "Unlocked for All Carriers",
      src: "./images/50i.jpg",
      code: "a8",
      qty: 0,
    },
    {
      brand: "Realme",
      model: "8i",
      value: 4,
      amount: 13939,
      not: 15999,
      save: 2060,
      da: "Save extra with Cashback",
      db: "Free Delivery by BagIT",
      rom: "64GB",
      ram: "4GB",
      cellular: "4G",
      size: "6.5 inches",
      wp: "Unlocked for All Carriers",
      src: "./images/8i.jpg",
      code: "a9",
      qty: 0,
    },
  ];
  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    postmob();
  }, []);

  let postmob = async () => {
    try {
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/postmob",
        mob
      );
      console.log("posted");
    } catch (error) {
      console.log("not posted");
    }
  };

  let fetch = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/mobiles"
      );
      console.log(datas);
      setdatas([...get.data]);
      setloading(false);
    } catch (error) {
      console.log("fullerror");
      setloading(false);
    }
  };

  let samsung = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/samsung"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let oppo = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/oppo"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let realme = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/realme"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let gba = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/gba");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let gbb = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/gbb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let ra = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/ra");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let rb = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/rb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let ca = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/ca");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let cb = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/cb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let pa = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/pa");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let pb = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/pb");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };
  let pc = async () => {
    try {
      let get = await axios.get("https://yadharthecommerces.herokuapp.com/pc");
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let allmob = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/allmob"
      );
      console.log(datas);
      setdatas([...get.data]);
    } catch (error) {}
  };

  let handleadd = async (id, code) => {
    try {
      console.log(id, code);
      alert("Added to cart");
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/cartm",
        { id, code },
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
                        allmob();
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
                              handleadd(data._id, data.code);
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

export default Mobile;
