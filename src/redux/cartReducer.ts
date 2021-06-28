import {InferActionsTypes, ProductsType} from "../types";

const ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART"
const REMOVE_ITEM_FROM_CART = "cart/REMOVE_ITEM_FROM_CART"
const BUY_ALL = "cart/BUY_ALL"

const InitialState = {
    cartItems: [] as Array<ProductsType>,
    absoluteCount: 0

}

export const cartReducer = (state = InitialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const itemIndex = state.cartItems.findIndex(({id}) => id === action.id)

            const item = state.cartItems[itemIndex]
            console.log("item", {...item})
            if (itemIndex !== -1) {
                console.log("itemIndex", itemIndex)

                return {
                    ...state,
                    cartItems: [...state.cartItems.slice(0, itemIndex), {
                        ...item,
                        count: ++item.count
                    },
                        ...state.cartItems.slice(itemIndex + 1),],

                }
            }
            return {
                ...state,
                cartItems: [...state.cartItems, {
                    ...action.item,
                    count: 1
                }]
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
    addItemToCart: (item: ProductsType, id: any) => ({type: ADD_ITEM_TO_CART, item, id} as const),
    removeItemFromCart: (itemId: number) => ({type: REMOVE_ITEM_FROM_CART, itemId} as const),
    buyAll: () => ({type: BUY_ALL} as const)
}

type InitialStateType = typeof InitialState
type ActionsTypes = InferActionsTypes<typeof cartActions>
