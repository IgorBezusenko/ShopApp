import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../types";

import css from "./Cart.module.css"

export const Cart: React.FC = () => {
    const cartItems = useSelector((state: AppStateType) => state.cartPage.cartItems)
    const itemPrice = cartItems.reduce(
        (total, el) => total + el.price,
        0
    );
    return (
        <div className={css.cart}>
            <div className={css.row}>
                <h1>Cart</h1>
                <div className={css.cart__price}><strong>Total price: {itemPrice} $</strong></div>
            </div>
            <ul className={css.list}>
                {cartItems.length ? cartItems.map((item) => {
                    return (
                        <li key={item.id} className={css.item + " " + css.row}>
                            <div className={css.item__image}><img  src={item.image} alt="Cover"/></div>
                            <div className={css.item__description}>
                                <p>{item.title}</p>
                                <p>{item.price} $</p>
                            </div>
                            <div className={css.btn_group}>
                                <button>Buy</button>
                                <button>Delete</button>
                            </div>
                        </li>
                    )
                }) : <div className={css.list__empty}>Cart is empty</div>}
            </ul>
        </div>
    )
}