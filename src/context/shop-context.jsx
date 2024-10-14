import React, {useState} from 'react';
import { createContext } from 'react';
import {PRODUCTS} from "../products";
// this is where we are going to be able to keep track of states in our project, the status of the cart
// useful to access and modify state from any component, from the cart of shop page

export const ShopContext = createContext(null); //we create this component to keep track of data and organize logic

{/* states are objects that whill have
{
    key(product id): # items in cart already (default value is 0)
    ...

    to keep track of whats already in cart, well make a function to represent initial state
}
*/}

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    {/* start creating states here */}
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    };

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1 }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: newAmount }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount , getTotalCartAmount };


    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};