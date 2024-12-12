// Romania
(function (global, factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = global.document
			? factory(global, true)
			: function (w) {
					if (!w.document) {
						throw new Error('SUNEDITOR_LANG a window with a document');
					}
					return factory(w);
			  };
	} else {
		factory(global);
	}
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
	const lang = {
		code: 'ro',
		align: 'Aliniere',
		alignBottom: 'Aliniați partea de jos',
		alignCenter: 'Aliniere la centru',
		alignJustify: 'Aliniere stânga - dreapta',
		alignLeft: 'Aliniere la stânga',
		alignMiddle: 'Aliniați mijlocul',
		alignRight: 'Aliniere la dreapta',
		alignTop: 'Aliniați partea de sus',
		anchor: 'Ancoră',
		asBlock: 'Ca bloc',
		asInline: 'Ca un inline',
		asLink: 'Ca link',
		audio: 'Audio',
		audioGallery: 'Galerie audio',
		audio_modal_file: 'Selectează',
		audio_modal_title: 'Inserează Audio',
		audio_modal_url: 'URL Audio',
		autoSize: 'Dimensiune automată',
		backgroundColor: 'Culoare de evidențiere',
		basic: 'De bază',
		blockStyle: 'Stilul bloc',
		bold: 'Îngroșat',
		border: 'Frontieră',
		border_all: 'Delimitează toate',
		border_inside: 'Graniță în interior',
		border_horizontal: 'Chenar orizontal',
		border_vertical: 'Chenar vertical',
		border_outside: 'Frontieră afară',
		border_left: 'Granița stângă',
		border_top: 'Chenar de sus',
		border_right: 'Granita dreapta',
		border_bottom: 'Bord de jos',
		border_none: 'Frontiera nici unul',
		bulletedList: 'Listă neordonată',
		cancel: 'Anula',
		caption: 'Inserează descriere',
		cellProperties: 'Proprietățile celulei',
		center: 'Centru',
		close: 'Închide',
		codeView: 'Vizualizare cod',
		color: 'Culoare',
		colorPicker: 'Selector de culoare',
		column: 'Coloană',
		comment: 'Comentarii',
		commentAdd: 'Adaugă comentariu',
		commentShow: 'Afișează comentarii',
		copy: 'Copie',
		copyFormat: 'Formatarea vopselei',
		cut: 'Tăiați',
		default: 'Default',
		deleteColumn: 'Șterge coloană',
		deleteRow: 'Șterge linie',
		dir_ltr: 'De la stânga la dreapta',
		dir_rtl: 'De la dreapta la stanga',
		download: 'Descărcați',
		drag: 'Trageți',
		drawing: 'Desen',
		drawing_modal_title: 'Desen',
		edit: 'Editează',
		embed: 'Încorporați',
		embed_modal_title: 'Încorporați',
		embed_modal_source: 'Încorporați sursă / URL',
		exportPDF: 'Exportați în PDF',
		exportWord: 'Exportați în Word',
		find: 'Găsi',
		decrease: 'Scădere',
		increase: 'Crește',
		fileBrowser: 'Browser de fișiere',
		fileGallery: 'Galerie de fișiere',
		fileUpload: 'Încărcarea fișierului',
		fixedColumnWidth: 'Lățime fixă coloană',
		font: 'Font',
		fontColor: 'Culoare font',
		fontSize: 'Dimensiune',
		formats: 'Formate',
		fullScreen: 'Tot ecranul',
		height: 'Înălțime',
		horizontalLine: 'Linie orizontală',
		horizontalSplit: 'Despicare orizontală',
		hr_dashed: 'Punctate',
		hr_dotted: 'Punctat',
		hr_solid: 'Solid',
		id: 'ID',
		image: 'Imagine',
		imageGallery: 'Galerie de imagini',
		image_modal_altText: 'text alternativ',
		image_modal_file: 'Selectează',
		image_modal_title: 'Inserează imagine',
		image_modal_url: 'URL imagine',
		importWord: 'Import din Word',
		indent: 'Indentează',
		inlineStyle: 'Stilul inline',
		insertColumnAfter: 'Inserează coloană după',
		insertColumnBefore: 'Inserează coloană înainte',
		insertRowAbove: 'Inserează rând deasupra',
		insertRowBelow: 'Inserează rând dedesupt',
		insertLine: 'Inserați linia',
		italic: 'Înclinat',
		layout: 'Aspect',
		left: 'Stânga',
		lineHeight: 'Înălțime linie',
		link: 'Link',
		link_modal_bookmark: 'Marcaj',
		link_modal_downloadLinkCheck: 'Link de descărcare',
		link_modal_newWindowCheck: 'Deschide în fereastră nouă',
		link_modal_text: 'Text de afișat',
		link_modal_title: 'Inserează Link',
		link_modal_url: 'Adresă link',
		link_modal_relAttribute: 'Atributul rel',
		list: 'Listă',
		math: 'Matematică',
		math_modal_fontSizeLabel: 'Dimensiune font',
		math_modal_inputLabel: 'Notație matematică',
		math_modal_previewLabel: 'Previzualizare',
		math_modal_title: 'Matematică',
		maxSize: 'Dimensiune maximă',
		mediaGallery: 'Galeria media',
		mention: 'Mentiune',
		menu_bordered: 'Mărginit',
		menu_code: 'Citat',
		menu_neon: 'Neon',
		menu_shadow: 'Umbră',
		menu_spaced: 'Spațiat',
		menu_translucent: 'Translucent',
		mergeCells: 'Îmbină celule',
		minSize: 'Dimensiune minimă',
		mirrorHorizontal: 'Oglindă, orizontal',
		mirrorVertical: 'Oglindă, vertical',
		newDocument: 'Document nou',
		numberedList: 'Listă ordonată',
		outdent: 'Fără indentare',
		pageBreak: 'Spărtură de pagină',
		pageDown: 'Pagina în jos',
		pageNumber: 'Numărul paginii',
		pageUp: 'Pagina în sus',
		paragraphStyle: 'Stil paragraf',
		preview: 'Previzualizare',
		print: 'printează',
		proportion: 'Constrânge proporțiile',
		ratio: 'Ratie',
		redo: 'Refă',
		remove: 'Elimină',
		removeFormat: 'Șterge formatare',
		replace: 'Înlocui',
		replaceAll: 'Înlocuiește-le pe toate',
		resize100: 'Redimensionare 100%',
		resize25: 'Redimensionare 25%',
		resize50: 'Redimensionare 50%',
		resize75: 'Redimensionare 75%',
		resize: 'Redimensionați',
		revert: 'Revenire',
		revisionHistory: 'Istoricul revizuirilor',
		right: 'Dreapta',
		rotateLeft: 'Rotește la stânga',
		rotateRight: 'Rotește la dreapta',
		row: 'Rând',
		save: 'Salvează',
		search: 'Căutareim',
		selectAll: 'Selectați Toate',
		showBlocks: 'Arată blocuri',
		size: 'Dimensiune',
		splitCells: 'Divizează celule',
		strike: 'Tăiat',
		submitButton: 'Salvează',
		subscript: 'Subscript',
		superscript: 'Superscript',
		table: 'Tabel',
		tableHeader: 'Antet tabel',
		tableProperties: 'Proprietățile tabelului',
		tags: 'Etichete',
		tag_blockquote: 'Quote',
		tag_div: 'Normal (DIV)',
		tag_h: 'Antet',
		tag_p: 'Paragraf',
		tag_pre: 'Citat',
		template: 'Template',
		textStyle: 'Stil text',
		title: 'Titlu',
		underline: 'Subliniat',
		undo: 'Anulează',
		unlink: 'Scoate link',
		verticalSplit: 'Despicare verticală',
		video: 'Video',
		videoGallery: 'Galerie video',
		video_modal_file: 'Selectează',
		video_modal_title: 'Inserează video',
		video_modal_url: 'Include URL, youtube/vimeo',
		width: 'Lățime'
	};

	if (typeof noGlobal === typeof undefined) {
		if (!window.SUNEDITOR_LANG) {
			Object.defineProperty(window, 'SUNEDITOR_LANG', {
				enumerable: true,
				writable: false,
				configurable: false,
				value: {}
			});
		}

		Object.defineProperty(window.SUNEDITOR_LANG, 'ro', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});
