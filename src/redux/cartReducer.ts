import {InferActionsTypes, ProductsType} from "../types";

const ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART"
const REMOVE_ITEM_FROM_CART = "cart/REMOVE_ITEM_FROM_CART"
const BUY_ALL = "cart/BUY_ALL"

const InitialState = {
    cartItems: [] as Array<ProductsType>
}


export const cartReducer = (state = InitialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const item = {
                ...action.item,
                id: Date.now()
            }
            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.itemId)
            }

        case BUY_ALL:
            return {
                ...state,
                cartItems: []            }

        default:
            return state
    }
}

export const cartActions = {
    addItemToCart: (item:ProductsType) => ({type: ADD_ITEM_TO_CART, item} as const),
    removeItemFromCart: (itemId:number) => ({type: REMOVE_ITEM_FROM_CART, itemId} as const),
    buyAll: () => ({type: BUY_ALL} as const)
}

type InitialStateType = typeof InitialState
type ActionsTypes = InferActionsTypes<typeof cartActions>
