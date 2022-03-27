import React, { useState, useEffect } from "react";
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

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
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
                <h2>Cart Summary</h2>
                <p>Added to cart: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
