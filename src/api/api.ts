import axios from "axios";

export const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export const productAPI = {
    getProducts() {
        return instance
            .get<GetProductsType>(`products`)
            .then((res) => {
                console.log(res.data)
                return res.data
            });
    },
    getProductById(id:number) {
        return instance
            .get<GetProductsType>(`products/${id}`)
            .then((res) => {
                console.log(res.data)
                return res.data
            });
    },

};

type GetProductsType = {
    id:number,
    title:string,
    price:string,
    category:string,
    description:string,
    image:string
}