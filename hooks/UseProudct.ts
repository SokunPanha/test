import { useQuery } from "@tanstack/react-query"
import { fetchProduct } from "../services/products"


export const UseProduct = ()=>{
    const {data, isLoading, isSuccess, status}= useQuery({
        queryKey: ["products"],
        queryFn: fetchProduct
    })

    return {
        data, isLoading, isSuccess, status
    }
}