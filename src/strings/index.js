import * as pt_BR from './pt_BR';
import * as en_US from './en_US';
import getIntl from '../intl';

export { pt_BR, en_US };

export default getIntl(navigator.language);
