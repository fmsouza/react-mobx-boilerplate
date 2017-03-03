import React from 'react';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './home.css';
import Text from 'strings';

@inject('counterStore')
@observer
export class Home extends React.Component {

    render() {
        const { counterStore } = this.props;
        return (
            <div className="Home">
                <div className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo" />
                    <h2>{Text.home.title}</h2>
                </div>
                <p className="Home-intro">
                    {Text.home.intro(counterStore.totalAmountOfClicks)}
                </p>
            </div>
        );
    }
}
