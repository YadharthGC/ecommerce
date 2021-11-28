import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";

function Footer() {
  return (
    <div className="footer">
      <div>
        copyright
        <CopyrightSharpIcon />
        All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
