import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
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
            <div className="cart-container">cart section</div>
        </div>
    );
};

export default Shop;
