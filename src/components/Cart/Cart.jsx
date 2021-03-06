import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../types";

import css from "./Cart.module.css"
import {cartActions} from "../../redux/cartReducer";

export const Cart: React.FC = () => {
    const cartItems = useSelector((state: AppStateType) => state.cartPage.cartItems)
    const dispatch = useDispatch()

    const onRemoveFromCart = (itemId)=>{
        dispatch(cartActions.removeItemFromCart(itemId))
    }
    const onBurAll = ()=>{
        dispatch(cartActions.buyAll())
    }

    const itemPrice = cartItems.reduce(
        (totalEl, el) => totalEl + el.price,
        0
    );
    return (
        <div className={css.cart}>
            <div className={css.row}>
                <h1>Cart</h1>
                <div className={css.cart__price}> <button onClick={()=>{onBurAll()}}>Buy All</button> <strong>Total price: {itemPrice} $</strong></div>
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
                                <button onClick={()=>onRemoveFromCart(item.id)}>Buy</button>
                                <button onClick={()=>onRemoveFromCart(item.id)}>Delete</button>
                            </div>
                        </li>
                    )
                }) : <div className={css.list__empty}>Cart is empty</div>}
            </ul>
        </div>
    )
}