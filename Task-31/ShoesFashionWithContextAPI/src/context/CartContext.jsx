import { createContext, useContext } from "react";
import React from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);
    const [paymentMethod, setPaymentMethod] = React.useState("");
    const [cardNumber, setCardNumber] = React.useState("");
    const [expiryDate, setExpiryDate] = React.useState("");
    const [cvv, setCvv] = React.useState("");


    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );


    const addToCart = (shoe) => {
        const exist = cart.find(item => item.id === shoe.id);

        if (exist) {
            setCart(cart.map(item =>
                item.id === shoe.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...shoe, quantity: 1 }]);
        }
    };

    const increaseQyt = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    }
    const decreaseQyt = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, total, increaseQyt, decreaseQyt, paymentMethod, setPaymentMethod,cardNumber,expiryDate,cvv,setCardNumber,setExpiryDate,setCvv }}>
            {children}

        </CartContext.Provider>
    )
}