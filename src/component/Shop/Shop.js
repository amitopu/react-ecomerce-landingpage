import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // function to add product to cart
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    // function to clear the cart
    const clearCart = () => {
        setCart([]);
    };

    // function to choose a random product form the cart and update the cart with it
    const randomCart = () => {
        const newCart = [];
        if (cart.length) {
            newCart.push(cart[Math.floor(Math.random() * cart.length)]);
        }
        console.log(newCart);
        setCart(newCart);
    };

    return (
        <div className="main-section">
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        cartClickHandler={handleAddToCart}
                    ></Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                    randomCart={randomCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
