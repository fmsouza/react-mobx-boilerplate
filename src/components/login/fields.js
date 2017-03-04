export default [
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
    }, {
        type: 'submit',
        name: 'sendButton',
        label: 'Submit'
    }
];
