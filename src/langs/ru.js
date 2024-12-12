// Russia
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
		code: 'ru',
		align: 'Выравнивание',
		alignBottom: 'Выровнять по нижнему краю',
		alignCenter: 'По центру',
		alignJustify: 'По ширине',
		alignLeft: 'Слева',
		alignMiddle: 'Выровнять по центру',
		alignRight: 'Справа',
		alignTop: 'Выровнять по верхнему краю',
		anchor: 'Якорь',
		asBlock: 'Как блок',
		asInline: 'Как встроенный',
		asLink: 'Как ссылка',
		audio: 'Аудио',
		audioGallery: 'Аудиогалерея',
		audio_modal_file: 'Выберите файл',
		audio_modal_title: 'Вставить аудио',
		audio_modal_url: 'Адрес аудио',
		autoSize: 'Авто размер',
		backgroundColor: 'Цвет фона',
		basic: 'Без обтекания',
		blockStyle: 'Стиль блока',
		bold: 'Полужирный',
		border: 'Граница',
		border_all: 'Граница всего',
		border_inside: 'Граница внутри',
		border_horizontal: 'Граница горизонтальная',
		border_vertical: 'Граница вертикальная',
		border_outside: 'Граница снаружи',
		border_left: 'Граница слева',
		border_top: 'Граница сверху',
		border_right: 'Граница справа',
		border_bottom: 'Граница снизу',
		border_none: 'Граница отсутствует',
		bulletedList: 'Маркированный',
		cancel: 'Отмена',
		caption: 'Добавить подпись',
		cellProperties: 'Свойства ячейки',
		center: 'По центру',
		close: 'Закрыть',
		codeView: 'Редактировать HTML',
		color: 'Цвет',
		colorPicker: 'Выбор цвета',
		column: 'Столбец',
		comment: 'Комментарии',
		commentAdd: 'Добавить комментарий',
		commentShow: 'Показать комментарии',
		copy: 'Копировать',
		copyFormat: 'Форматирование рисования',
		cut: 'Вырезать',
		default: 'По умолчанию',
		deleteColumn: 'Удалить столбец',
		deleteRow: 'Удалить строку',
		dir_ltr: 'Слева направо',
		dir_rtl: 'Справа налево',
		download: 'Скачать',
		drag: 'Перетащить',
		drawing: 'Рисунок',
		drawing_modal_title: 'Рисунок',
		edit: 'Изменить',
		embed: 'Встроить',
		embed_modal_title: 'Встроить',
		embed_modal_source: 'Встроить Источник / URL',
		exportPDF: 'Экспорт в PDF',
		exportWord: 'Экспорт в Word',
		find: 'Найти',
		decrease: 'Уменьшить',
		increase: 'Увеличить',
		fileBrowser: 'Браузер файлов',
		fileGallery: 'Галерея файлов',
		fileUpload: 'Загрузка файлов',
		fixedColumnWidth: 'Фиксированная ширина столбца',
		font: 'Шрифт',
		fontColor: 'Цвет текста',
		fontSize: 'Размер шрифта',
		formats: 'Стиль абзаца',
		fullScreen: 'Полный экран',
		height: 'Высота',
		horizontalLine: 'Горизонтальная линия',
		horizontalSplit: 'Разделить горизонтально',
		hr_dashed: 'Штриховая',
		hr_dotted: 'Пунктир',
		hr_solid: 'Сплошная',
		id: 'ID',
		image: 'Изображение',
		imageGallery: 'Галерея',
		image_modal_altText: 'Текстовое описание изображения',
		image_modal_file: 'Выберите файл',
		image_modal_title: 'Вставить изображение',
		image_modal_url: 'Адрес изображения',
		importWord: 'Импорт из Word',
		indent: 'Увеличить отступ',
		inlineStyle: 'Встроенный стиль',
		insertColumnAfter: 'Вставить столбец справа',
		insertColumnBefore: 'Вставить столбец слева',
		insertRowAbove: 'Вставить строку выше',
		insertRowBelow: 'Вставить строку ниже',
		insertLine: 'Вставить строку',
		italic: 'Курсив',
		layout: 'Макет',
		left: 'Слева',
		lineHeight: 'Высота линии',
		link: 'Ссылка',
		link_modal_bookmark: 'Закладка',
		link_modal_downloadLinkCheck: 'Ссылка для скачивания',
		link_modal_newWindowCheck: 'Открывать в новом окне',
		link_modal_text: 'Текст',
		link_modal_title: 'Вставить ссылку',
		link_modal_url: 'Ссылка',
		link_modal_relAttribute: 'Атрибут Rel',
		list: 'Списки',
		math: 'математический',
		math_modal_fontSizeLabel: 'Кегль',
		math_modal_inputLabel: 'Математическая запись',
		math_modal_previewLabel: 'Предварительный просмотр',
		math_modal_title: 'математический',
		maxSize: 'Ширина по размеру страницы',
		mediaGallery: 'Галерея мультимедиа',
		mention: 'Упоминание',
		menu_bordered: 'Граничная Линия',
		menu_code: 'Код',
		menu_neon: 'неон',
		menu_shadow: 'Тень',
		menu_spaced: 'интервал',
		menu_translucent: 'полупрозрачный',
		mergeCells: 'Объединить ячейки',
		minSize: 'Ширина по содержимому',
		mirrorHorizontal: 'Отразить по горизонтали',
		mirrorVertical: 'Отразить по вертикали',
		newDocument: 'Новый документ',
		numberedList: 'Нумерованный',
		outdent: 'Уменьшить отступ',
		pageBreak: 'Разрыв страницы',
		pageDown: 'Страница вниз',
		pageNumber: 'Страница номер',
		pageUp: 'Страница вверх',
		paragraphStyle: 'Стиль абзаца',
		preview: 'Предварительный просмотр',
		print: 'Печать',
		proportion: 'Сохранить пропорции',
		ratio: 'Соотношение',
		redo: 'Вернуть',
		remove: 'Удалить',
		removeFormat: 'Очистить форматирование',
		replace: 'Заменить',
		replaceAll: 'Заменить все',
		resize100: 'Размер 100%',
		resize25: 'Размер 25%',
		resize50: 'Размер 50%',
		resize75: 'Размер 75%',
		resize: 'Изменить размер',
		revert: 'Сбросить',
		revisionHistory: 'История изменений',
		right: 'Справа',
		rotateLeft: 'Повернуть против часовой стрелки',
		rotateRight: 'Повернуть по часовой стрелке',
		row: 'Строка',
		save: 'Сохранить',
		search: 'Поиск',
		selectAll: 'Выбрать все',
		showBlocks: 'Блочный вид',
		size: 'Размер',
		splitCells: 'Разделить ячейку',
		strike: 'Зачеркнутый',
		submitButton: 'Подтвердить',
		subscript: 'Нижний индекс',
		superscript: 'Верхний индекс',
		table: 'Таблица',
		tableHeader: 'Строка заголовков',
		tableProperties: 'Свойства таблицы',
		tags: 'Теги',
		tag_blockquote: 'Цитата',
		tag_div: 'Базовый',
		tag_h: 'Заголовок',
		tag_p: 'Текст',
		tag_pre: 'Код',
		template: 'Шаблон',
		textStyle: 'Стиль текста',
		title: 'Заголовок',
		underline: 'Подчёркнутый',
		undo: 'Отменить',
		unlink: 'Убрать ссылку',
		verticalSplit: 'Разделить вертикально',
		video: 'Видео',
		videoGallery: 'Видеогалерея',
		video_modal_file: 'Выберите файл',
		video_modal_title: 'Вставить видео',
		video_modal_url: 'Ссылка на видео, Youtube,Vimeo',
		width: 'Ширина'
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'ru', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});
