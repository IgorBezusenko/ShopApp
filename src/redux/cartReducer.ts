import {CartType} from "../types";

const ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART"

const InitialState = {
    cartState: [] as Array<CartType>
}

type InitialStateType = typeof InitialState

export const cartReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.typeof) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartState: [state.cartState, ...action.payload]
            }

        default:
            return state
    }
}

export const cartActions = {

}