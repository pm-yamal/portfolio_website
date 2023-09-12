// document.querySelector('.toggle').addEventListener('click', function(){    
//     this.classList.toggle('toggle--active');
// })

document.addEventListener('DOMContentLoader', function(){
// показать/скрыть мобильное меню
    const menuToggle = document.querySelector('#toggle');
    const headerMenu = document.querySelector('#header-top__menu');
    // прослушивание клика по кнопке
    menuToggle.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }
        else{
            this.classList.add('active');
        }
    });
});