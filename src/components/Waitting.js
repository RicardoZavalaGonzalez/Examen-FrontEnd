import React from 'react'

export const Waitting = () => {
    return (
        <div>
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only"></span>
            </div>
            <p className='h6'>Por favor espere... </p>
        </div>
    )
}
