import React from 'react';

const ButtonPrimary = ({ children }) => {
    return (
        <button className='w-full px-4 py-3 bg-yellow-500 text-white text-xs font-medium uppercase rounded-md'>
            {children}
        </button>
    );
};

export default ButtonPrimary;