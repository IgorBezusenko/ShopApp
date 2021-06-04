import React from "react";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    return (<>
        <h1> This is my shop app!</h1>
        <ul>
            <li><Link to={"/main"}>Main</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </ul>
    </>)
}