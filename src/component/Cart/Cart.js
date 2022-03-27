import React from "react";
import "./Cart.css";

const Cart = (props) => {
    return (
        <div>
            <h2>Cart Summary</h2>
            <p>Added to cart:{props.cart.length} </p>
        </div>
    );
};

export default Cart;
