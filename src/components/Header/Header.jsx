import React, { useState } from 'react';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);


    return (
        <header className='bg-gray-950 text-gray-50'>
            <nav className='max-w-screen-lg mx-auto px-4 py-6 flex items-center justify-between relative z-10'>
                <h1 className='text-2xl font-semibold'>
                    ema<span className='text-yellow-500'>john</span></h1>
                <div className={`absolute left-0 right-0 bg-gray-950 md:bg-inherit md:static flex flex-col md:flex-row p-4 md:p-0 gap-4 duration-300 ${open ? 'top-20' : '-top-40'}`}>
                    <ActiveRoute to='/'>Shop</ActiveRoute>
                    <ActiveRoute to='/orders'>Orders</ActiveRoute>
                    <ActiveRoute to='/inventory'>Inventory</ActiveRoute>
                    <ActiveRoute to='/login'>Login</ActiveRoute>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute top-8 right-4 md:hidden cursor-pointer'>
                    <span>
                        {
                            open ?
                                <XMarkIcon className="h-6 w-6 text-gray-50" />
                                :
                                <Bars2Icon className="h-6 w-6 text-gray-50" />

                        }
                    </span>

                </div>
            </nav>
        </header>
    );
};

export default Header;