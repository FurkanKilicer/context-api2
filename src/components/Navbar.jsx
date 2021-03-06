import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Navbar(props) {
  const contextSlide = React.useContext(ThemeContext);

  const { bgColor, textColor } = contextSlide.changer;

  return (
    <div className={`${bgColor} ${textColor}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg {`${bgColor} ${textColor}`}">
        <div className="container">
          <a className="navbar-brand" href="#">
            React-Hit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-5">
                <Link to="/home" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link
                  to="./About"
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link
                  to="./Contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link
                  to="./product"
                  className="nav-link active"
                  aria-current="page"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
