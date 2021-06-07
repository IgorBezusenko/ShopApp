import {productAPI} from "../api/api";
import {ItemsType} from "../types";

const SET_ITEMS = "products/SET_ITEMS"
const TOGGLE_IS_FETCHING = "products/TOGGLE_IS_FETCHING"
const SET_VIEW_ITEMS = "products/SET_VIEW_ITEMS"

type InitialStateType = typeof InitialState

const InitialState = {
    items: [] as Array<ItemsType> | null,
    viewItem:{},
    isFetching: false
}

export const itemsReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: [...action.items]
            }
            case SET_VIEW_ITEMS:
            return {
                ...state,
                viewItem: {...action.viewItem}
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const setItems = (items: any) => ({
    type: SET_ITEMS,
    items
})
export const setViewItems = (viewItem: any) => ({
    type: SET_VIEW_ITEMS,
    viewItem
})
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const getItems = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const data = await productAPI.getProducts()
    dispatch(setItems(data))
    dispatch(toggleIsFetching(false))
}
export const getViewItems = (id:number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const data = await productAPI.getProductById(id)
    dispatch(setViewItems(data))
    dispatch(toggleIsFetching(false))
}