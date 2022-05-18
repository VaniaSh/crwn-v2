import {createContext, useEffect, useState} from "react";

const additionalFuncAddToCart = (productToAdd, cartItems) => {
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if (existingCartItems) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
        } : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const additionalFuncRemoveFromCart = (itemToRemove, cartItems) => {
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === itemToRemove.id)

    if (existingCartItems.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    return cartItems.map((cartItem) => cartItem.id === itemToRemove.id ? {
        ...cartItem,
        quantity: cartItem.quantity - 1
    } : cartItem)
}

const additionalFuncClearFromCart = (itemToClear, cartItems) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemsToCart: () => {
    },
    removeItemFromCart: () => {
    },
    clearItemFromCart: () => {
    },
    cartCount: 0,
    cartTotal: 0,

})

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)


    useEffect(() => {
        const count = cartItems.reduce((total, cartItem) =>
                total + cartItem.quantity
            , 0)
        setCartCount(count)
    }, [cartItems])


    useEffect(() => {
        const cartTotal = cartItems.reduce((total, cartItem) =>
                total + cartItem.quantity * cartItem.price
            , 0)
        setCartTotal(cartTotal)
    }, [cartItems])

    const addItemsToCart = (product) => setCartItems(additionalFuncAddToCart(product, cartItems))
    const removeItemFromCart = (itemToRemove) => setCartItems(additionalFuncRemoveFromCart(itemToRemove, cartItems))
    const clearItemFromCart = (itemToClear) => setCartItems(additionalFuncClearFromCart(itemToClear, cartItems))

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemsToCart,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal,
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}