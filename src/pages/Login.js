import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Login() {
    return (
        <>
            <Navbar />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember-me</label>
                        </div>
                        <NavLink className="sign-in-button">Sign In</NavLink>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Login;
