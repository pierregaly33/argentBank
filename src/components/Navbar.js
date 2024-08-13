import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";

function Navbar() {
    const isAuth = useSelector((state) => state.auth.isAuth);

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Logo argentBank" />
            </NavLink>
            {isAuth === false ? (
                <div>
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            ) : (
                <SignOut />
            )}
        </nav>
    );
}

export default Navbar;
