import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lux/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Button from "./components/button";
import Footer from "./components/footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Product from "./components/Product";
import { Context, ThemeContext } from "./context/ThemeContext";

export default function App() {
  return (
    <Context>
      <Router>
        <div>
          <Navbar />
          <Button />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Main />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Context>
  );
}
