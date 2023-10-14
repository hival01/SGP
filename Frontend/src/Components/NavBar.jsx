import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  console.log(props.userInfo);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top ">
          <div className="container-fluid bg-dark">
            <a className="navbar-brand" href="#">
              ReviewAnything
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-dark"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  {props.userInfo ? (
                    <Link className="nav-link" onClick={props.logout}>
                      Logout
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  )}
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Store
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Product
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Service
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    For Businesses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
