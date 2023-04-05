import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-gray-100 text-gray-950 min-h-screen'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;