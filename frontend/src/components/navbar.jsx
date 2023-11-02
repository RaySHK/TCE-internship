import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-md" style={{backgroundColor: 'rgb(255, 215, 165)'}}>
      <div className="container-fluid" style={{fontFamily: '"Niconne", cursive', fontSize: 25}}>
      <img src={require("./assets/Modern Coffee Shop Café Logo (3).png")} alt=".." width={40} height={40} />
            <Link to="/" className="navbar-brand">
            &nbsp;&nbsp;Intern's café
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link ">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu" className="nav-link">
                            Menu
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link className="btn" id="logsign" style={{marginRight: "2px"}} to="/login">Login</Link>
                <Link className="btn" id="logsign" to="/signup">Signup</Link>
            </div>
        </div>
  </nav>
    </>
  );
}

export default Navbar;