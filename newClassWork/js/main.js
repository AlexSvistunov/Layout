$(function(){

    $(".menu a, .footer__arrow").on("click",function(event){ 
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


    $('.slider__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',

        responsive:[{
            breakpoint: 769,
            settings: {
                arrows: false
            }
        }]

    });

    $('.menu__btn,.menu a' ).on('click',function(){
        $('.header__top').toggleClass('header__top--active');

    });





    var mixer = mixitup('.gallery__content');

});