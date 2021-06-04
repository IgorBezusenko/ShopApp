import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {cartReducer} from "./cartReducer";
import {itemsReducer} from "./itemsReducer";

const rootReducer = combineReducers({
    itemsPage: itemsReducer,
    cartPage:cartReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));