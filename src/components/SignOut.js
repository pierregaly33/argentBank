import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";
import { usePostUserProfileMutation } from "../redux/UserSlice";

function SignOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postUserProfile, { data }] = usePostUserProfileMutation();

    const onLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    useEffect(() => {
        postUserProfile();
    }, [postUserProfile]);

    return (
        <div>
            <NavLink to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {data?.body?.firstName}
            </NavLink>
            <div to="/" className="main-nav-item" onClick={onLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </div>
        </div>
    );
}

export default SignOut;
