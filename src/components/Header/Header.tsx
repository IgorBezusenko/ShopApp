import React from "react";
import {Link} from "react-router-dom";
import {Grid, Home, LogIn, ShoppingCart} from "react-feather";

import css from "./Header.module.css"

export const Header: React.FC = () => {
    return (<div className={css.header}>
        <h2>BIS!</h2>
        <ul className={css.list + " " + css.row}>
            <li><Link className={css.row} to={"/"}><Home className={css.icon}/><p>Main</p></Link></li>
            <li><Link className={css.row} to={"/products"}><Grid className={css.icon}/><p>Products</p></Link></li>
            <li><Link className={css.row} to={"/cart"}><ShoppingCart className={css.icon}/><p>Cart</p></Link></li>
            <li><Link className={css.row} to={"/login"}><LogIn className={css.icon}/><p>Login</p></Link></li>
        </ul>
    </div>)
}