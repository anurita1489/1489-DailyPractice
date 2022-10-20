import React from 'react'
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    let history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" style={{color:"white", fontFamily: "'Times New Roman', serif"}}>
                <img src={logo} alt="user" width="120" height="60"/>
            </NavLink>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/" style={{color:'grey'}}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard" style={{color:'grey'}}>Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus" style={{color:'grey'}}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contactus" style={{color:'grey'}}>Contact</NavLink>
                    </li>
                </ul>
                <span className="navbar-text">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-outline-primary me-md-2" type="button" onClick={()=> {history.push("/login")}}>Login</button>
                        <button class="btn btn-secondary" type="button" onClick={()=> {history.push("/signup")}}>Sign Up</button>
                    </div>
                </span>
            </div>
        </div>
    </nav>
  );
};

export default Navbar