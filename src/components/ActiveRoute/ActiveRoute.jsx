import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                ? "text-yellow-500"
                : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;