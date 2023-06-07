$(function(){


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

    $('.menu__btn').on('click',function(){
        $('.header__top').toggleClass('header__top--active');

    });





    var mixer = mixitup('.gallery__content');

});