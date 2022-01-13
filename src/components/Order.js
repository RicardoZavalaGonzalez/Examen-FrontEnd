import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { payProducts } from '../actions/products';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export const Order = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.products);

    let total = 0;
    orders.forEach(({ price }) => {
        total += parseFloat(price);
    });

    // Realizando el pago del pedido
    const handlePay = () => {
        dispatch(payProducts())
        total = 0;
        Swal.fire('Pago del pedido', 'Se ha realizado el pago de su pedido', 'success');
    }

    return (
        <div className='row justify-content-center'>
            <div className="card col-11 mb-5">
                <table className="table mx-3">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Sku</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(({ id, name, sku, price, imageUrl }, index) => (
                                <tr key={index}>
                                    <td>
                                        <img className='card-img-top img-small' src={imageUrl} alt="" />
                                    </td>
                                    <td>{name}</td>
                                    <td>{sku}</td>
                                    <td>1</td>
                                    <td>{price}</td>
                                    <td>
                                        <Link to={`/products/${id}`} className='btn btn-primary'>
                                            Ver más...
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <h5 className='text-end mb-3'>Total a pagar:$ {total} MXN</h5>
                {
                    total > 0 && (
                        <div className="row justify-content-end mb-5">
                            <div className="col-12 col-sm-5 d-flex justify-content-end">
                                <button className='btn btn-primary' onClick={handlePay}>Realizar compra</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
