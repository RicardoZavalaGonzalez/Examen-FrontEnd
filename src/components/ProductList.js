import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListProducts } from '../actions/products';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
    const dispatch = useDispatch();

    // Realizando la peticion para la lista de productos
    const { products } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getListProducts());
    }, [dispatch])

    return (
        <div>
            {/* componente tarjeta para cada producto */}
            <div className='row justify-content-center row-cols-md-3 g-3 animate__animated animate__fadeIn'>
                {
                    products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))
                }
            </div>
        </div>

    )
}
