import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCar, getProduct } from '../actions/products';
import { Waitting } from './Waitting';

export const ProductScreen = () => {

    // informacion del producto actual
    const { currentProduct } = useSelector(state => state.products)

    /* Obteniendo el id del producto en la url del navegador
    y los datos de la api */
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id])

    // pagina de espera mientras carga la informacion
    if (!currentProduct) {
        return (<Waitting />)
    }

    const { sku, name, quantity, price, imageUrl } = currentProduct;

    const handleAddToCar = () => {
        dispatch(addToCar(currentProduct));
    }

    return (
        <div className='row justify-content-center'>
            <div className="col-10">
                <div className="card">
                    <div className="row">
                        <div className="col-sm-6 mx-5">
                            <p className='h1 info'>$ {price}</p>
                            <img className='card-img-top img' src={imageUrl} alt="name" />
                            <p className="h4">{name}</p>
                            <p className="h6">Sku: {sku}</p>
                            <p className="h6">Quantity: {quantity}</p>
                        </div>
                        <div className="col-sm-6 my-3 mx-2">
                            <button className='btn btn-primary' onClick={handleAddToCar}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
