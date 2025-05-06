import { useOrder } from '../../context/OrderContext';
import './Order.css';
import React from 'react'

export default function Order() {

    const { cart , total } = useOrder();

    return (
        <>
            <h1 className="table-title">
                ORDEN
                <hr />
            </h1>
            <div className="tablas">
                <table border="1" className="admin-products">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.id}>
                            <td data-label="ID">{product.id}</td>
                            <td data-label="Título">{product.title}</td>
                            <td data-label="Precio">S/.{product.price}</td>
                            <td data-label="Cantidad">{product.quantity}</td>
                            <td data-label="Total">S/.{product.price * product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>TOTAL S/.{total}</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="order-buttons">
                    <button className="button">Finalizar compra</button>
                    <button className="button">Vaciar carrito</button>
                </div>
            </div>
        </>
    );
}
