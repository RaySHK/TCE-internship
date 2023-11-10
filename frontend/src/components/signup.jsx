import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const { name, email, password, mobile } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4500/createCustomer", {
        email : inputValue.email,
        ...inputValue,
      });

      if (response.status === 201) {
        const message = response.data.msg;
        handleSuccess(message);
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      } else {
        const message = response.data.msg;
        handleError(message);
      }
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.msg);
      } else {
        alert("An error occurred.");
      }
    }

    setInputValue({
      name: "",
      email: "",
      password: "",
      mobile: "",
    });
  };

  return (
    <center>
      <br />
      <br />
      <div className="form_container">
        <h2>Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Your Name"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              placeholder="Enter Your Mobile"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have an account? <Link to="/">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </center>
  );
};

export default Signup;

