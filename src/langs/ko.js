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
		code: 'ko',
		align: '정렬',
		alignBottom: '아래쪽 정렬',
		alignCenter: '가운데 정렬',
		alignJustify: '양쪽 정렬',
		alignLeft: '왼쪽 정렬',
		alignMiddle: '중간 정렬',
		alignRight: '오른쪽 정렬',
		alignTop: '위쪽 정렬',
		asBlock: '블록으로 보기',
		asLink: '링크로 보기',
		audio: '오디오',
		audio_modal_file: '파일 선택',
		audio_modal_title: '오디오 삽입',
		audio_modal_url: '오디오 파일 주소',
		autoSize: '자동 크기',
		backgroundColor: '배경색',
		basic: '기본',
		blockStyle: '블록 스타일',
		bold: '굵게',
		border: '테두리',
		border_all: '모든 테두리',
		border_inside: '안쪽 테두리',
		border_horizontal: '안쪽 가로 테두리',
		border_vertical: '안쪽 세로 테두리',
		border_outside: '바깥쪽 테두리',
		border_left: '왼쪽 테두리',
		border_top: '위쪽 테두리',
		border_right: '오른쪽 테두리',
		border_bottom: '아래쪽 테두리',
		border_none: '테두리 없음',
		bulletedList: '원형 리스트',
		cancel: '취소',
		caption: '설명 넣기',
		cellProperties: '셀 속성',
		center: '가운데',
		close: '닫기',
		codeView: 'HTML 편집',
		color: '색상',
		colorPicker: '색상 선택기',
		column: '열',
		comment: '코멘트',
		commentAdd: '코멘트 추가',
		commentShow: '코멘트 보기',
		copy: '복사',
		copyFormatting: '서식 복사',
		cut: '잘라내기',
		default: '기본값',
		deleteColumn: '열 삭제',
		deleteRow: '행 삭제',
		dir_ltr: '왼쪽에서 오른쪽',
		dir_rtl: '오른쪽에서 왼쪽',
		download: '다운로드',
		drag: '드래그',
		edit: '편집',
		exportPdf: 'PDF로 내보내기',
		exportWord: 'Word로 내보내기',
		find: '찾기',
		decrease: '내리기',
		increase: '올리기',
		fileUpload: '파일 업로드',
		fixedColumnWidth: '고정 된 열 너비',
		font: '글꼴',
		fontColor: '글자색',
		fontSize: '크기',
		formats: '문단 형식',
		fullScreen: '전체 화면',
		height: '세로',
		horizontalLine: '가로 줄 삽입',
		horizontalSplit: '가로 분할',
		hr_dashed: '대시',
		hr_dotted: '점선',
		hr_solid: '실선',
		image: '이미지',
		imageGallery: '이미지 갤러리',
		image_modal_altText: '대체 문자열',
		image_modal_file: '파일 선택',
		image_modal_title: '이미지 삽입',
		image_modal_url: '이미지 주소',
		importWord: '워드에서 가져오기',
		indent: '들여쓰기',
		inlineStyle: '인라인 스타일',
		insertColumnAfter: '오른쪽에 열 삽입',
		insertColumnBefore: '왼쪽에 열 삽입',
		insertRowAbove: '위에 행 삽입',
		insertRowBelow: '아래에 행 삽입',
		insertLine: '라인 삽입',
		italic: '기울임',
		layout: '레이아웃',
		left: '왼쪽',
		lineHeight: '줄 높이',
		link: '링크',
		link_modal_bookmark: '북마크',
		link_modal_downloadLinkCheck: '다운로드 링크',
		link_modal_newWindowCheck: '새창으로 열기',
		link_modal_text: '화면 텍스트',
		link_modal_title: '링크 삽입',
		link_modal_url: '인터넷 주소',
		link_modal_relAttribute: 'Rel 속성',
		list: '리스트',
		math: '수식',
		math_modal_fontSizeLabel: '글자 크기',
		math_modal_inputLabel: '수학적 표기법',
		math_modal_previewLabel: '미리보기',
		math_modal_title: '수식',
		maxSize: '최대화',
		mention: '멘션',
		menu_bordered: '경계선',
		menu_code: '코드',
		menu_neon: '네온',
		menu_shadow: '그림자',
		menu_spaced: '글자 간격',
		menu_translucent: '반투명',
		mergeCells: '셀 병합',
		minSize: '최소화',
		mirrorHorizontal: '좌우 반전',
		mirrorVertical: '상하 반전',
		newDocument: '새 문서',
		numberedList: '숫자형 리스트',
		outdent: '내어쓰기',
		pageBreak: '페이지 나누기',
		paragraphStyle: '문단 스타일',
		preview: '미리보기',
		print: '인쇄',
		proportion: '비율 맞춤',
		ratio: '비율',
		redo: '다시 실행',
		remove: '삭제',
		removeFormat: '형식 제거',
		replace: '바꾸기',
		replaceAll: '전체 바꾸기',
		resize100: '100% 크기',
		resize25: '25% 크기',
		resize50: '50% 크기',
		resize75: '75% 크기',
		resize: '크기',
		revert: '되돌리기',
		revisionHistory: '수정 이력',
		right: '오른쪽',
		rotateLeft: '왼쪽으로 회전',
		rotateRight: '오른쪽으로 회전',
		row: '행',
		save: '저장',
		search: '검색',
		selectAll: '전체 선택',
		showBlocks: '블록 보기',
		size: '크기',
		splitCells: '셀 분할',
		strike: '취소선',
		submitButton: '확인',
		subscript: '아래 첨자',
		superscript: '위 첨자',
		table: '테이블',
		tableHeader: '테이블 제목',
		tableProperties: '테이블 속성',
		tags: '태그',
		tag_blockquote: '인용문',
		tag_div: '기본 (DIV)',
		tag_h: '제목',
		tag_p: '본문',
		tag_pre: '코드',
		template: '템플릿',
		textStyle: '글자 스타일',
		title: '제목',
		underline: '밑줄',
		undo: '실행 취소',
		unlink: '링크 해제',
		verticalSplit: '세로 분할',
		video: '동영상',
		video_modal_file: '파일 선택',
		video_modal_title: '동영상 삽입',
		video_modal_url: '미디어 임베드 주소, 유튜브/비메오',
		width: '가로'
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

		Object.defineProperty(window.SUNEDITOR_LANG, 'ko', {
			enumerable: true,
			writable: true,
			configurable: true,
			value: lang
		});
	}

	return lang;
});
