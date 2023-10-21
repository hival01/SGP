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
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
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

                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
