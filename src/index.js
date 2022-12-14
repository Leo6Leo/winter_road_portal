import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";
import "antd/dist/antd.variable.min.css";
import NavigationBar from "./components/Global/NavigationBar";
import Home from "./pages/Home";
import Footer from "./components/Global/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Transportation from "./pages/Transportation";
import Observation from "./pages/Observation";
ReactDOM.render(
  <div>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/transportation" element={<Transportation />} exact />
        <Route path="/observation" element={<Observation />} exact />
      </Routes>
      <Footer />
    </Router>
  </div>,
  document.getElementById("root")
);
