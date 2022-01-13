import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { Order } from '../components/Order';
import { ProductList } from '../components/ProductList';
import { ProductScreen } from '../components/ProductScreen';

export const AppRouter = () => {
    return (
        <div>
            {/* Navbar de busqueda y carrito de compras */}
            <Navbar />
            {/* configuracion de rutas  */}
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductScreen />} />
                <Route path="/shoppings" element={<Order />} />
            </Routes>
        </div>
    )
}
