import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthSlice";
import { usePostUserProfileMutation } from "../redux/UserSlice";

function Navbar() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [postUserProfile] = usePostUserProfileMutation();

    const onLogout = () => {
        dispatch(logout());
        navigate("/");
    };
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
                <div>
                    <NavLink to="/profile" className="main-nav-item">
                        <i class="fa fa-user-circle"></i>
                        Tony
                    </NavLink>
                    <div to="/" className="main-nav-item" onClick={onLogout}>
                        <i class="fa fa-sign-out"></i>
                        Sign Out
                    </div>
                    <button onClick={postUserProfile}></button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
