import React from 'react';
import ButtonSecondary from '../Button/ButtonSecondary';

const Cart = ({ cart, handleClearCart, children }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    const grandTotalNumber = parseFloat(grandTotal.toFixed(2));
    return (
        <div className='bg-white rounded-md p-4 sticky top-0 flex flex-col gap-4'>
            <div className='grid gap-2'>
                <h1 className='text-2xl text-center font-semibold'>Cart</h1>
                <h3 className='font-medium'>Selected Items: {quantity} </h3>
                <h3 className='font-medium'>Total Price: ${totalPrice} </h3>
                <h3 className='font-medium'>Total Shipping Charge: ${totalShipping} </h3>
                <h3 className='font-medium'>Tax: ${tax} </h3>
                <h2 className='font-medium text-xl'>Grand Total: ${grandTotalNumber}</h2>
            </div>

            <div className='grid gap-2'>
                <div onClick={handleClearCart}>
                    <ButtonSecondary>Clear Cart</ButtonSecondary>
                </div>

                {children}
            </div>

        </div>
    );
};

export default Cart;