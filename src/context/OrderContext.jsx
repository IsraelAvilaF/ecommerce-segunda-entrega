import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext)

function OrderProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false) // estado para abrir y cerrar el carrito
    const [count, setCount] = useState(0) // cantidad de productos en el carrito
    const [total, setTotal] = useState(0) // total de la compra
    const [cart, setCart] = useState([]) // guardar los productos 

    useEffect(() => {
        const cartLocalStorage = JSON.parse(localStorage.getItem("cart"))
        if (cartLocalStorage) {
            setCart(cartLocalStorage)
        }
    }, [])

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            localStorage.removeItem("cart")
        }

    }, [cart]);

    function vaciarCarrito() {
        setCart([])
        localStorage.removeItem("cart")
    }

    useEffect(() => {

        let contador = 0;
        let total = 0;

        cart.forEach((item) => {
            const precio = parseFloat(item.price);
            contador += item.quantity;
            total += isNaN(precio) ? 0 : precio * item.quantity;
        })

        setCount(contador);
        setTotal(total);

    }, [cart])

    function toggleCart() {
        setIsOpen(!isOpen)
    }

    function addCartProduct(product) {
        const existingProduct = cart.find((item) => item.id === product.id);
    
        if (!existingProduct) {
            const newProduct = { ...product, quantity: 1 };
            setCart([...cart, newProduct]);
        } else {
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedCart);
        }
    }

    function aumentarCantidad(product) {
        const updatedCart = cart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCart(updatedCart);
    }

    function disminuirCantidad(product) {
        const updatedCart = cart
            .map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);
    
        setCart(updatedCart);
    }

    async function submitirCarrito() {
        try {
            const response = await axios.get(`${URL}/orders`);
            console.log(response.data);
        } catch (error) {
            console.error("Error al enviar el carrito:", error);
            alert("Ocurrió un error al obtener la orden");
        }
    }


    return (
        <OrderContext.Provider 
            value={{
                cart,
                count,
                total,
                isOpen,
                disminuirCantidad,
                aumentarCantidad,
                toggleCart,
                vaciarCarrito,
                submitirCarrito,
                addCartProduct
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider;