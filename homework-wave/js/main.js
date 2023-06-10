$(function(){

    $(".menu a, .footer a").on("click",function(event){ 
        //находим все ссылки в .menu
        event.preventDefault();
        //отменяем работу ссылок

        var id = $(this).attr('href'),
        //находит у каждой меню(attr - забирает) и забирает значение в href
        // в  памяти хранит значение

        top = $(id).offset().top;

        //узнаем сколько нам нужно скроллить

        $('body,html').animate({scrollTop:top}, 1000);
        //1500 мл
    });

    

    $('.slider__inner-content').slick({
        dots: true,
        arrows: false
        
    });


    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active')

    });


    var mixer = mixitup('.gallery__content');

});