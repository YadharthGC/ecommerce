import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";

function Signin() {
  const [gmail, setgmail] = useState([]);
  const [password, setpassword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post(
        "https://yadharthecommerces.herokuapp.com/login",
        {
          gmail,
          password,
        }
      );
      window.localStorage.setItem("app_token", post.data.token);
      navigate("/mobile");
    } catch (error) {
      alert("Incorrect Gmail/Password");
    }
  };

  return (
    <div className="sign">
      <div className="title">BagIT</div>
      <form
        className="signform"
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <div>
          <div className="signdetails">
            <div className="loginin">Sign-In</div>
            <div className="gmail">Gmail</div>
            <input
              type="text"
              id="gmail"
              value={gmail}
              onChange={(e) => {
                setgmail(e.target.value);
              }}
            ></input>
            <div className="signpassword">Password</div>
            <input
              type="password"
              id="signpassword"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
            <div className="signsubmit">
              <input type="submit" id="signsubmit" value="Continue"></input>
            </div>
            <div className="story">
              By continuing, you agree to BagIT's Conditions of
              <br /> Use and Privacy Notice.
            </div>
          </div>
        </div>
      </form>
      <div className="new">
        <div className="to">
          ----------&nbsp;&nbsp;<span className="bt">New to BagIT?</span>
          &nbsp;&nbsp;----------
        </div>
      </div>
      <div className="ssignsubmit">
        <Link to="/register">
          <button type="submit" id="ssignsubmit">
            Become a BagIT family
          </button>
        </Link>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="cicon">
        <CopyrightSharpIcon id="csicon" />
        2021,BagIT or its affiliates
      </div>
    </div>
  );
}

export default Signin;
