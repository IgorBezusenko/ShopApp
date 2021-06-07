import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getViewItem} from "../../redux/itemsReducer";
import {Link, RouteComponentProps} from "react-router-dom";
import {Spinner} from "../Spiner/Spinner";
import {AppStateType} from "../../types";

import css from "./Items.module.css"

type MatchParams = { id: string }

export const ViewItem: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    const state = useSelector((state: AppStateType) => state.itemsPage)
    const {viewItem, isFetching} = state
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getViewItem(+props.match.params.id))
    }, [])

    if (isFetching) {
        return <Spinner/>
    }
    return (
        <>
            <Link to={"/products"}>Go Back</Link>
            <div className={css.item}>
                <div className={css.image}><img src={viewItem.image} alt="Cover"/></div>
                <div>
                    <h2>Price: {viewItem.price} $</h2>
                </div>
                <div>
                    <button>Add to cart</button>
                </div>
                <p>{viewItem.title}</p>
            </div>
        </>
    )
}
