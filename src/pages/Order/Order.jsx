import { useOrder } from '../../context/OrderContext'
import '../AdminProduct/AdminProduct.css';
import React from 'react'

export default function Order() {

    const { cart , total } = useOrder()

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
                            {
                                cart.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price * product.quantity}</td>
                                    </tr>
                                ))
                                
                            }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">TOTAL S/.{total}</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="order-buttons">
                    <button className="button">Finalizar compra</button>
                    <button className="button">Vaciar carrito</button>
                </div>
            </div>
        </>
    )
}
