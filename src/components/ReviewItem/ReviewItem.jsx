import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, img, name, price, shipping } = product;

    return (
        <div className='bg-white rounded-md p-2 flex items-center'>
            <div>
                <img className='w-20 md:w-28' src={img} alt="iphone" />
            </div>
            <div>
                <h3 className='md:text-xl font-medium'>{name}</h3>
                <p className='text-sm'>Price: ${price}</p>
                <p className='text-sm'>Shipping Charge: ${shipping}</p>
            </div>
            <button onClick={() => handleRemoveItem(id)} className='ms-auto mr-2 md:mr-8 w-8 h-8 md:h-10 md:w-10 bg-rose-200 grid place-items-center rounded-full'>
                <TrashIcon className='w-5 h-5 md:w-6 md:h-6 text-rose-500'></TrashIcon>
            </button>
        </div>
    );
};

export default ReviewItem;