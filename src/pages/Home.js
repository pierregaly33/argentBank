import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import HomeFeature from "../components/HomeFeature";
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <BannerHome />
                <section className="features">
                    <HomeFeature
                        img={iconChat}
                        title="You are our #1 priority"
                        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <HomeFeature
                        img={iconMoney}
                        title="More savings means higher rates"
                        text="The more you save with us, the higher your interest rate will be!"
                    />
                    <HomeFeature
                        img={iconSecurity}
                        title="Security you can trust"
                        text="We use top of the line encryption to make sure your data and money is always safe"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
