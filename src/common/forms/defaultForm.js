import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

export class DefaultForm extends MobxReactForm {

    plugins() {
        return { dvr: validatorjs };
    }
}
