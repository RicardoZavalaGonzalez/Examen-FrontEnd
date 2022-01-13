// variables de entorno con la API y el TOKEN
const api = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

// Metodo para realizar la peticion de productos con fetch
export const fetchWithToken = (endpoint, data, method = 'GET') => {
    const url = `${api}/${endpoint}`;
    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })
    }
}