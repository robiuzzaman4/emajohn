import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ButtonPrimary from '../Button/ButtonPrimary';


const Orders = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter((product) => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='max-w-screen-lg mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-6'>
            <div className='col-span-2 grid grid-cols-1 gap-6'>
                {
                    cart.map((product) => <ReviewItem
                        product={product}
                        key={product.id}
                        handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <div>
                <Cart cart={cart}
                    handleClearCart={handleClearCart}>
                    <Link to='/checkout'>
                        <ButtonPrimary>Proceed Checkout</ButtonPrimary>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;