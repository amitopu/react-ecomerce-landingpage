import React from "react";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = (props) => {
    let total = 0;
    for (const product of props.cart) {
        total += product.price;
    }
    return (
        <div>
            <h2>Cart Summary</h2>
            <p>Added items: {props.cart.length} </p>
            {props.cart.map((product) => (
                <CartItems
                    key={Math.random() * 10000000 + product.id}
                    product={product}
                    // deleteItem={props.deleteItem}
                ></CartItems>
            ))}
            <p>Total Cost: ${total}</p>
            <button onClick={props.clearCart}>Choose Again</button>
            <button onClick={props.randomCart}>Choose One</button>
        </div>
    );
};

export default Cart;
