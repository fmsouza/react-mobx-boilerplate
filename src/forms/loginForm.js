import {DefaultForm} from './defaultForm';

const fields = [
    {
        type: 'text',
        name: 'username',
        label: 'Username',
        placeholder: 'loginlover776',
        rules: 'required|string'
    }, {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: '*********',
        rules: 'required|string'
    }
];

export default class LoginForm extends DefaultForm {

    setup() {
        return { fields };
    }

    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
    }

    onError(form) {
        // get all form errors
        // invalidate the form with a custom error message
        form.invalidate('There is an error on the form.');
    }

}
