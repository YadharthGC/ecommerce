import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Ship() {
  function showrazorpay() {}

  const [datas, setdatas] = useState([]);
  const [total, settotal] = useState(0);
  const [name, setname] = useState([]);
  const [mobile, setmobile] = useState([]);
  const [pin, setpin] = useState([]);
  const [address, setaddress] = useState([]);
  const [noc, setnoc] = useState([]);
  const [card, setcard] = useState([]);
  const [exp, setexp] = useState([]);
  const [cvv, setcvv] = useState([]);
  const [loading, setloading] = useState(true);

  const [items, setitems] = useState([]);
  const navigate = useNavigate();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  useEffect(() => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      let get = await axios.get(
        "https://yadharthecommerces.herokuapp.com/finals",
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      setdatas([...get.data]);
      setloading(false);
      console.log(datas);
      let sum = 0;
      for (let i = 0; i < get.data.length; i++) {
        if (get.data[i].damt) {
          sum = sum + get.data[i].damt;
        }
      }
      settotal(sum);
      console.log("ok");
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  async function xtra() {
    var n = -1;
    datas.map((name) => {
      n++;
      items[n] = name.brand + " " + name.model;
    });
    console.log(items);
  }
  xtra();

  let handlesubmit = async (e) => {
    try {
      navigate("/shipped", { replace: true });
      console.log(e);
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/notesz",
        {
          name,
          mobile,
          pin,
          address,
          noc,
          card,
          exp,
          cvv,
          total,
          items,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
    } catch (error) {
      console.log("error23");
      console.log(error);
    }
  };

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
        <h3>Loading...</h3>
      ) : (
        <div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            {/* <div className="final">
              <div className="location">
                <div className="xa"> Delivery Address</div>
                <div className="xb">Name</div>
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  ></input>
                </div>
                <div className="xb">Mobile number</div>
                <div>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                  ></input>
                </div>
                <div className="xb">Pincode</div>
                <div>
                  <input
                    type="text"
                    value={pin}
                    onChange={(e) => setpin(e.target.value)}
                  ></input>
                </div>
                <div className="xb">Address</div>
                <div>
                  <input
                    type="text"
                    className="xbaddress"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="money">
                <div className="xa">Debit/Credit card</div>
                <div className="xb">Name</div>
                <div>
                  <input
                    type="text"
                    value={noc}
                    onChange={(e) => setnoc(e.target.value)}
                  ></input>
                </div>
                <div className="xb">Card number</div>
                <div>
                  <input
                    type="text"
                    value={card}
                    onChange={(e) => setcard(e.target.value)}
                  ></input>
                </div>
                <div className="xb">Expiry date</div>
                <div>
                  <input
                    type="text"
                    className="xbxb"
                    value={exp}
                    onChange={(e) => setexp(e.target.value)}
                  ></input>
                </div>
                <div className="xb">CVV</div>
                <div>
                  <input
                    type="text"
                    className="xbxb"
                    value={cvv}
                    onChange={(e) => setcvv(e.target.value)}
                  ></input>
                </div>
              </div>
            </div> */}

            {/* <div className="t">
              Total=Rs<span style={{ fontSize: "30px" }}> {total}</span>/-
            </div> */}
            {/* <div className="xc">
              <button
                onClick={() => {
                  showrazorpay();
                }}
              >
                buy
              </button>
            </div> */}
            <div className="xc">
              <input
                value="purchase"
                type="submit"
                className="xcsubmit"
              ></input>
              <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
            </div>
          </form>
          <div className="display">
            {datas.map((datae) => {
              return (
                <div className="displaya">
                  <div>
                    <img src={datae.src} className="mobileimg" />
                  </div>
                  <div className="title" style={{ fontSize: "15px" }}>
                    {datae.brand}&nbsp;{datae.model}
                  </div>
                  <div className="dqa">
                    Quantity:{" "}
                    <span className="ans">
                      {datae.qty}*{datae.amount}
                    </span>
                  </div>
                  <div className="dqa">
                    Amount: <span className="ans">{datae.damt}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Ship;
