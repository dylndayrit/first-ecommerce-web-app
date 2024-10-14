import React, {useContext} from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>;
                    }
                })}

            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p> SUBTOTAL: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}> continue shopping</button>
                    <button> checkout</button>
                </div>
            ) : (
                <h1>its giving nothing...</h1>
            )}
        </div>
    );
};
