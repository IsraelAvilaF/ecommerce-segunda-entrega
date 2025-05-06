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
            contador += item.quantity;
            total += item.price * item.quantity;
        })

        setCount(contador);
        setTotal(total);

    }, [cart])

    function toggleCart() {
        setIsOpen(!isOpen)
    }

    function addProduct(product) {
        const addProduct = cart.find((item) => item.id === product.id)
    
        if (!addProduct) {
            const newProduct = {
                ...product,
                quantity: 1
            }

            setCart([...cart, newProduct])

        } else {
            addProduct.quantity += 1
            setCart([...cart])
            
        }
    }

    function aumentarCantidad(product) {

        const addProduct = cart.find((item) => item.id === product.id)

        addProduct.quantity += 1
        setCart([...cart])
    }

    function disminuirCantidad(product) {

        const addProduct = cart.find((item) => item.id === product.id)

        console.log("Cantidad actual:", addProduct)

        if (addProduct.quantity <= 1) { cart.splice(0, 1) } else {
            addProduct.quantity -= 1
        }
        setCart([...cart])
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
                addProduct
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider;