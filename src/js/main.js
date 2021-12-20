const select = () => {
	const selectCurrent = document.querySelectorAll('.select__header'),
		selectItem = document.querySelectorAll('.select__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('select--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.select').classList.remove('select--opened');
		})
	});
};

select();

const menuToggle = () => {
	const menu = document.querySelector('.menu');
	const toggleBtn = document.querySelector('.menu-state');
	const menuBackground = document.querySelector('.menu-overlay');

	toggleBtn.addEventListener('click', function () {
		menu.classList.toggle('menu--opened');
		this.classList.toggle('menu-state--active');
		if (window.innerWidth < 575) {
			document.body.classList.toggle('menu--mobile');
			menuBackground.classList.toggle('menu-overlay--active');
		}
	});
};

menuToggle();
