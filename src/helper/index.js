import Env from './env';
import Unicode from './unicode';
import Converter from './converter';
import DomUtils from './domUtils';
import Numbers from './numbers';

export const env = Env;
export const unicode = Unicode;
export const converter = Converter;
export const domUtils = DomUtils;
export const numbers = Numbers;

export const deepDelete = function (ref) {
	for (let key in ref) {
		if (typeof ref[key] == 'Object' && ref[key] !== null) deepDelete(ref[key]);
		try {
			delete ref[key];
		} catch (err) {
			ref[key] = null;
		}
	}
};

export default {
	env: env,
	unicode: unicode,
	converter: converter,
	domUtils: domUtils,
	numbers: numbers
};
