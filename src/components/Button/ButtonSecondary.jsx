import React from 'react';

const ButtonSecondary = ({ children }) => {
    return (
        <button className='w-full px-4 py-3 bg-rose-500 text-white text-xs font-medium uppercase rounded-md'>
            {children}
        </button>
    );
};

export default ButtonSecondary;