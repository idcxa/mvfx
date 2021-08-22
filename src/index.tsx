import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Home from "./Home";
//import Products from './products'
import reportWebVitals from "./reportWebVitals";
//import SRL from 'simple-react-lightbox'

import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
