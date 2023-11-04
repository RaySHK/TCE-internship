import React from "react";
import "./navbar.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token || cookies.token === "undefined") {
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

    const Logout = () => {
        removeCookie("token");
        navigate("/login");
    };
  return (
    <>
    
    <nav className="navbar navbar-expand-md" style={{backgroundColor: 'rgb(255, 215, 165)'}}>
      <div className="container-fluid" style={{fontFamily: '"Niconne", cursive', fontSize: 25}}>
      <img src={require("./assets/Modern Coffee Shop Café Logo (3).png")} alt=".." width={40} height={40} />
            <Link to="/" className="navbar-brand">
            &nbsp;&nbsp;Intern's café
            </Link>
          <Link className="navbar-brand" to="#"></Link>

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">
                  AddYourFood
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/View">Recipes</a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
            </ul>

            <br></br>
            <button onClick={Logout} style={{ backgroundColor: "#8f8884" }}>
              LOGOUT
            </button>
          </div>
        </div>
  </nav>
    </>
  );
}

export default Navbar;