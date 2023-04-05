import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, storage, color, price } = product;
    return (
        <div className='bg-white rounded-md p-4 relative'>
            <div>
                <img className='w-2/3 mx-auto' src={img} alt="iphone" />
            </div>
            <div className='grid gap-2'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <h3 className='font-medium'>Storage: {storage}</h3>
                <h3 className='font-medium'>Color: {color}</h3>
                <span className='bg-gray-950 text-gray-50 px-2 py-1 rounded-md font-medium absolute top-4 right-4'>${price}</span>

                <div onClick={() => handleAddToCart(product)}>
                    <ButtonPrimary>Add to cart</ButtonPrimary>
                </div>
            </div>

        </div>
    );
};

export default Product;