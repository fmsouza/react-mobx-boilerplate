import React from 'react';
import { observer } from 'mobx-react';
import { FormGroup, HelpBlock } from 'react-bootstrap';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import { Input, Button } from './inputs';

const forms = {};

class DefaultForm extends MobxReactForm {
    plugins() { return { dvr: validatorjs }; }
}

const formCreator = ({ name, fields, onSuccess, onError }) => {
    if (forms[name]) return forms[name];

    DefaultForm.prototype.onError = onError;
    DefaultForm.prototype.onSuccess = onSuccess;
    DefaultForm.prototype.setup = () => ({ fields });

    forms[name] = new DefaultForm();
    return forms[name];
}

@observer
export default class Form extends React.Component {

    renderFields(fields) {
        return Object.keys(fields)
            .map(key => (<Input key={key} {...fields[key].bind()} />));
    }

    renderErrors(errors) {
        return Object.keys(errors)
            .map(key => <p key={key}>{errors[key] || ''}</p>);
    }

    render() {
        const config = this.props.config || {};
        const form = formCreator(config);
        return (
            <form className={config.name} onSubmit={form.onSubmit}>
                
                {this.renderFields(form.fields.toJSON())}

                <FormGroup className="center" validationState={"error"}>
                    <Button
                        type="submit"
                        onClick={form.onSubmit}
                        block
                    >
                        Submit
                    </Button>
                    <HelpBlock>{this.renderErrors(form.errors())}</HelpBlock>
                </FormGroup>
            </form>
        );
    }
}