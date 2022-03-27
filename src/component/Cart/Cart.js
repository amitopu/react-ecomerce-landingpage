import React from "react";
import "./Cart.css";

const Cart = (props) => {
    let total = 0;
    const cart = props.cart;
    for (const product of cart) {
        total += product.price;
    }
    return (
        <div>
            <h2>Cart Summary</h2>
            <p>Added items: {props.cart.length} </p>
            <p>Total Cost: ${total}</p>
            <button onClick={props.clearCart}>Choose Again</button>
        </div>
    );
};

export default Cart;
