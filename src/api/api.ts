import axios from "axios";

export const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const productAPI = {
    getProducts() {
        return instance
            .get<GetProductsType>(`photos?_limit=5`)
            .then((res) => {
                console.log(res.data)
                return res.data
            });
    },

};

type GetProductsType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}