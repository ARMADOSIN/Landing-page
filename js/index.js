// Найти нужные узлы
const popupButton = document.querySelector('.popup-menu__button');
const popupWraper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

// Выполним ф-цию клика по кнопке

popupButton.addEventListener('click', handleMenu);

// Ф-ция, которая показывает и скрывает поп-ап
function handleMenu() {
    popupMenu.classList.toggle('hide-popup');
}

// Ф-ция, при клике на любое место экрана
document.addEventListener('click', hidePopup);

function hidePopup(el) {
    // Проверяем, есть ли внутри того, по чему кликнули поп-ап меню или кнопка
    let targetInside = popupWraper.contains(el.target);
    // Если нет, то прячем меню
    if(!targetInside) {
        popupMenu.classList.add('hide-popup');
    }
    else{
        return;
    }
}