import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getViewItems} from "../../redux/itemsReducer";
import {AppStateType} from "../../redux/store";
import { Link } from "react-router-dom";
import {Spinner} from "../Spiner/Spinner";

import css from "./Items.module.css"

export const ViewItem: React.FC = (props) => {
    const state = useSelector((state:AppStateType) => state.itemsPage)
    const { viewItem, isFetching} = state
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getViewItems(props.match.params.id))
    },[])
    console.log(props.match.params.id)

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
                    <button>View</button>
                    <button>Add to cart</button>
                </div>
                <p>{viewItem.title}</p>
            </div>
        </>
    )
}
