import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink to="/">Todos</NavLink>
                <NavLink to="/about">About</NavLink>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;
