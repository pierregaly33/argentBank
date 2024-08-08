import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePostUserLoginMutation } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/AuthSlice";

function Login() {
    const [postUserLogin, { error }] = usePostUserLoginMutation();
    const [username, setUsername] = useState("tony@stark.com");
    const [password, setPassword] = useState("password123");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const rememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        postUserLogin({ email: username, password })
            .unwrap()
            .then((response) => {
                const token = response.body.token;
                dispatch(setToken({ token }));
                if (rememberMe === true) {
                    localStorage.setItem("token", token);
                }
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Navbar />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                id="username"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                id="password"
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={rememberMeChange} />
                            <label htmlFor="remember-me">Remember-me</label>
                        </div>
                        <button onClick={(event) => onSubmit(event)} className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Login;
