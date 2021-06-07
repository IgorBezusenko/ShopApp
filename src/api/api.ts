import axios from "axios";
import {ProductsType} from "../types";

export const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export const productAPI = {
    getProducts() {
        return instance
            .get<Array<ProductsType>>(`products`)
            .then((res) => {
                console.log(res.data)
                return res.data
            });
    },
    getProductById(id:number) {
        return instance
            .get<ProductsType | null>(`products/${id}`)
            .then((res) => {
                console.log(res.data)
                return res.data
            });
    },
};
