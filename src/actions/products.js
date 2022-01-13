import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const getListProducts = () => {
    return async (dispatch) => {
        try {
            // obteniendo la lista de productos y enviandolo al productReducer
            /* La ruta orders funciona bien en postman pero
            en este caso arroja el error de los CORS, intenté instalar extensiones 
            de Chrome, subirlo a heroku intentar con otros navegadores pero eel problema
            persistia */
            const resp = await fetchWithToken('products');
            const data = await resp.json();
            dispatch(productsLoaded(data.products));
        } catch (error) {
            console.log(error);
        }
    }
}
// cambio del reducer para colocar los productos
const productsLoaded = (products) => ({
    type: types.productsLoaded,
    payload: products
})
// Agregando productos al carrito u orders
export const addToCar = (product) => ({
    type: types.addProduct,
    payload: product
});

export const getProduct = (id) => {
    return async (dispatch) => {
        try {
            // Obteniendo un producto por su id
            const resp = await fetchWithToken(`products/${id}`);
            const { product } = await resp.json();
            dispatch(productLoaded(product));
        } catch (error) {
            console.log(error);
        }
    }
}
// Cambio del reducer para colocar el producto actual
const productLoaded = (product) => ({
    type: types.getProduct,
    payload: product
})


// Buscando productos por nombre, sku, cantidad y precio
export const searchProduct = (values) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken('products');
            const data = await resp.json();
            let products = [];

            data.products.forEach(product => {

                let name = (product.name).toLowerCase().indexOf((values.name).toLowerCase());
                let quantity = parseFloat(product.quantity) >= parseFloat(values.quantity) ? true : false;
                let price = parseFloat(product.price) >= parseFloat(values.price) ? true : false;
                if (product.sku) {
                    let sku = (product.sku).toLowerCase().indexOf((values.sku).toLowerCase());
                    if (sku >= 0 && name >= 0 && quantity && price) {
                        products.push(product);
                    }
                }
                if (name >= 0 && quantity && price) {
                    products.push(product);
                }
            });
            console.log(products);
            dispatch(productsLoaded(products));
        } catch (error) {
            console.log(error);
        }
    }
}

// reinicia el contador de productos en la order de pedido
export const payProducts = () => ({ type: types.payProducts })

// renicia la lista de productos
export const resetProducts = () => ({ type: types.resetProducts })