import React from "react";
import {Link} from "react-router-dom";
import {Grid, Home, LogIn, ShoppingCart} from "react-feather";

import css from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppStateType} from "../../types";

export const Header: React.FC = () => {
    const cartItems = useSelector((state: AppStateType) => state.cartPage.cartItems)

    return (<div className={css.header}>
        <Link className={css.logo} to={"/"}><h3><em>Crazy Market</em></h3></Link>
        <ul className={css.list + " " + css.row}>
            <li><Link className={css.row} to={"/"}><Home className={css.icon}/><p>Main</p></Link></li>
            <li><Link className={css.row} to={"/products"}><Grid className={css.icon}/><p>Products</p></Link></li>
            <li><Link className={css.row} to={"/cart"}>
                { cartItems.length!==0 && <div className={css.counter}>{cartItems.length}</div>}
                <ShoppingCart className={css.icon}/><p>Cart</p></Link></li>
            <li><Link className={css.row} to={"/login"}><LogIn className={css.icon}/><p>Login</p></Link></li>
        </ul>
    </div>)
}