import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { incrementCounter, resetCounter } from '../../../actions';

export const NavMenu = ({ pullRight }) => (
    <Nav pullRight={pullRight}>
        <NavItem onClick={incrementCounter}>Increment</NavItem>
        <NavItem onClick={resetCounter}>Reset</NavItem>
    </Nav>
);
