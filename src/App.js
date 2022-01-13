import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
    /* llamando el store con los reducer para realizar acciones
    correspondientes (buscar, agregar, pagar productos), rutas y componente principal */
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}
