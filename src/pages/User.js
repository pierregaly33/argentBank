import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditName from "../components/EditName";
import AccountCard from "../components/AccountCard";

function User() {
    return (
        <>
            <Navbar />
            <main className="main bg-dark">
                <EditName />
                <h2 className="sr-only">Accounts</h2>
                <AccountCard title="Argent Bank Checking (x8349)" amount={2082.79} description="Available Balance" />
                <AccountCard title="Argent Bank Savings (x6712)" amount={10928.42} description="Available Balance" />
                <AccountCard title="Argent Bank Credit Card (x8349)" amount={184.3} description="Current Balance" />
            </main>
            <Footer />
        </>
    );
}

export default User;
