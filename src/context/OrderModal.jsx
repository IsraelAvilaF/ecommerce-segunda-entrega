import { useOrder } from "./OrderContext";
import React from "react";
import "./OrderModal.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function OrderModal() {

    const { isOpen, toggleCart, disminuirCantidad, aumentarCantidad, cart, total} = useOrder();

    if(!isOpen) return null;

    function pintarModalCarrito(){
        return cart.map((item)=>{
            return(
                <div className="modal-cont-container">
                    <div className="md-cont">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="md-flex">
                        <div className="md-title-cont">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                    <div className="md-total-count">
                        <p>S/.{item.price}</p>
                    </div>
                    <div className="md-bottom-cont">
                        <button>
                            <FontAwesomeIcon  onClick={() => disminuirCantidad(item)}  className={`md-count ${item.quantity === 1 ? "false" : "active"}`}    icon={faMinus} />
                            <FontAwesomeIcon  onClick={() => disminuirCantidad(item)}  className={`md-count ${item.quantity === 1 ? "active" : "false"}`}    icon={faTrash} />
                        </button>
                        <p>[{item.quantity}]</p>
                        <button>
                            <FontAwesomeIcon onClick={() => aumentarCantidad(item)} className="md-count" icon={faPlus} />
                        </button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="modal-overlay" onClick={ () => toggleCart() }>
            <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
                <div className="modal-title" >
                    <h2>CARRITO</h2>
                </div>
                {cart.lenght === 0 &&(
                    <div className="empty-cart">
                        <p>El carrito está vacio</p>
                    </div>
                )}
                {pintarModalCarrito()}
                <div className="modal-footer">
                    <p>Subtotal:</p>
                    <p>S/.{total}</p>
                <Link className="button button-success" to="/Order">Ir a la Orden</Link>
                <button className="button button-danger" onClick={ () => toggleCart() }>
                    Cerrar
                </button>
                </div>
            </div>
        </div>
    );
}
