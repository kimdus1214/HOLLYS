$(document).ready(function () {
    $('#hiddenToggle').click(function(){
        if($('#hiddenMainMenu').hasClass('hiddenMainMenuNone')){
            $('#hiddenMainMenu').css('display','block');
            $('#hiddenMainMenuWrap').stop().animate({
                right:0
            },500);
            $('#hiddenMainMenuWrap, #hiddenMainMenu').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        }else{
            $('#hiddenMainMenu').css('display','none');
            $('#hiddenMainMenuWrap').stop().animate({
                right:'-50%'
            },500);
            $('#hiddenMainMenuWrap, #hiddenMainMenu').off('scroll touchmove mousewheel'); 
        }
    });
    $('.hiddenMenuX').click(function(){
        $('#hiddenMainMenu').addClass('hiddenMainMenuNone');
        $('#hiddenMainMenu').css('display','none');
        $('#hiddenMainMenuWrap').stop().animate({
            right:'-50%'
        },500);
    });

    $('.hiddenMenu').click(function(){
        var open = $(this).height();
        if(open==40){
            $(this).css('height','auto');
            $(this).find('>a').addClass('hiddenMenuActive');
            var openHiddenDepmenu = $('.hiddenMenu').not(this).css('height');
            $(this).find('i').toggleClass('fa-chevron-up');
            if(openHiddenDepmenu != 40){
                $('.hiddenMenu').not(this).animate({
                    height: 40
                });
                $('.hiddenMenu').not(this).find('>a').removeClass('hiddenMenuActive');
                $('.hiddenMenu').not(this).find('i').removeClass('fa-chevron-up');
            }
        }else{
            $(this).css('height','40px');
            $(this).find('>a').removeClass('hiddenMenuActive');
        }
    });

})