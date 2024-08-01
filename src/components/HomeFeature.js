import React from "react";

function Homefeature({ img, title, text }) {
    return (
        <>
            <h2 className="sr-only">Features</h2>
            <div className="feature-item">
                <img src={img} alt="Chat Icon" className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>{text}</p>
            </div>
        </>
    );
}

export default Homefeature;
