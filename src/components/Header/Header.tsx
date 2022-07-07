import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className= {s.header}>
            <img src="https://www.pricepony.com.ph/blog/wp-content/uploads/2018/07/company-name.jpg" alt=""/>
        </header>
    );
}

export default Header;