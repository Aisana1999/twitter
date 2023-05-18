import React from "react";
import "./Profile.css";
import profile from "./pages/Profile/Profile";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
//React function to get div element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routers>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
