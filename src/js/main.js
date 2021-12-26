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
			e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML.toLowerCase();
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

const tab = function () {
	let tabNav = document.querySelectorAll('.tabs-nav__item'), // Выбираем элементы навигации табов
		tabContent = document.querySelectorAll('.tabs-content__item'), // Выбираем самы табы
		tabName; // Переменная для имени таба

	// Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
	tabNav.forEach((item) => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav(evt) {
		evt.currentTarget.closest('.tabs-nav').querySelectorAll('.tabs-nav__item').forEach((item) => {
			// Удаляем активный класс у всех элементов навигации табов
			item.classList.remove('tabs-nav__item--active');
		});
		this.classList.add('tabs-nav__item--active');  // Добавляем активный укласс у элемента по которому кликнули
		tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен

		console.log(evt.currentTarget.closest('.tabs-nav'))

		evt.currentTarget.closest('.tabs-nav').nextElementSibling.querySelectorAll('.tabs-content__item').forEach((item) => {
			const { classList } = item;
			classList.contains(tabName) ? classList.add('is-active') : classList.remove('is-active');
		}); // Запускаем функцию, чтобы показать выбранный таб
	}
};

tab();

const dropdownToggle = () => {
	const moreBtn = document.querySelectorAll('.files-table__more');

	moreBtn.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.currentTarget.closest('.files-table__cell').querySelector('.files-table__dropdown').classList.toggle('files-table__dropdown--opened');
		})
	});
};

dropdownToggle();