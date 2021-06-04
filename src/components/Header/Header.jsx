import React from "react";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    return (<>
        <h1>BIS!</h1>
        <ul>
            <li><Link to={"/"}>Main</Link></li>
            <li><Link to={"/items"}>Items</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </ul>
    </>)
}