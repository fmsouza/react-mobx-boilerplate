import React from 'react';
import { inject } from 'mobx-react';
import { Nav, NavItem } from 'react-bootstrap';
import { incrementCounter, resetCounter } from '../../../actions';

@inject('text')
export class NavMenu extends React.Component {

    render() {
        const { text, pullRight } = this.props;
        return (
            <Nav pullRight={pullRight}>
                <NavItem onClick={incrementCounter}>{text.header.navmenu.link.increment}</NavItem>
                <NavItem onClick={resetCounter}>{text.header.navmenu.link.reset}</NavItem>
            </Nav>
        );
    }
}
