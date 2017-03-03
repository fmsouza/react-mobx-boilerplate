import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const forms = {};

class DefaultForm extends MobxReactForm {

    plugins() {
        return { dvr: validatorjs };
    }
}

export function formCreator({ name, fields, onSuccess, onError }) {
    if (forms[name]) return forms[name];

    DefaultForm.prototype.onError = onError;
    DefaultForm.prototype.onSuccess = onSuccess;
    DefaultForm.prototype.setup = () => ({ fields });

    forms[name] = new DefaultForm();
    return forms[name];
}