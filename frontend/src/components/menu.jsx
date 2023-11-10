import React from "react";
import Navbar from "./navbar";

import { Link } from "react-router-dom";

function Menu(){
  return (
    <>
        <Navbar />
      {/* cards */}
  <div className="album py-5 ">
    <div className="container">
      <h1 style={{fontFamily: '"Niconne", cursive', fontSize: 60, paddingTop: 40}}>Menu</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-spencer-davis-4393021.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp1())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res" /></div>
                  <button type="button" onclick="{(countm1())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}>₹20</font></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-mariana-kurnyk-1775043.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp2())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res2" /></div>
                  <button type="button" onclick="{(countm2())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>₹20</font></font></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-robin-stickel-70497.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp3())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res3" /></div>
                  <button type="button" onclick="{(countm3())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>₹20</font></font></small>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div className="album py-5 ">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-spencer-davis-4393021.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp1())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res" /></div>
                  <button type="button" onclick="{(countm1())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}>₹20</font></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-mariana-kurnyk-1775043.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp2())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res2" /></div>
                  <button type="button" onclick="{(countm2())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>₹20</font></font></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-robin-stickel-70497.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp3())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res3" /></div>
                  <button type="button" onclick="{(countm3())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>₹20</font></font></small>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div className="album py-5 ">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-spencer-davis-4393021.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp1())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res" /></div>
                  <button type="button" onclick="{(countm1())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}>₹20</font></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-mariana-kurnyk-1775043.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp2())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res2" /></div>
                  <button type="button" onclick="{(countm2())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>₹20</font></font></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={require("./assets/pexels-robin-stickel-70497.jpg")} className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" /><title>Placeholder</title>
            <div className="card-body">
              <p className="card-text"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This is a wider card with supporting text below as a natural introduction to additional content. This content is a little longer.</font></font></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onclick="{(countp3())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>+</font></button>
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" style={{border: '#43484b solid 1px'}}><h6 id="res3" /></div>
                  <button type="button" onclick="{(countm3())}" className="btn btn-sm btn-outline-secondary" style={{border: '#43484b solid 1px'}}><font style={{verticalAlign: 'inherit'}}>-</font></button>
                </div>
                <small className="text-body-secondary"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>₹20</font></font></small>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>


    </>
  );
};

export default Menu;