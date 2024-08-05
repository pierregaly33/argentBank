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
                <AccountCard title="test" amount={123456.78} description="coucou" />
            </main>
            <Footer />
        </>
    );
}

export default User;
