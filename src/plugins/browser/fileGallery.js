import EditorInjector from '../../editorInjector';
import { Browser } from '../../modules';

const FileGallery = function (editor, pluginOptions) {
	// plugin bisic properties
	EditorInjector.call(this, editor);
	this.title = this.lang.fileGallery;
	this.icon = 'file_gallery';

	// modules
	const thumbnail = pluginOptions.thumbnail || this.icons.file_thumbnail;
	this.browser = new Browser(this, {
		title: this.lang.fileGallery,
		url: pluginOptions.url,
		headers: pluginOptions.headers,
		selectorHandler: SetItem.bind(this),
		columnSize: 4,
		className: 'se-file-gallery',
		thumbnail: typeof pluginOptions.thumbnail === 'function' ? pluginOptions.thumbnail : () => thumbnail
	});
};

FileGallery.key = 'fileGallery';
FileGallery.type = 'browser';
FileGallery.className = '';
FileGallery.prototype = {
	/**
	 * @description Open file gallery
	 */
	open(inputTarget) {
		this.inputTarget = inputTarget;
		this.browser.open();
	},

	/**
	 * @description Close file gallery
	 */
	close() {
		this.inputTarget = null;
		this.browser.close();
	},

	constructor: FileGallery
};

function SetItem(target) {
	if (this.inputTarget) {
		this.inputTarget(target);
	} else {
		const file = { name: target.getAttribute('data-value'), size: 0 };
		this.plugins.fileUpload.create(target.getAttribute('data-command'), file, true);
	}
}

export default FileGallery;
