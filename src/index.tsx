import React from "react";
import ReactDOM from "react-dom";
import "./css/index.scss";
import Home from "./home";
//import Products from './products'
import reportWebVitals from "./reportWebVitals";
//import SRL from 'simple-react-lightbox'

import Header from "./components/header";
import Footer from "./components/footer";

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
