import React from "react";
import {Link} from "react-router-dom";

import css from "./Header.module.css"
import {Grid, Home, LogIn, ShoppingCart} from "react-feather";

export const Header: React.FC = () => {
    return (<div className={css.header + " " + css.row}>
        <h2>BIS!</h2>
        <ul className={css.list + " " + css.row}>
            <li><Home/><Link to={"/"}>Main</Link></li>
            <li><Grid/><Link to={"/products"}>Products</Link></li>
            <li><ShoppingCart/><Link to={"/cart"}>Cart</Link></li>
            <li><LogIn/><Link to={"/login"}>Login</Link></li>
        </ul>
    </div>)
}