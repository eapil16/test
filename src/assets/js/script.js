'use strict';
document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('body').addEventListener('click', e => {
		if (e.target.closest('.tree-levels-item__caption_button')) {
			e.target.closest('.tree-levels-item').classList.toggle('active');
		}
	});

});
