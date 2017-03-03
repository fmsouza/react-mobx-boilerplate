import React from 'react';
import { inject, observer } from 'mobx-react';
import { FormGroup, HelpBlock } from 'react-bootstrap';
import Text from 'strings';
import './login.css';
import { Input, Button } from 'forms/inputs';

@inject('loginForm')
@observer
export class Login extends React.Component {

    renderErrors(errors) {
        return Object
            .keys(errors)
            .map(key => <p key={key}>{errors[key] || ''}</p>);
    }

    render() {
        const { loginForm } = this.props;
        const { title, inputs } = Text.login;

        return (
            <form className="login" onSubmit={loginForm.onSubmit}>
                <h1 className="center">{title}</h1>
                <Input {...loginForm.$('username').bind()} />
                <Input {...loginForm.$('password').bind()} />

                <FormGroup className="center" validationState={"error"}>
                    <Button
                        type="submit"
                        onClick={loginForm.onSubmit}
                        block
                    >
                        {inputs.submitButton.label}
                    </Button>
                    <HelpBlock>{this.renderErrors(loginForm.errors())}</HelpBlock>
                </FormGroup>
            </form>
        );
    }
}
