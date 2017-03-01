import React from 'react';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './home.css';

@inject('counterStore')
@observer
export class Home extends React.Component {

    render() {
        const { counterStore } = this.props;
        return (
            <div className="Home">
                <div className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="Home-intro">
                    This is a boilerplate with React + MobX + Bootstrap<br/>
                    and it presents the example code for a counter application<br/>
                    just to show the architecture working.<br/><br/>

                    Counter: {counterStore.totalAmountOfClicks}
                </p>
            </div>
        );
    }
}
