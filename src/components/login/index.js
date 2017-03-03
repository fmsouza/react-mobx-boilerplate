import React from 'react';
import { inject, observer } from 'mobx-react';
import { FormGroup, HelpBlock } from 'react-bootstrap';
import { Input, Button } from 'common/forms/inputs';
import Text from 'common/strings';
import fields from './fields';
import './login.css';

@inject('formCreator')
@observer
export class Login extends React.Component {

    get FormConfig() {
        return {
            title: 'login',
            fields,
            onSuccess: this.onSuccess.bind(this),
            onError: this.onError.bind(this),
        };
    }

    onSuccess(form) {
        console.log("success", form.values());
    }

    onError(form) {
        console.log("error", form.errors());
    }

    renderFields(fields) {
        return Object.keys(fields)
            .map(key => (<Input key={key} {...fields[key].bind()} />));
    }

    renderErrors(errors) {
        return Object.keys(errors)
            .map(key => <p key={key}>{errors[key] || ''}</p>);
    }

    render() {
        const form = this.props.formCreator(this.FormConfig);
        const { title, inputs } = Text.login;

        return (
            <form className="login" onSubmit={form.onSubmit}>
                <h1 className="center">{title}</h1>
                
                {this.renderFields(form.fields.toJSON())}

                <FormGroup className="center" validationState={"error"}>
                    <Button
                        type="submit"
                        onClick={form.onSubmit}
                        block
                    >
                        {inputs.submitButton.label}
                    </Button>
                    <HelpBlock>{this.renderErrors(form.errors())}</HelpBlock>
                </FormGroup>
            </form>
        );
    }
}
