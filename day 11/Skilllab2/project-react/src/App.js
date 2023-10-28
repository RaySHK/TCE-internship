import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route element= {<Home/>}path="/" />
            <Route element= {<About/>}path="/About" />
            <Route element= {<Contact/>}path="/Contact" />
            <Route element= {<Login/>}path="/Login" />
            <Route element= {<Signup/>}path="/Signup" />
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
