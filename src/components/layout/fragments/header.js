import React from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import { NavMenu } from './navMenu';

export const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">React Application</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <nav>
            <NavMenu pullRight />
        </nav>
    </Navbar>
);
