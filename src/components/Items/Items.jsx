import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getItems} from "../../redux/itemsReducer";
import {Spinner} from "../Spiner/Spinner";

export const Items: React.FC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: AppStateType) => state.itemsPage)

    const {items, isFetching} = state

    useEffect(() => {
        dispatch(getItems())
    }, [])

    if (isFetching) {
        return <Spinner/>
    }

    return (
        <>
            <h1>Items</h1>
            {
                items && items.map((p, idx) => {
                    return (
                        <div key={idx}>
                            <img src={p.thumbnailUrl} alt="Cover"/>
                            <h3>{p.title}</h3>
                            <button>Add to cart</button>
                        </div>

                    )
                })
            }
        </>
    )
}