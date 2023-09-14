// document.querySelector('.toggle').addEventListener('click', function(){    
//     this.classList.toggle('toggle--active');
// })

document.addEventListener('DOMContentLoaded', function(){
// показать/скрыть мобильное меню
    const menuToggle = document.querySelector('#toggle');
    const headerMenu = document.querySelector('#header-top__menu');
    // прослушивание клика по кнопке
    menuToggle.addEventListener('click', function(){
        if(this.classList.contains('toggle--active')){
            this.classList.remove('toggle--active');
        }
        else{
            this.classList.add('toggle--active');
        }
    });
});