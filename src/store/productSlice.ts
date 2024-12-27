import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./types";


const productInfo: Product = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState: productInfo,
    reducers: {
        setProduct(state: Product, action: PayloadAction<Product>) {
            state.products = [{
                productName: "sth sth sth",
                qty: 12
            }]
        }
    }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer