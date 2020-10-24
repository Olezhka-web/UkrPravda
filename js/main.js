var color = true;
$(function(){
    $('.menu__btn').on('click', function(){
        $('.header__drop-menu').slideToggle('slow', function(){
            if (color==true){
                $('.header__container').css('background-color', '#2e2e2e');
            color=false;
            } else {
                $('.header__container').css('background-color', '#7e0019');
                color=true;
            }
        });
    });
});