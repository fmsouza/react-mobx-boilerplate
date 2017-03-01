import React from 'react';
import { inject } from 'mobx-react';
import './login.css';
import { Input, Button } from './inputs';

@inject('text')
export class Login extends React.Component {

    render() {
        const { title, inputs } = this.props.text.login;
        return (
            <form className="login">
                <h1 className="center">{title}</h1>
                <Input
                    type="text"
                    name="username"
                    label={inputs.username.label}
                    placeholder={inputs.username.placeholder}
                />
                <Input
                    type="password"
                    name="password"
                    label={inputs.password.label}
                    placeholder={inputs.password.placeholder}
                />
                <Button type="submit" block>
                    {inputs.submitButton.label}
                </Button>
            </form>
        );
    }
}
