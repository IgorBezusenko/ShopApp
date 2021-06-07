import {productAPI} from "../api/api";
import {BaseThunkType, InferActionsTypes, ProductsType} from "../types";

const SET_ITEMS = "products/SET_ITEMS"
const TOGGLE_IS_FETCHING = "products/TOGGLE_IS_FETCHING"
const SET_VIEW_ITEMS = "products/SET_VIEW_ITEMS"


const InitialState = {
    items: [] as Array<ProductsType> | null,
    viewItem: {} as ProductsType,
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


export const itemsActions = {
    setItems: (items: any) => ({
        type: SET_ITEMS,
        items
    }),
    setViewItems: (viewItem: any) => ({
        type: SET_VIEW_ITEMS,
        viewItem
    }),
    toggleIsFetching: (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    })
}

export const getItems = (): ThunkType => async (dispatch) => {
    dispatch(itemsActions.toggleIsFetching(true))
    const data = await productAPI.getProducts()
    dispatch(itemsActions.setItems(data))
    dispatch(itemsActions.toggleIsFetching(false))
}

export const getViewItem = (id: number): ThunkType => async (dispatch: any) => {
    dispatch(itemsActions.toggleIsFetching(true))
    const data = await productAPI.getProductById(id)
    dispatch(itemsActions.setViewItems(data))
    dispatch(itemsActions.toggleIsFetching(false))
}

type InitialStateType = typeof InitialState
type ActionsTypes = InferActionsTypes<typeof itemsActions>
type ThunkType = BaseThunkType<ActionsTypes>