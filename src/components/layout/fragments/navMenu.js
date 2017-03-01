import React from 'react';
import { inject } from 'mobx-react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { incrementCounter, resetCounter } from '../../../actions';

@inject('text')
export class NavMenu extends React.Component {

    render() {
        const { text, pullRight } = this.props;
        const { increment, reset, login } = text.header.navmenu.link;
        return (
            <Nav pullRight={pullRight}>
                <NavItem onClick={incrementCounter}>{increment}</NavItem>
                <NavItem onClick={resetCounter}>{reset}</NavItem>
                <LinkContainer eventKey={1} to={{ pathname: '/login' }}>
                    <NavItem>{login}</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}
