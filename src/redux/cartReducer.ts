import {InferActionsTypes, ProductsType} from "../types";

const ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART"

const InitialState = {
    cartState: [
        {
            category: "men's clothing",
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            id: 1,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            price: 109.95,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        }
    ] as Array<ProductsType>
}


export const cartReducer = (state = InitialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartState: [...state.cartState, action.item]
            }

        default:
            return state
    }
}

export const cartActions = {
    addItemToCart: (item:ProductsType) => ({type: ADD_ITEM_TO_CART, item} as const)
}

type InitialStateType = typeof InitialState
type ActionsTypes = InferActionsTypes<typeof cartActions>
