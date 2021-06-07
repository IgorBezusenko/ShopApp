import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {rootReducer} from "./redux/store";

export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U :never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


export type ProductsType = {
    id:number,
    title:string,
    price:string,
    category:string,
    description:string,
    image:string
}

export type CartType = {
    id:number,
    title:string,
    price:string,
    image:string
}