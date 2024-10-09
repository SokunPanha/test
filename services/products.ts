
export const fetchProduct = async ()=>{
    const response = await fetch("https://66deb9d6de4426916ee224df.mockapi.io/products")
    const data = await response.json()
    if(!response.ok){
        throw new Error("error")
    }
    return data
}

