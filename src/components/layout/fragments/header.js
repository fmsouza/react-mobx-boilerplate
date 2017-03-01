import React from 'react';
import { Link } from 'react-router';
import { inject } from 'mobx-react';
import { Navbar } from 'react-bootstrap';
import { NavMenu } from './navMenu';

@inject('text')
export class Header extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">{text.header.brand.title}</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <nav>
                    <NavMenu pullRight />
                </nav>
            </Navbar>
        );
    }
}
