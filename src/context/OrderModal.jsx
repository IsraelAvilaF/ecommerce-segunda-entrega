import { useOrder } from "./OrderContext";
import './OrderContext'
import Order from "../pages/Order/Order";
import "./OrderModal.css";
import React from "react";

export default function OrderModal() {

    const { isOpen, toggleCart } = useOrder();

    if(!isOpen) return;

    return (
        <div className="modal-overlay" onClick={ () => toggleCart() }>
        <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
            <div className="modal-body">
            <Order />
            </div>
            <div className="modal-footer">
            <button className="button button-danger" onClick={ () => toggleCart() }>
                Cerrar
            </button>
            </div>
        </div>
        </div>
    );
}
