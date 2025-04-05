import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

function OrderProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {

        let contador = 0;
        let total = 0;

        cart.forEach((item) => {
            contador += item.quantity;
            total += item.quantity * item.price
        })

        setCount(contador);
        setTotal(total)

    }, [cart])

    function toggleCart() {
        setIsOpen(!isOpen)
    }

    function addProduct(product) {
        const productInCart = cart.find((item) => item.id === product.id)
    
        if (!productInCart) {
            product.quantity = 1
            setCart([...cart, product])
        } else {
            productInCart.quantity += 1
            setCart([...cart])
            
        }
    }

    return (
        <OrderContext.Provider 
            value={{
                cart,
                toggleCart,
                isOpen,
                addProduct,
                count,
                total
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider