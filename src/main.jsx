import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.jsx";
import HomePage from "../components/HomePage.jsx";
import Footer from "../components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <HomePage />
    <Footer />
  </React.StrictMode>
);
