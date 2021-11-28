import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./copyright";
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function Register() {
  const [gmail, setgmail] = useState([]);
  const [password, setpassword] = useState([]);
  const [cpassword, setcpassword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      navigate("/", { replace: true });
      let post = await axios.post("http://localhost:3003/register", {
        gmail,
        password,
      });
    } catch (error) {}
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
            <div className="loginin">Create account </div>
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
            <div id="ph">
              <PriorityHighIcon id="phicon" />
              Password must be atleast 6 characters
            </div>
            <div className="signpassword">Password again</div>
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
              By creating an account, you agree to BagIT's Conditions of
              <br /> use and Privacy Notice.
            </div>
            <div className="linea">
              <hr />
            </div>
            <div className="already">
              Already have an account?
              <Link to="/" style={{ textDecoration: "none" }}>
                Sign in&#10148;
              </Link>
            </div>
          </div>
        </div>
      </form>

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

export default Register;
