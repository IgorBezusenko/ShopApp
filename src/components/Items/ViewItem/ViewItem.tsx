import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getViewItem} from "../../../redux/itemsReducer";
import {Link, RouteComponentProps} from "react-router-dom";
import {Spinner} from "../../Spiner/Spinner";
import {AppStateType} from "../../../types";

import css from "./ViewItem.module.css"
import {cartActions} from "../../../redux/cartReducer";

type MatchParams = { id: string }

export const ViewItem: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    const state = useSelector((state: AppStateType) => state.itemsPage)
    const {viewItem, isFetching} = state
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getViewItem(+props.match.params.id))
    }, [])

    const onAddToCart = (item: any) => {
        console.log(item)
        dispatch(cartActions.addItemToCart(item))
    }
    if (isFetching) {
        return <Spinner/>
    }
    return (
        <div className={css.container}>
            <Link to={"/products"}>Go Back</Link>
            {
                viewItem ?
                    <div className={css.item}>
                        <div className={css.image}><img src={viewItem.image} alt="Cover"/></div>
                        <div className={css.description}>
                            <h3>{viewItem.title}</h3>
                            <p>{viewItem.description}</p>
                            <h2>Price: {viewItem.price} $</h2>
                            <button onClick={() => onAddToCart(viewItem)}>Add to cart</button>
                            <Link to={"/products"}>Go Back</Link>
                        </div>
                    </div>
                    : <div>Product by id:{props.match.params.id} dose not exist!</div>
            }
        </div>
    )
}
