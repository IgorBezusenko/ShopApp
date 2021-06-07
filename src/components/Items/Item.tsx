import React from "react";
import { Link } from "react-router-dom";
import {ProductsType} from "../../types";
import css from "./Items.module.css"

type PropsType = {
    item: ProductsType
}

export const Item: React.FC<PropsType> = ({item}) => {
    return (
        <>
            <div className={css.item}>
                <Link to={"/view-item/"+item.id}>
                    <div className={css.image}><img src={item.image} alt="Cover"/></div>
                </Link>
                <div>
                    <h2>Price: {item.price} $</h2>
                </div>
                <div>
                    <button>View</button>
                    <button>Add to cart</button>
                </div>
                <p>{item.title}</p>
            </div>
        </>
    )
}
