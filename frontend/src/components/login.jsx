import React from "react";
import Navbar from "./navbar";
const Login = () => {
  return (
    <>
        <Navbar />
      <div className='d-flex justify-content-center align-items-center mt-5 vh-50'>
      <div className='border border-dark p-4 bg-white rounded'>
        <form>
            <h2 className="text-center mb-3">Log in</h2>
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type = "email" placeholder='Email' name='Email' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>password</label>
                <input type = "password" placeholder='Password' name='Password' className='form-control' />
            </div>
            <div className='mb-3'>
                <input type = "checkbox" value='Login' className='custom-control custom-checkbox mx-2' />
                <label className='custom-control-label' htmlFor='customCheck1'>Remember me</label>
            </div>
            <div className='mb-3 d-grid'>
                <button className='btn btn-danger btn-block'>Login</button>
            </div>
        </form>
      </div>
    </div>


    </>
  );
};

export default Login;