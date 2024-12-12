// Danish
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
		code: 'da',
		align: 'Justering',
		alignBottom: 'Juster bunden',
		alignCenter: 'Midterjustering',
		alignJustify: 'Tilpas margin',
		alignLeft: 'Venstrejustering',
		alignMiddle: 'Juster midten',
		alignRight: 'Højrejustering',
		alignTop: 'Juster toppen',
		anchor: 'Anker',
		asBlock: 'Som en blok',
		asInline: 'Som en inline',
		asLink: 'Som et link',
		audio: 'Audio',
		audioGallery: 'Lydgalleri',
		audio_modal_file: 'Indsæt fra fil',
		audio_modal_title: 'Indsæt Audio',
		audio_modal_url: 'Indsæt fra URL',
		autoSize: 'Auto størrelse',
		backgroundColor: 'Baggrundsfarve',
		basic: 'Basis',
		blockStyle: 'Blok stil',
		bold: 'Fed',
		border: 'Grænse',
		border_all: 'Grænse alle',
		border_inside: 'Grænse indeni',
		border_horizontal: 'Kant vandret',
		border_vertical: 'Kant lodret',
		border_outside: 'Grænse udenfor',
		border_left: 'Grænse til venstre',
		border_top: 'Border top',
		border_right: 'Grænse til højre',
		border_bottom: 'Border bund',
		border_none: 'Grænse ingen',
		bulletedList: 'Uordnet liste',
		cancel: 'Ophæve',
		caption: 'Indsæt beskrivelse',
		cellProperties: 'Celleegenskaber',
		center: 'Centrum',
		close: 'Luk',
		codeView: 'Vis koder',
		color: 'Farve',
		colorPicker: 'Farvevælger',
		column: 'Kolonne',
		comment: 'Kommentarer',
		commentAdd: 'Tilføj kommentar',
		commentShow: 'Vis kommentarer',
		copy: 'Kopi',
		copyFormat: 'Maling formatering',
		cut: 'Skære',
		default: 'Default',
		deleteColumn: 'Slet kolonne',
		deleteRow: 'Slet række',
		dir_ltr: 'Venstre til højre',
		dir_rtl: 'Højre til venstre',
		download: 'Download',
		drag: 'Træk',
		drawing: 'Tegning',
		drawing_modal_title: 'Tegning',
		edit: 'Rediger',
		embed: 'Integrer',
		embed_modal_title: 'Integrer',
		embed_modal_source: 'Integrer kilde / URL',
		exportPDF: 'Eksporter til PDF',
		exportWord: 'Eksporter til Word',
		find: 'Finde',
		decrease: 'Formindske',
		increase: 'Øge',
		fileBrowser: 'Filbrowser',
		fileGallery: 'Filgalleri',
		fileUpload: 'Fil upload',
		fixedColumnWidth: 'Fast søjlebredde',
		font: 'Skrifttype',
		fontColor: 'Skriftfarve',
		fontSize: 'Skriftstørrelse',
		formats: 'Format',
		fullScreen: 'Fuld skærm',
		height: 'Højde',
		horizontalLine: 'Horisontal linie',
		horizontalSplit: 'Opdel horisontalt',
		hr_dashed: 'Streget',
		hr_dotted: 'Punkteret',
		hr_solid: 'Almindelig',
		id: 'ID',
		image: 'Billede',
		imageGallery: 'Billedgalleri',
		image_modal_altText: 'Alternativ tekst',
		image_modal_file: 'Indsæt fra fil',
		image_modal_title: 'Indsæt billede',
		image_modal_url: 'Indsæt fra URL',
		importWord: 'Importer fra Word',
		indent: 'Ryk ind',
		inlineStyle: 'Inline stil',
		insertColumnAfter: 'Indsæt kolonne efter',
		insertColumnBefore: 'Indsæt kolonne før',
		insertRowAbove: 'Indsæt række foroven',
		insertRowBelow: 'Indsæt række nedenfor',
		insertLine: 'Indsæt linje',
		italic: 'Skråskrift',
		layout: 'Layout',
		left: 'Venstre',
		lineHeight: 'Linjehøjde',
		link: 'Link',
		link_modal_bookmark: 'Bogmærke',
		link_modal_downloadLinkCheck: 'Download link',
		link_modal_newWindowCheck: 'Åben i nyt faneblad',
		link_modal_text: 'Tekst for link',
		link_modal_title: 'Indsæt link',
		link_modal_url: 'URL til link',
		link_modal_relAttribute: 'Rel attribut',
		list: 'Lister',
		math: 'Math',
		math_modal_fontSizeLabel: 'Skriftstørrelse',
		math_modal_inputLabel: 'Matematisk notation',
		math_modal_previewLabel: 'Preview',
		math_modal_title: 'Math',
		maxSize: 'Max størrelse',
		mediaGallery: 'Mediegalleri',
		mention: 'Nævne',
		menu_bordered: 'Afgrænsningslinje',
		menu_code: 'Code',
		menu_neon: 'Neon',
		menu_shadow: 'Skygge',
		menu_spaced: 'Brev Afstand',
		menu_translucent: 'Gennemsigtig',
		mergeCells: 'Sammenlæg celler (merge)',
		minSize: 'Min størrelse',
		mirrorHorizontal: 'Spejling, horisontal',
		mirrorVertical: 'Spejling, vertikal',
		newDocument: 'Nyt dokument',
		numberedList: 'Nummereret liste',
		outdent: 'Ryk ud',
		pageBreak: 'Sideskift',
		pageDown: 'Side ned',
		pageNumber: 'Sidenummer',
		pageUp: 'Side op',
		paragraphStyle: 'Afsnitstil',
		preview: 'Preview',
		print: 'Print',
		proportion: 'Bevar proportioner',
		ratio: 'Forhold',
		redo: 'Redo',
		remove: 'Fjern',
		removeFormat: 'Fjern formatering',
		replace: 'Erstatte',
		replaceAll: 'Udskift alle',
		resize100: 'Forstør 100%',
		resize25: 'Forstør 25%',
		resize50: 'Forstør 50%',
		resize75: 'Forstør 75%',
		resize: 'Ændr størrelse',
		revert: 'Gendan',
		revisionHistory: 'Revisionshistorie',
		right: 'Højre',
		rotateLeft: 'Roter til venstre',
		rotateRight: 'Toter til højre',
		row: 'Række',
		save: 'Gem',
		search: 'Søg',
		selectAll: 'Vælg alle',
		showBlocks: 'Vis blokke',
		size: 'Størrelse',
		splitCells: 'Opdel celler',
		strike: 'Overstreget',
		submitButton: 'Gennemfør',
		subscript: 'Sænket skrift',
		superscript: 'Hævet skrift',
		table: 'Tabel',
		tableHeader: 'Tabel overskrift',
		tableProperties: 'Tabel egenskaber',
		tags: 'Tags',
		tag_blockquote: 'Citer',
		tag_div: 'Normal (DIV)',
		tag_h: 'Overskrift',
		tag_p: 'Paragraph',
		tag_pre: 'Code',
		template: 'Schablone',
		textStyle: 'Tekststil',
		title: 'Titel',
		underline: 'Understreget',
		undo: 'Undo',
		unlink: 'Fjern link',
		verticalSplit: 'Opdel vertikalt',
		video: 'Video',
		videoGallery: 'Videogalleri',
		video_modal_file: 'Indsæt fra fil',
		video_modal_title: 'Indsæt Video',
		video_modal_url: 'Indlejr video / YouTube,Vimeo',
		width: 'Bredde'
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'da', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});
