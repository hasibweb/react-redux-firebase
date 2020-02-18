import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <Link to="/" className="navbar-brand text-danger">
          Parvaj
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#MainNavbar"
          aria-controls="MainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="MainNavbar">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link to="login" className="nav-link">
                Login
              </Link>
            </li>
            {/* DropDown Menu */}
            {/* <li className="nav-item dropdown ml-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="MainNavDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="MainNavDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
