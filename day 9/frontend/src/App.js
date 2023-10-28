// App.js

import React from 'react';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from './component/Navbar';
const App = () => {
  return(
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route element={<Home />} path="/"/>
      <Route element={<About />} path="/About" />
      <Route element={<Contact />} path="/Contact" />
      <Route element= {<Login/>}path="/login" />
            <Route element= {<Signup/>}path="/signup" />
    </Routes>
    </BrowserRouter>   
  );
};

export default App;