import { types } from "../types/types"

// Reducer para obtener todos los productos
const initState = {
    products: [],
    orders: [],
    currentProduct: null,
}

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        // cargando todos los productos de la peticion
        case types.productsLoaded:
            return {
                ...state,
                products: [...action.payload]
            }
        case types.addProduct:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case types.getProduct:
            return {
                ...state, currentProduct: action.payload
            }
        case types.payProducts:
            return {
                ...state,
                orders: []
            }
        case types.resetProducts:
            return {
                ...state,
                products: []
            }
        default: return state
    }
}