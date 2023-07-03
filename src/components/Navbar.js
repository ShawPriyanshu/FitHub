import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {

    const [navbar,setNavbar]=useState(false)
    const changeBackground=()=>{
        if(window.scrollY>=90)
        setNavbar(true);
        else
        setNavbar(false);
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <div>
       <nav className={navbar?"navbar active fixed-top navbar-expand-lg ":"navbar fixed-top navbar-expand-lg bg-transparent"}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FitHub</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/categories">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/testimonials">Testimonials</Link>
        </li>
       
        
      </ul>
      <div className="logsign">
                    <button className="log" data-bs-toggle="modal" data-bs-target="#loginModal"> Sign in</button>
                    <button className="sign" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</button>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

                </form>
      
      
    </div>
  </div>
</nav>
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Login to your account</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" aria-required="true"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" aria-required="true"/>
                        </div>


                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </div>


   
    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signupModalLabel">Get an account to FitHub</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2"
                                aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2"/>
                            <p>Password must have more than 6 characters</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword3"/>
                            <p>Already have an account?<a href="#loginModal">Sign in</a></p>
                        </div>

                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Sign up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}