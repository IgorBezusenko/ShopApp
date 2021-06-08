import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../../redux/itemsReducer";
import {Spinner} from "../Spiner/Spinner";
import {Item} from "./Item";

import css from "./Items.module.css"
import {AppStateType} from "../../types";

export const Items: React.FC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: AppStateType) => state.itemsPage)

    const {items, isFetching} = state

    useEffect(() => {
        dispatch(getItems())
    },[])

    if (isFetching) {
        return <Spinner/>
    }

    return (
        <div className={css.container}>
            <div><h1>Products</h1></div>
            <div className={css.list}>
                {
                    items && items.map((item) => {
                        return (
                            <Item key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
