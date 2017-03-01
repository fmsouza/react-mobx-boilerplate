import { pt_BR, en_US } from './strings';

export default locale => {
    switch (locale) {
        
        default:
        case 'en-US':
        case 'en-EN':
            return en_US;

        case 'pt-BR':
        case 'pt-PT':
            return pt_BR;
    }
};
