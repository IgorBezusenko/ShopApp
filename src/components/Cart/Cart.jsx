import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../types";

export const Cart: React.FC = () => {
    const cartState = useSelector((state: AppStateType) => state.cartPage.cartState)
    return (
        <>
            <h1>Cart</h1>
            <ul>
                {cartState && cartState.map((item) => {
                    return (
                        <li key={item.id}><img width={24} src={item.image} alt="Cover"/> <p>{item.title}</p><p>{item.price} $</p></li>
                    )
                })}
            </ul>
        </>
    )
}