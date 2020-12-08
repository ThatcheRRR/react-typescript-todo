import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button>
                    <NavLink to="/">Todos</NavLink>
                </Button>
                <Button>
                    <NavLink to="/about">About</NavLink>
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;
