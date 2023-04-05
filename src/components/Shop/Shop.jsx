import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { getShoppingCart, addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import ButtonPrimary from '../Button/ButtonPrimary';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`/data/data.json`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find((pd) => pd.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='max-w-screen-lg mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-6'>
            <div className='col-span-2 grid md:grid-cols-2 gap-6'>
                {
                    products.map((product) => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}
                    handleClearCart={handleClearCart}>
                    <Link to='/orders'>
                        <ButtonPrimary>Review Order</ButtonPrimary>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;