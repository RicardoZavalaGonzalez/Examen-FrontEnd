import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { getListProducts, resetProducts, searchProduct } from '../actions/products';
import { useForm } from '../hooks/useForm';

export const Navbar = () => {

    const dispatch = useDispatch();
    
    // hook del formulario
    const [formValues, handleInputChange, reset] = useForm({
        sku: '',
        name: '',
        quantity: '',
        price: ''
    });
    const { sku, name, quantity, price } = formValues;
    
    // lista de productos
    const { orders } = useSelector(state => state.products);
    
    // ir al carrito de compras
    const navigate = useNavigate();
    const handleShopping = () => {
        navigate('/shoppings');
    }
    
    // Busque de productos por sku, nombre, precio y cantidad
    const handleSearch = (e) => {
        e.preventDefault();
        let valid = true;
        valid = validInput(sku);
        valid = validInput(name);
        valid = validInput(quantity);
        valid = validInput(price);
        if (quantity < 0) {
            return Swal.fire('Buscar un producto', 'El precio debe ser mayor a $0', 'error');
        }
        if (price < 0) {
            return Swal.fire('Buscar un producto', 'El precio debe ser mayor a $0', 'error');
        }
        if (valid) {
            dispatch(searchProduct(formValues));
            navigate('/');
            return;
        }
        return Swal.fire('Buscar un producto', 'Recuerda llenar todos los campos del formulario', 'error');
    }

    const validInput = (input) => {
        return input.trim().length === 0 ? false : true;
    }

    // Reiniciar la busqueda y mostrar todos los productos
    const handleReset = () => {
        reset();
        dispatch(resetProducts());
        dispatch(getListProducts());
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">

            <Link className="navbar-brand h1 mx-2" to="/">
                Ir a la tienda
            </Link>
            <form onSubmit={handleSearch} className='d-flex'>

                <input className='form-control me-2' type="text" placeholder='Nombre' name='name'
                    value={name} onChange={handleInputChange} />

                <input className='form-control me-2' type="text" placeholder='Sku' name='sku'
                    value={sku} onChange={handleInputChange} />

                <input className='form-control me-2' type="number" placeholder='Cantidad' name='quantity'
                    value={quantity} onChange={handleInputChange} />

                <input className='form-control me-2' type="number" step='any' placeholder='Precio' name='price'
                    value={price} onChange={handleInputChange} />

                <button className="btn btn-outline-warning mx-1" type="submit">Buscar</button>
                <button className="btn btn-outline-warning mx-1" type="button" onClick={handleReset}>
                    <i className="fas fa-undo-alt"></i>
                </button>
            </form>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end mx-3">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'></span>
                    <button className="nav-item nav-link btn text-warning" onClick={handleShopping}>
                        Ver carrito <i className="fas fa-shopping-cart"></i> {orders.length}
                    </button>
                </ul>
            </div>
        </nav>
    )
}