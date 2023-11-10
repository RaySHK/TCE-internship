import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";


function Navbar () {
    const navigate = useNavigate();

    const Logout = () => {
        navigate("/");
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
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" href="/contact">Contact Us</a>
            </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  About Us
                </a>
              </li>
            </ul>

            <br></br>
            <button onClick={Logout} style={{ backgroundColor: "rgb(255, 215, 165)" }}>
              LOGOUT
            </button>
          </div>
        </div>
  </nav>
    </>
  );
}

export default Navbar;