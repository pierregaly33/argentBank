import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";

function Navbar() {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Logo argentBank" />
            </NavLink>
            <div>
                <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
