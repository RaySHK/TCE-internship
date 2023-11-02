import React from "react";
import{ BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Menu from "./components/menu";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;