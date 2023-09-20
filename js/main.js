document.addEventListener('DOMContentLoaded', function(){
    // показать/скрыть мобильное меню, зафиксировать body
    const menuToggle = document.querySelector('#toggle');
    const headerMenu = document.querySelector('#header-top__menu');
    const bodyLock = document.body;
    // прослушивание клика по кнопке
    menuToggle.addEventListener('click', function(){
        if(this.classList.contains('toggle--active')){
            this.classList.remove('toggle--active');
            headerMenu.classList.remove('header-top__menu--open');
            bodyLock.classList.remove('body--lock');
        }
        else{
            this.classList.add('toggle--active');
            headerMenu.classList.add('header-top__menu--open');
            bodyLock.classList.add('body--lock');
        }
    });
    headerMenu.addEventListener('click', function(){
        this.classList.remove('header-top__menu--open');
        menuToggle.classList.remove('toggle--active');
        bodyLock.classList.remove('body--lock');
    });
});
// mixitup
$(document).ready(function(){
    let containerEl = document.querySelector('#portfolio__projects');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });
})
