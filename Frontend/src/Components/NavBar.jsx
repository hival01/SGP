import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  console.log(props.userInfo);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top ">
          <div className="container-fluid bg-dark">
            <Link to="/" className="navbar-brand">
                  ReviewAnything
            </Link>
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
              <ul className="navbar-nav ms-auto  mb-lg-0">
                <li className="nav-item mr-4">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>

                <li className="nav-item mr-3">
                  {props.userInfo ? (
                    <Link className="nav-link" onClick={props.logout}>
                      Logout
                    </Link>
                  ) : (
                    <Link className="nav-link " to="/login">
                      Login
                    </Link>
                  )}
                </li>

                <li className="nav-item mr-4">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
