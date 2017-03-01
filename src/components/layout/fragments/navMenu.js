import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const NavMenu = ({ pullRight }) => (
    <Nav pullRight={pullRight}>
        <LinkContainer eventKey={1} to={{ pathname: '/foo' }}>
            <NavItem>Foo</NavItem>
        </LinkContainer>
        <LinkContainer eventKey={2} to={{ pathname: '/bar' }}>
            <NavItem>Bar</NavItem>
        </LinkContainer>
    </Nav>
);
