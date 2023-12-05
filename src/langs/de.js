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
		code: 'de',
		align: 'Ausrichtung',
		alignCenter: 'Zentriert ausrichten',
		alignJustify: 'Blocksatz',
		alignLeft: 'Links ausrichten',
		alignRight: 'Rechts ausrichten',
		audio: 'Audio',
		audio_modal_file: 'Datei auswählen',
		audio_modal_title: 'Audio einfügen',
		audio_modal_url: 'Audio-URL',
		autoSize: 'Automatische Größenanpassung',
		backgroundColor: 'Farbe für Hervorhebungen',
		basic: 'Standard',
		bold: 'Fett',
		bulletedList: 'Aufzählung',
		caption: 'Beschreibung eingeben',
		center: 'Zentriert',
		close: 'Schließen',
		codeView: 'Quelltext anzeigen',
		default: 'Standard',
		deleteColumn: 'Spalte löschen',
		deleteRow: 'Zeile löschen',
		dir_ltr: 'Links nach rechts',
		dir_rtl: 'Rechts nach links',
		edit: 'Bearbeiten',
		fixedColumnWidth: 'Feste Spaltenbreite',
		font: 'Schriftart',
		fontColor: 'Schriftfarbe',
		fontSize: 'Schriftgröße',
		formats: 'Format',
		fullScreen: 'Vollbild',
		height: 'Höhe',
		horizontalLine: 'Horizontale Linie',
		horizontalSplit: 'Horizontal teilen',
		hr_dashed: 'Gestrichelt',
		hr_dotted: 'Gepunktet',
		hr_solid: 'Strich',
		image: 'Bild',
		imageGallery: 'Bildergalerie',
		image_modal_altText: 'Alternativer Text',
		image_modal_file: 'Datei auswählen',
		image_modal_title: 'Bild einfügen',
		image_modal_url: 'Bild-URL',
		indent: 'Einzug vergrößern',
		insertColumnAfter: 'Spalte rechts einfügen',
		insertColumnBefore: 'Spalte links einfügen',
		insertRowAbove: 'Zeile oberhalb einfügen',
		insertRowBelow: 'Zeile unterhalb einfügen',
		italic: 'Kursiv',
		layout: 'Layout',
		left: 'Links',
		lineHeight: 'Zeilenhöhe',
		link: 'Link',
		link_modal_bookmark: 'Lesezeichen',
		link_modal_downloadLinkCheck: 'Download-Link',
		link_modal_newWindowCheck: 'In neuem Fenster anzeigen',
		link_modal_text: 'Link-Text',
		link_modal_title: 'Link einfügen',
		link_modal_url: 'Link-URL',
		list: 'Liste',
		math: 'Mathematik',
		math_modal_fontSizeLabel: 'Schriftgröße',
		math_modal_inputLabel: 'Mathematische Notation',
		math_modal_previewLabel: 'Vorschau',
		math_modal_title: 'Mathematik',
		maxSize: 'Maximale Größe',
		mention: 'Erwähnen',
		menu_bordered: 'Umrandet',
		menu_code: 'Quellcode',
		menu_neon: 'Neon',
		menu_shadow: 'Schatten',
		menu_spaced: 'Buchstabenabstand',
		menu_translucent: 'Durchscheinend',
		mergeCells: 'Zellen verbinden',
		minSize: 'Mindestgröße',
		mirrorHorizontal: 'Horizontal spiegeln',
		mirrorVertical: 'Vertikal spiegeln',
		numberedList: 'Nummerierte Liste',
		outdent: 'Einzug verkleinern',
		paragraphStyle: 'Absatzstil',
		preview: 'Vorschau',
		print: 'Drucken',
		proportion: 'Seitenverhältnis beibehalten',
		ratio: 'Verhältnis',
		redo: 'Wiederholen',
		remove: 'Löschen',
		removeFormat: 'Format entfernen',
		resize100: 'Zoom 100%',
		resize25: 'Zoom 25%',
		resize50: 'Zoom 50%',
		resize75: 'Zoom 75%',
		resize: 'Resize',
		revert: 'Rückgängig',
		right: 'Rechts',
		rotateLeft: 'Nach links drehen',
		rotateRight: 'Nach rechts drehen',
		save: 'Speichern',
		search: 'Suche',
		showBlocks: 'Blockformatierungen anzeigen',
		size: 'Größe',
		splitCells: 'Zellen teilen',
		strike: 'Durchgestrichen',
		submitButton: 'Übernehmen',
		subscript: 'Tiefgestellt',
		superscript: 'Hochgestellt',
		table: 'Tabelle',
		tableHeader: 'Tabellenüberschrift',
		tags: 'Stichworte',
		tag_blockquote: 'Zitat',
		tag_div: 'Normal (DIV)',
		tag_h: 'Header',
		tag_p: 'Absatz',
		tag_pre: 'Quellcode',
		template: 'Vorlage',
		textStyle: 'Textstil',
		title: 'Title',
		underline: 'Unterstrichen',
		undo: 'Rückgängig',
		unlink: 'Link entfernen',
		verticalSplit: 'Vertikal teilen',
		video: 'Video',
		video_modal_file: 'Datei auswählen',
		video_modal_title: 'Video einfügen',
		video_modal_url: 'Video-URL, YouTube/Vimeo',
		width: 'Breite',
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'de', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});
