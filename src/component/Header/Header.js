import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="logo-text">Drone Shop</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
