import {productAPI} from "../api/api";

const SET_ITEMS = "products/SET_ITEMS"
const TOGGLE_IS_FETCHING = "products/TOGGLE_IS_FETCHING"

type ItemsType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
type InitialStateType = typeof InitialState

const InitialState = {
    items: [
        // {
        //     "albumId": 1,
        //     "id": 1,
        //     "title": "accusamus beatae ad facilis cum similique qui sunt",
        //     "url": "https://via.placeholder.com/600/92c952",
        //     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        // },
        // {
        //     "albumId": 1,
        //     "id": 2,
        //     "title": "reprehenderit est deserunt velit ipsam",
        //     "url": "https://via.placeholder.com/600/771796",
        //     "thumbnailUrl": "https://via.placeholder.com/150/771796"
        // },
        // {
        //     "albumId": 1,
        //     "id": 3,
        //     "title": "officia porro iure quia iusto qui ipsa ut modi",
        //     "url": "https://via.placeholder.com/600/24f355",
        //     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        // },
        // {
        //     "albumId": 1,
        //     "id": 4,
        //     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        //     "url": "https://via.placeholder.com/600/d32776",
        //     "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        // },
    ] as Array<ItemsType> | null,
    isFetching: false
}

export const itemsReducer = (state = InitialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: [...action.items]
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