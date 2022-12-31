import { useContext, createContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])


    const addToCart = (product) => {

        const idx = cartList.findIndex(prod => prod.id === product.id)

        if (idx !== -1) {
            cartList[idx].cant += product.cant
            setCartList([...cartList])
        } else {
            setCartList([...cartList, product])
        }

    }

    const totalPrice = () => cartList.reduce((counter, product) => counter += (product.cant * product.price), 0)

    const totalQuantity = () => cartList.reduce((counter, product) => counter += product.cant, 0)

    const clearCart = () => {
        setCartList([])
    }

    const clearItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            totalPrice,
            totalQuantity,
            clearCart,
            clearItem
        }}>
            {children}
        </CartContext.Provider>
    )
}


