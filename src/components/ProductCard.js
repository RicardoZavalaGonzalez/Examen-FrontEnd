import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCar } from '../actions/products';

export const ProductCard = (product) => {

    const { id, sku, name, quantity, price, imageUrl, currency } = product;

    const dispatch = useDispatch();
    
    // Agregando productos al carrito de compras
    const handleAddToCar = () => {
        dispatch(addToCar(product));
    }

    return (
        <div className="card mx-3 my-3 small">
            <img className='card-img-top' src={imageUrl} alt="name" />

            <p className='h5 info'>$ {price} {currency}</p>

            <div className="card-body">

                <h5 className="card-title">{name}</h5>
                <p className="h6">Sku: {sku}</p>
                <p className="h6">Quantity: {quantity}</p>

                <div className="row">

                    <div className="col">
                        <Link to={`/products/${id}`} className='h6'>
                            Ver más...
                        </Link>
                    </div>

                    <div className="col">
                        <button className='btn btn-primary' onClick={handleAddToCar}>
                            Agregar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
