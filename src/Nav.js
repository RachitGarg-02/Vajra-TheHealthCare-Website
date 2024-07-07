import React from "react";
import { Link } from "react-router-dom";
import logo from "./LPimages/logo.jpeg";
const logos = [logo];

const Nav = () => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <img className="logo" src={logos[0]} alt="" />
            </form>
            <ul>
                <li>
                    <Link className="navLink1" to="/">
                        Home
                    </Link>
                    <Link className="navLink2" to="/First Aid">
                        First Aid
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
