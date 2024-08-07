import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePostUserLoginMutation } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";
import User from "./User";

function Login() {
    const [postUserLogin, { isLoading }] = usePostUserLoginMutation();
    const [username, setUsername] = useState("tony@stark.com");
    const [password, setPassword] = useState("password123");
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await postUserLogin({ email: username, password }).unwrap();
            if (response) {
                navigate("/profile");
            }
        } catch (error) {
            console.error("Failed to login:", error);
        }
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
                            <input type="checkbox" id="remember-me" />
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
