import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './home.css';

export class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <div className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="Home-intro">
                    To get started, edit<br/>
                    <code>src/components/home/index.js</code><br/>
                    and save to reload.
                </p>
            </div>
        );
    }
}
