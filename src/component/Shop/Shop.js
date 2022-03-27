import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [alert, setAlert] = useState(0);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // function to add product to cart
    const handleAddToCart = (product) => {
        if (cart.length < 4) {
            const newCart = [...cart, product];
            setCart(newCart);
        }
        // for optional
        // else {
        //     setAlert(1);
        // }
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
        // console.log(newCart);
        setCart(newCart);
    };

    // function to delete a product from the cart
    // const deleteItem = (index) => {
    //     const newCart = [...cart];
    //     const tempCart = newCart.filter((prod) => {
    //         return prod.id !== product.id;
    //     });
    //     setCart(tempCart);
    //     // console.log(cart);
    // };

    return (
        <div className="main-section">
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={Math.random() * 100000000 + product.id}
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
                    // deleteItem={deleteItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
