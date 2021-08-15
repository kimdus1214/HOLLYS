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
        if(open==0){
            open.css('height','auto');
            var openHiddenDepmenu = $('.hiddenMenu').not($(this)).css('height');
            console.log(openHiddenDepmenu);
            if(openHiddenDepmenu > 40){
                $('.hiddenMenu').not($(this)).animate({
                    height: 40
                });
            }
        }else{
            $(this).css('height','40px');
        }
    });

})